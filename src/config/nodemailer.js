const nodemailer = require("nodemailer");
//"contato@digitalindustry.com.br", "co$@ntato"
exports.configEmail = async (message) =>{
   let result = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "no-reply@digitalindustry.com.br",
            pass: "noreply@1234",
        },
    });
   let res = result.sendMail(message, function (err) {
        console.log('aqui 3',err)
        if (err)
            return false

    })
    console.log('aqui 2',res)
    return true;
}
