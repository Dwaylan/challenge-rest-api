const express = require("express");
const router = express.Router();
const { show, list } = require("../../controllers/business");

router.get("/Business", list);

router.get("/Business/:id", show);

module.exports = router;
