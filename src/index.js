var nodemailer = require('nodemailer');

 
function send (options) {

let auth_mail;
let auth_pass;
let mailOptions;

auth_mail = options.auth_mail;
auth_pass = options.auth_pass;
mailOptions = options;
mailOptions.from = options.alias + options.auth_mail +">'";

const transporter = () =>{
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: auth_mail,
            pass: auth_pass
        }
    })
}

 transporter().sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
})

}

export default send;
//module.exports = {send};
