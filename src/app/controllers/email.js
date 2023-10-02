const nodemailer =require("../../config/nodemailer")
const funcao = require("../../function")
exports.sendEmail = async (req,res) =>{ 
let data = req.body;
const allowedOrigin = 'https://www.digitalindustry.com.br';
const origin = req.get('origin');

if (origin === allowedOrigin) {
    let menssage = await funcao.sendEmailContact(data.nome, data.email, data.empresa, data.telefone, data.msg )  
    let resultadoEmail = await nodemailer.configEmail(menssage)  
    console.log('aqui',resultadoEmail)
      if(!resultadoEmail){
          res.status(400).json({
              msg: "E-mail não enviado!!",
              status: false
          })
      }
    res.status(200).json({
            status: true,
            msg: 'E-mail enviado com sucesso',
        data: menssage
        })
} else {
  res.status(403).json({ erro: 'Acesso não permitido' });
}
}

