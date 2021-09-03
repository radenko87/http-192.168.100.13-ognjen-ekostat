const mongojs = require("mongojs");
const { use } = require("../../routes/savetnik");
const db = mongojs("fullapp1", ["termini"]);

const showTerminController = (req, res) => {
  let user = req.session.user;
  let id = req.params.id;

  db.termini.find({ _id: mongojs.ObjectID(id) }, (err, termin) => {
    res.render("savetnik/showTermin", {
      name: user.first_name,
      termin: termin[0],
    });
  });
};

module.exports = showTerminController;
