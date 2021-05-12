const express = require("express");

const { Test } = require("../controllers");

const router = express.Router();

router.get("/", Test.getTest);

module.exports = router;
