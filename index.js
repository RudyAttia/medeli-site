// var fs = require('fs');
// var https = require('https');
// var http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer')

// var options = {
//     key: fs.readFileSync('./ssl/_.medeli-formation.com_private_key.key'),
//     cert: fs.readFileSync('./ssl/medeli-formation.com_ssl_certificate.cer')
// };

// app.use (function (req, res, next) {
//     if (req.secure) {
//             next();
//     } else {
//             res.redirect('https://' + req.headers.host + req.url);
//     }
// });

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(cors());

let userMail = 'contact@medeli-formation.com'

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: false,
//     auth: {
//            user: userMail,
//            pass: 'EMGlola18.'
//        },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

let transporter = nodemailer.createTransport({
    host: "smtp.ionos.fr",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "contact@medeli-formation.com",
      pass: "Medeli26."
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'user@gmail.com',
//         pass: 'pass'
//     }
// };

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validPhone(tel) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(tel).toLowerCase());
}

app.post('/api/contact', (req, res, next) => {
    console.log(req.body);
    if (req.body.name.length < 1 || !validateEmail(req.body.mail) || !validPhone(req.body.tel) || req.body.message.length < 1) {
        res.status(403).json({
            message: 'champs invalides'
        });
    }

    var mailOptions = {
        from: userMail,
        to: userMail,
        subject: 'nouveau contact - medeli-formation.com',
        html: `<h1>NOUVEAU CONTACT</h1>
                <p>NAME : ${req.body.name}</p>
                <p>MAIL : ${req.body.mail}</p>
                <p>TEL : ${req.body.tel}</p>
                <p>MESSAGE : ${req.body.message}</p>
                </br>
                <p>medeli formation<p>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({
                message: error
            })
        } else {
            console.log('Email sent: ' + info.response);

            var mailOptions2 = {
                from: userMail,
                to: req.body.mail,
                subject: 'Merci pour votre message - MEDELI FORMATION',
                html: `<h1>MERCI ${req.body.name} POUR VOTRE MESSAGE</h1>
                        <p>nous vous recontacterons au plus vite</p>
                        <p>MERCI</p>
                        </br>
                        <p>medeli formation<p>
                        <p>09 72 01 26 00</p>
                        <p>contact@medeli.fr</p>
                        <a href="https://medeli-formation.com">medeli-formation.com</a>
                `
            };
        
            transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log(error);
                    res.status(500).json({
                        message: 'error'
                    })
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(201).json({
                        message2: 'okkk'
                    });
                }
            });
        }
    });


});

app.post('/api/inscription', (req, res, next) => {
    console.log(req.body);
    if (req.body.name.length < 1 || !validateEmail(req.body.mail) || !validPhone(req.body.tel) || req.body.formation.length < 4) {
        res.status(403).json({
            message: 'champs invalides'
        });
    }

    var mailOptions = {
        from: userMail,
        to: userMail,
        subject: 'Nouvelle inscription - medeli-formation.com',
        html: `<h1>NOUVELLE INSCRIPTION</h1>
                <p>NAME : ${req.body.name}</p>
                <p>MAIL : ${req.body.mail}</p>
                <p>TEL : ${req.body.tel}</p>
                <P>FORMATION : ${req.body.formation}</P>
                <p>MESSAGE : ${req.body.message?req.body.message:'-PAS DE MESSAGE-'}</p>
                </br>
                <p>medeli formation<p>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({
                message: error
            })
        } else {
            console.log('Email sent: ' + info.response);

            var mailOptions2 = {
                from: userMail,
                to: req.body.mail,
                subject: 'Merci pour votre inscription - MEDELI FORMATION',
                html: `<h1>MERCI ${req.body.name} POUR VOTRE INSCRIPTION</h1>
                        <p>nous vous recontacterons au plus vite</p>
                        <p>MERCI</p>
                        </br>
                        <p>medeli formation<p>
                        <p>09 72 01 26 00</p>
                        <p>contact@medeli.fr</p>
                        <a href="https://medeli-formation.com">medeli-formation.com</a>
                `
            };
        
            transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log(error);
                    res.status(500).json({
                        message: error
                    })
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(201).json({
                        message: 'okk'
                    });
                }
            });
        }
    });
});

// https.createServer(options, app).listen(443);
// http.createServer(options, app).listen(80);
app.listen(5000, () => { console.log("server open on port 5000") })