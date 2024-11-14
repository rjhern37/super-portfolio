const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Running Server"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    username: "********@neiu.edu",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send!");
  }
})

router.post("/contact", (req, res) => {
  const name = req.body.firstname + req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@neiu.edu",
    subject: "Super portfolio contact submission",
    html: `
      <p>Name: ${name}</p>
      <p>Name: ${name}</p>
      <p>Name: ${name}</p>
      <p>Name: ${name}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});