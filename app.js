const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "denizcifutzaldenizci@gmail.com",
    pass: "uwvanhutrjqzfnfs",
  },
});

app.post("/sendmail", (req, res, next) => {
  const {email,phone,text,name,surname} = req.body;
  

  //set up mailOptions
  let mailOptions = {
    from: "denizcifutzaldenizci@gmail.com",
    to: "f.k.denizci@gmail.com",
    subject: "New Member",
    html: `<h2>  ${name} ${surname} </h2> </br> <p>${email} ${phone}</p> </br> ${text}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);

    } else {
      console.log("SENT");
      res.status(200).json("success");
    }
  });
});

app.listen(8001, () => {
  console.log("Working on PORT 8001");
});
