//відправка результату на gmail
let send = document.getElementById("send-btn");


function sendEmail(e) {
    e.preventDefault();
    //отримуємо дані з форми
    let formData = {
        name: fullName.value,
        group: `${group.value}`,
        subject: "LESS & SCSS test",
        message: `${fullName.value} got ${score} of 10 points`
    }

    send.value = "Sending Message..."

    //створюємо з'єднання
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/gmail");
    //встановлюємо хедер
    xhr.setRequestHeader("content-type", "application/json");
    //оброблюємо відповідь з сервера
    xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText === "success") {
            name.value = "";
            subject.value = "";
            message.value = "";
            send.value = "Message Sent Successfully!";
        } else {
            send.value = "Something Went Wrong!"
        }
    }
    //відправляємо
    xhr.send(JSON.stringify(formData));
}