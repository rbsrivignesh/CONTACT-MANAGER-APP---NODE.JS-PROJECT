const express = require("express");
const router = express.Router();
const { html, getContacts, createContact, send } = require("../controller/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/html").get(html);
router.route("/send").post(send)
module.exports = router;