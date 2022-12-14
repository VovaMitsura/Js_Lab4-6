//sending result to gmail
let fullName = document.getElementById("fullName");
let group = document.getElementById("group");
let send = document.getElementById("send-btn");


function sendEmail(e) {
    e.preventDefault();
    console.log(`${fullName.value} and ${group.value}`);
    let formData = {
        name: fullName.value,
        group:`${fullName.value} ${group.value}`,
        subject: "Less & Sass testMail",
        message: `${fullName.value} got ${score} of 10 points`
    }

    send.value = "Sending Message..."


    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/gmail");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            name.value = "";
            subject.value = "";
            message.value = "";
            send.value = "Message Sent Successfully!";
        } else {
            send.value = "Something Went Wrong!"
        }
    }
    xhr.send(JSON.stringify(formData));
}