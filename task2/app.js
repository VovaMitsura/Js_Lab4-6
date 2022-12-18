//сервер
require('dotenv').config()
const express = require("express");
const nodemailer = require(`nodemailer`);
const app = express();

app.use(express.static("public"));
app.use(express.json());


const port = process.env.PORT || 3000;
const user = process.env.GMAIL_USER;
const pass = process.env.PASSWORD;
const toEmail = process.env.GMAIL_TO;

//при запросі get http://localhost:3000/ відправити html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

//створюємо сервер
app.listen(port, () => {
    console.log(`Server is running on port: ${port}...`);
});

//при запросі post http://localhost:3000/gmail, провести наступні дії
app.post("/gmail", (req, res) => {

    console.log("start posting email");

    //зберігає конфігурацію SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass
        },
    });

    console.log(`Message from ${req.body.group}: ${req.body.subject}`);

    //необхідна інформація по повідомленню
    const mailOptions = {
        from: req.body.email,
        to: toEmail,
        subject: `${req.body.name}, ${req.body.group}, ЛР JS2022`,
        text: `${req.body.subject}; ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, responose) => {
        if(error) { //оброблюємо відповідь
            console.log(error);
            res.send("error")
        } else {
            console.log(responose);
            console.log("Email Sent");
            res.send("success")
        }
    });
});

//при запросі post http://localhost:3000/gmail, провести наступні дії
app.post("/telegram", (req, res) => {
    console.log("start posting tg message");
    const config = require(`D:\\KPI\\WEB\\finallab\\task2\\config\\config.json`);
    let http = require(`request`);
    let reqBody = req.body;
    //записуємо елементи запроса в масив
    let fields = [
        `<b>Name</b>: ` + reqBody.username,
        `<b>Group</b>: ` + reqBody.groupId,
        `<b>Test</b>: ` + reqBody.test,
        `<b>Points</b>: ` + reqBody.points
    ];
    console.log(fields);

    let msg = ``;
    //записуємо елементи масиву в одну строку
    fields.forEach(field => {
        msg += field + `\n`;
    });
    //кодуємо результати в текст, зрозумілий адресній строці
    msg = encodeURI(msg);
    //робимо запрос
    http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
        //оброблюємо відповідь
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if(response.statusCode===200){
            res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
        }
        if(response.statusCode!==200){
            res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
        }
    });
});