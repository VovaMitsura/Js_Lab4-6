//функция для захвата данных из тегов формы и синтеза JSON-обьекта
function toJSONString() {
    var obj = {
        username: fullName.value,
        groupId: group.value,
        test: "Less AND Sass",
        points: score
    };
    console.log(obj);
    return JSON.stringify(obj);
}

function sendTelegram(e) {
    e.preventDefault();
    //получаем данные из формы
    const json = toJSONString();
    //создаем соединение
    const formReq = new XMLHttpRequest();
    formReq.open(`POST`, `/telegram`, true);
    ///////////////////////////////////
    /////////////SweetAlert//////////
    ///////////////////////////////////
    //обрабатываем ответ сервера
    formReq.onload = function (oEvent) {
        if (formReq.status === 200) {
            console.log("Successfully send");
        }
        if (formReq.status !== 200) {
            console.log("Got an error");
        }
    }
    formReq.setRequestHeader('Content-Type', 'application/json')
    //отправляем
    formReq.send(json)
}