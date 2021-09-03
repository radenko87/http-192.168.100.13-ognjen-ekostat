const mongojs = require("mongojs");
const db = mongojs("fullapp1", ["termini"]);

const savetnikTerminiController = (req, res) => {
  let name = req.params.name;
  let user = req.session.user;

  console.log(name);

  db.termini.find({ savetnik: name }, (err, termini) => {
    console.log(termini);
    res.render("admin/savetnikTermini", {
      name: name,
      termini: termini,
    });
  });
};

module.exports = savetnikTerminiController;
