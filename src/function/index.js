exports.sendEmailContact = (nome, email, empresa, telefone, msg)=>{
   
    var message = {
        from: 'no-reply@digitalindustry.com.br',      
        to: 'contato@digitalindustry.com.br',
       // replyTo: 'contato@digitalindustry.com.br',
       // cc: 'jardel.marinho@digitalindustry.com.br',
        subject: "Novo Contato no site da Digital",       
        html: "<html> <head> <title>Novo Contato no site da Digital</title> </head> " +
        "<body><p><strong>Novo Contato no site da Digital</strong></p> <table> " +
        `<tr><td><strong>Nome:</strong> ${nome} </td></tr> ` +
        `<tr><td><strong>Email:</strong> ${email} </td></tr>` +
        `<tr><td><strong>Empresa:</strong> ${empresa} </td></tr>` +
        `<tr><td><strong>Telefone:</strong> ${telefone} </td></tr>`+
        `<tr><td><strong>Mensagem:</strong> ${msg} </td></tr> ` +
        "</table></body></html>"
                    
        
    };

    return message;
}
exports.email = (html_mensagem,email)=>{
    var menssagem ={
        from: "info@melies.com.br",
        to: email,
        subject: "Recupera senhar",
        html: html_mensagem

    }
    return menssagem;
}