const WSJF = require("../model/WSJFitem");

//TODO sanitizing and trimming needs to be applied at a certain point

//display a list of all WSJF Items

exports.listAllWSJFItems = (req, res) => {
  WSJF.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.render('calculatorDisplayAllItems.pug', {WSJFList: task});
  });
};


//create a new Item

exports.createWSJFItem = (req, res, next) => {
  let newTask = new WSJF (
      {
          itemName: req.body.itemName,
          redcostotalppl: req.body.redcostotalppl,
          redcostotalhrs: req.body.redcostotalhrs,
          redcosfutureppl: req.body.redcosfutureppl,
          redcosfuturehrs: req.body.redcosfuturehrs,
          redcostotal: req.body.redcostotal,
      });
  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.redirect('/post_WSJF_item');
    console.log(task);
  });
};


//detailview for a WSJF Item

exports.listWSJFItem = (req, res) => {
  WSJF.findById(req.params.WSJF_item_id, (err, task, next) => {
    if (err) {
      res.status(500).send(err);
    }
      res.render('calculatorDisplayItem.pug', {WSJF: task});;
  });
};


//Update an item

exports.updateWSJFitem = (req, res) => {

    let newTask = (
        {
            _id: req.params.WSJF_item_id,
            estimationValue: req.body.estimationValue,
        });
    console.log(newTask);
    WSJF.findByIdAndUpdate(req.params.WSJF_item_id, newTask, {}, function (err, task) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};


//delete an item
/*
exports.deleteWSJFItem = (req, res) => {
  WSJF.remove({ _id: req.params.WSJF_item_id }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json(task);
  });
}; */
