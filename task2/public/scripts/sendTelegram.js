//перетворюємо дані з форми в об'єкт json
function toJSONString() {
    var obj = {
        username: fullName.value,
        groupId: group.value,
        test: "Less AND Sass",
        points: `${score} of 10`
    };
    console.log(obj);
    return JSON.stringify(obj);
}

function sendTelegram(e) {
    e.preventDefault();
    //отримуємо дані з форми
    const json = toJSONString();
    //створюємо з'єднання
    const formReq = new XMLHttpRequest();
    formReq.open(`POST`, `/telegram`, true);
    //оброблюємо відповідь з сервера
    formReq.onload = function (oEvent) {
        if (formReq.status === 200) {
            console.log("Successfully send");
        }
        if (formReq.status !== 200) {
            console.log("Got an error");
        }
    }
    //встановлюємо хедер
    formReq.setRequestHeader('Content-Type', 'application/json')
    //відправляємо
    formReq.send(json)
}