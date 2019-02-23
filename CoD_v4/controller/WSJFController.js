const WSJF = require("../model/WSJFitem");
const { body, validationResult } = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

sanitizeBody('name').trim().escape(),
    sanitizeBody('date').toDate(),

exports.listAllWSJFtems = (req, res) => {
  WSJF.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};


/*exports.createWSJFitem = [
    //validations of fields not empty
    body('redcostotalppl', 'People now required').isLength({ min: 1 }).trim(),
    body('redcostotalhrs', 'Hours now required').isLength({ min: 1 }).trim(),
    body('redcosfutureppl', 'People in future required').isLength({ min: 1 }).trim(),
    body('redcosfuturehrs', 'Hours in future required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the fields
    sanitizeBody('redcostotalppl').trim().escape(),
    sanitizeBody('redcostotalhrs').trim().escape(),
    sanitizeBody('redcosfutureppl').trim().escape(),
    sanitizeBody('redcosfuturehrs').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var WSJFItem = new WSJF(
            { name: req.body.name }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('calculator.pug', { title: '', genre: WSJF, errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid.
            WSJF.save(function (err) {
              if (err) { return next(err); }
              // Genre saved. Redirect to genre detail page.
                res.render('calculator.pug');
            });
        }
    }

];*/

//old implementation
exports.createWSJFItem = (req, res, next) => {
  let newTask = new WSJF (
      {
          redcostotalppl: req.body.redcosfutureppl,
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




exports.readWSJFItem = (req, body) => {
  WSJF.findById(req.params.WSJF_item_id, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

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
