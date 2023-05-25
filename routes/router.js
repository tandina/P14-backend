const express = require("express");
const router = express.Router();

const employeesCtrl = require("../controllers/employee");

router.post("/", employeesCtrl.createEmployee);

router.delete("/:id", employeesCtrl.deleteEmployee);

router.get("/", employeesCtrl.getAllEmployees);

module.exports = router;
