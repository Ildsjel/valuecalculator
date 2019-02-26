const WSJF = require("../model/WSJFitem");

//TODO sanitizing and trimming needs to be applied at a certain point

/*
exports.listAllWSJFtems = (req, res) => {
  WSJF.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};
*/



//old implementation
exports.createWSJFItem = (req, res, next) => {
  let newTask = new WSJF (
      {
          redcostotalppl: req.body.redcostotalppl,
          redcostotalhrs: req.body.redcostotalhrs,
          redcosfutureppl: req.body.redcosfutureppl,
          redcosfuturehrs: req.body.redcosfuturehrs,
          redcostotal: req.body.redcostotal
      });
  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
    console.log(task);
  });
};



/*
exports.readWSJFItem = (req, body) => {
  WSJF.findById(req.params.WSJF_item_id, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
}; */

/*
exports.updateWSJFitem = (req, res) => {
  WSJF.findOneAndUpdate(
    { _id: req.params.WSJF_item_id },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};

exports.deleteWSJFItem = (req, res) => {
  WSJF.remove({ _id: req.params.WSJF_item_id }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};
 */