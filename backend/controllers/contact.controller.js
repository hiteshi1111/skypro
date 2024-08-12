const express = require('express');
const router = express.Router();
const ContactService = require('../services/contact.service');
const Newsletter = require('../schemas/newsLetter.schema');
const Compliances = require('../schemas/compliance.schema');

router.post('/submit', (req, res) => {
    const data = req.body
    ContactService.contactFormSubmission(req.body).then(response => {
        res.status(200).send("Email Sent Successfully")
    }).catch(error => {
        console.log("Error creating contact form", error)
        res.status(500).send("Error creating contact form")
    })
})

router.post('/newsletter', async (req, res) => {
    try {
        const { email } = req.body;
        
        const existingEmail = await Newsletter.findOne({ email });
        console.log(existingEmail)
        if (existingEmail) {
            return res.status(201).send("Email already exists");
        }
        
        const newEmail = new Newsletter({ email });
        const savedEmail = await newEmail.save();
        
        res.status(200).send("Email Saved Successfully");
    } catch (error) {
        console.log("Error saving email", error);
        res.status(500).send("Error saving email");
    }
});


router.get('/compliance', async (req,res) => {
    try {
        const data = await Compliances.find({isActive: true})
        res.status(200).send(data)
    } catch (error) {
        console.log("Error getting compliances", error);
        res.status(500).send("Error getting compliances");
    }
})


module.exports = router;