require('dotenv').config()
const express = require("express");
const nodemailer = require(`nodemailer`);
const app = express();

app.use(express.static("public"));
app.use(express.json());


const port = process.env.PORT || 3000;
const user = process.env.GMAIL_USER;
const pass = process.env.PASSWORD;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}...`);
});

app.post("/gmail", (req, res) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass
        },
    });

    console.log(`Message from ${req.body.group}: ${req.body.subject}`);

    const mailOptions = {
        from: req.body.email,
        to: "vovamitsura@gmail.com",
        subject: `Message from ${req.body.group}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, responose) => {
        if(error) {
            console.log(error);
            res.send("error")
        } else {
            console.log("Email Sent");
            res.send("success")
        }
    });
});

app.post("/telegram", (req, res) => {
    console.log("start posting");
    const config = require(`D:\\KPI\\WEB\\finallab\\task2\\config\\config.json`);
    let http = require(`request`);
    let reqBody = req.body;
    //console.log(reqBody);
    //каждый элемент обьекта запихиваем в массив
    let fields = [
        `<b>Name</b>: ` + reqBody.username,
        `<b>Test</b>: ` + reqBody.test,
        `<b>Points</b> ` + reqBody.points
    ];
    console.log(fields);

    let msg = ``;
    //проходимся по массиву и склеиваем все в одну строку
    fields.forEach(field => {
        msg += field + `\n`;
    });
    console.log("MSG URI: " + msg);
    //кодируем результат в текст, понятный адресной строке
    msg = encodeURI(msg);
    console.log("MSG URi: " + msg);
    //делаем запрос
    //делаем запрос
    http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
        //не забываем обработать ответ
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