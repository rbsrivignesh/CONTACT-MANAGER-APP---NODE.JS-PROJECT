const asyncHandler = require("express-async-handler");
const path = require("path");
const Contact = require("../models/contactModel");

const html = (req, res) => {
    //    res.sendFile("C:/Users/rbsv1/Documents/express-project/test/index.html");
    // console.log(path.join(__dirname,"../routes"));
    // console.log(__dirname+"/index.html");
    //    res.sendFile("index.html",{root:path.join(__dirname+"../controller")});
    res.sendFile("index.html", { root: path.join(__dirname, "..") })
    // res.sendFile("index.html",{root:__dirname});

}
const send = asyncHandler(async (req, res) => {
    console.log("the request body is ", req.body);
    const { name, phone } = req.body;
    const contact = await Contact.create({
        name, phone
    });
    res.status(201).json(contact);
});
const createContact = asyncHandler(async (req, res) => {
    te
    console.log("the request body is ", req.body);
    const { name, phone } = req.body;
    const contact = await Contact.create({
        name, phone
    });
    res.status(201).json(contact);
});
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
})

module.exports = { html, send, createContact, getContacts };