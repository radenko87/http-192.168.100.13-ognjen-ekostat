const mongojs = require("mongojs");
const db = mongojs("fullapp1", ["users"]);

const loginController = (req, res) => {
  // preuzeti podatke req.body
  let nameIzForme = req.body.name;
  let passIzForme = req.body.password;

  db.users.find(
    { first_name: nameIzForme, password: passIzForme },
    (err, docs) => {
      if (err) {
        console.log("greska");
        res.redirect("/");
      } else {
        if (docs.length === 1) {
          // pronadjen korisnik
          let user = docs[0];

          req.session.user = user;
          if (user.role == "admin") {
            res.redirect("/admin");
          } else if (user.role == "operater") {
            res.redirect("/operater");
          } else if (user.role == "savetnik") {
            res.redirect("/savetnik");
          } else {
            res.redirect("/");
          }
        } else {
          // podaci nisu tacni
          res.redirect("/");
        }
      }
    }
  );
};

module.exports = loginController;
