const nodeoutlook = require("nodejs-nodemailer-outlook");

require("dotenv").config();
const HttpError = require("../models/http-error");

//////////
const send_mail = async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body)

  try {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
      },
      from: 'onalnihat@outlook.com',
      to: `onalnihat1986@gmail.com`,
      subject: 'Web designer is basvurusu',
      text: `

        Client Name: ${name}

        Message: ${message}
        
        Contact: ${email} / ${phone}
        
        
        `,
      onError: (e) => console.log("error", e),
      onSuccess: (i) => {
        res.send(i);
        console.log("success", i);
      },
    });
  } catch (err) {
    const error = new HttpError("Error", 500);
    console.log(err,error)
    return next(error);
  }
};

exports.send_mail = send_mail;

