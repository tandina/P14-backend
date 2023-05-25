const Employees = require("../models/Employees");

exports.createEmployee = (req, res, next) => {
  //   delete req.body._id;
  const employee = new Employees({
    ...req.body,
  });
  employee
    .save()
    .then(() =>
      res.status(201).json({ message: "Employé ajouter avec succès !" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteEmployee = (req, res, next) => {
  Employees.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Employée supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllEmployees = (req, res, next) => {
  Employees.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};
