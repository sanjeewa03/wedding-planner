const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,

    auth: {
        user: 'sanjeewasenarathna03@gmail.com',
        pass: 'Bandaranayake.@03'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting dest email by query string
        const message = req.body.message;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;

        const mailOptions = {
            from: 'Wedding Planner <sanjeewasenarathna03@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'sanjeewasenarathna03@gmail.com',
            subject: 'Inquiry from ' + fname +' '+ lname, // email subject
            html: `<p style="font-size: 16px;"> sender: `+fname+` `+lname +`</p>
                <br />
                <p style="font-size: 16px;">sender email: `+email+`</p>
                <br />
                <p style="font-size: 16px;">message: `+message+`</p>
                <br />
                ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
