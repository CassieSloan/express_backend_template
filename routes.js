const express = require("express");
const router = express.Router();
const ContactController = require("./controllers/contact_controller");


router.get("/contacts", ContactController.index);

// router.get("/contacts", (req, res) => {
//     res.render("contacts/index", {contacts});
// });

router.post("/contacts", ContactController.newResource);


// router.post("/contacts", (req, res) => {
//     let {name, email} = req.body;
//     let contact = {name, email};
//     contacts.push(contact);
//     res.redirect("/contacts");
// });

router.get("/contacts/new", ContactController.create)

// router.get("/contacts/new", (req, res) => {
//     res.render("contacts/form");
// })

module.exports = router