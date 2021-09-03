const mongojs = require("mongojs");
const db = mongojs("fullapp1", ["users", "proizvodi"]);

const createProizvod = (req, res) => {
  let name = req.body.name;
  let price = req.body.price;

  db.proizvodi.insert({ name: name, price: price }, (err, docs) => {
    // check error
    res.redirect("/admin");
  });
};

module.exports = createProizvod;
