const routes = require('express').Router();


const email = require("../controllers/email")


routes.post('/send-email',email.sendEmail );









module.exports = routes