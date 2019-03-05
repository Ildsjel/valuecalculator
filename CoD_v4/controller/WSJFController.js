const WSJF = require("../model/WSJFitem");
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

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

exports.createWSJFItem = [
    //Validate that fields are not empty
    body('itemName', 'Name required').isLength({ min: 1 }).trim(),
    body('redcostotalppl', 'People involved required').isLength({ min: 1}).trim(),
    body('redcostotalhrs', 'Hours involved required').isLength({ min: 1}).trim(),
    body('redcosfutureppl', 'Future people involved required').isLength({ min: 1}).trim(),
    body('redcosfuturehrs', 'Future hours involved required').isLength({ min: 1}).trim(),
    body('estimationValue', 'Please enter Time to Completion').isLength({ min: 1}).trim(),

    //Sanitize and trim itemName Field
    sanitizeBody('itemName').trim().escape(),

    //Process Request
    (req, res) => {

    //extract errors from validation
        const errors = validationResult(req);

  let newTask = new WSJF (
      {
          itemName: req.body.itemName,
          redcostotalppl: req.body.redcostotalppl,
          redcostotalhrs: req.body.redcostotalhrs,
          redcosfutureppl: req.body.redcosfutureppl,
          redcosfuturehrs: req.body.redcosfuturehrs,
          redcostotal: req.body.redcostotal,
          estimationValue: req.body.estimationValue,
          WSJFValue: req.body.WSJFValue
      });

    if (!errors.isEmpty()) {
        //there are errors = rerender form with error messages
        res.render('calculator.pug', {title: '', task: newTask, errors: errors.array()});
        return;
    }

  newTask.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.redirect('/post_WSJF_item');
    console.log(task);
  });
}
];


//detailview for a WSJF Item

exports.listWSJFItem = (req, res) => {

  WSJF.findById(req.params.WSJF_item_id, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
      res.render('calculatorDisplayItem.pug', {WSJF: task});
  });
};


//Update an item


//delete an item

// exports.deleteWSJFItem = (req, res) => {

    // let newTask = (
        // {
            // _id: req.params._id,
       //  });

    // console.log(_id);
    // newTask.findByIdAndRemove(req.params._id, newTask, {}, function (err, task) {
           // if (err) {
              //  res.status(500).send(err);
           //  }
            // res.render('calculatorDisplayAllItems.pug', {newTask: task});
        // }
   // );
// };
