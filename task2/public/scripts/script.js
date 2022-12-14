//get elements
let test1 = document.getElementById("test1");
let test2 = document.getElementById("test2");
let test3 = document.getElementById("test3");
let test4 = document.getElementById("test4");
let test5 = document.getElementById("test5");
let test6 = document.getElementById("test6");
let test7 = document.getElementById("test7");
let test8 = document.getElementById("test8");
let test9 = document.getElementById("test9");
let test10 = document.getElementById("test10");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let ans5 = document.getElementById("ans5");
let ans6 = document.getElementById("ans6");
let ans7 = document.getElementById("ans7");
let ans8 = document.getElementById("ans8");
let ans9 = document.getElementById("ans9");
let ans10 = document.getElementById("ans10");
let ans11 = document.getElementById("ans11");
let ans12 = document.getElementById("ans12");
let ans13 = document.getElementById("ans13");
let ans14 = document.getElementById("ans14");
let ans15 = document.getElementById("ans15");
let ans16 = document.getElementById("ans16");
let ans17 = document.getElementById("ans17");
let ans18 = document.getElementById("ans18");
let ans19 = document.getElementById("ans19");
let ans20 = document.getElementById("ans20");
let ans21 = document.getElementById("ans21");
let fullName = document.getElementById("fullName");
let group = document.getElementById("group");

//quiz array for radio
const quizRadioQuestionAndAnswer = [{
    id: "0",
    question: "CSS препроцесор – це",
    options: ["Intel", "AMD", "Програма, яка компілює написаний код в чистий CSS код"],
    correct: "Програма, яка компілює написаний код в чистий CSS код"
}, {
    id: "1",
    question: "LESS використовує розширення?",
    options: [".scss", ".less", ".css",],
    correct: ".less"
}, {
    id: "3",
    question: "Для чого використовується функція @extend у Sass?",
    options: ["@extend забезпечує простий спосіб дозволити селектору успадкувати стилі іншого", "підключає стронню бібліотеку",
        "забезпечує сумісність з CSS"],
    correct: "@extend забезпечує простий спосіб дозволити селектору успадкувати стилі іншого"
}];

//quiz array for checkBox
const quizCheckBoxQuestionAndAnswer = [{
    id: "4",
    question: "Які функції кольорових каналів використовуються в LESS?",
    options: ["hue", "saturation", "shine"],
    correct: ["hue", "saturation"]
}, {
    id: "5",
    question: "Перелічіть відмінності між LESS і Sass?",
    options: ["Sass кодується в Ruby і, таким чином, обробляється на стороні сервера", "В обох можна оголошувати змінні",
        "LESS використовує JavaScript і обробляється на стороні клієнта"],
    correct: ["Sass кодується в Ruby і, таким чином, обробляється на стороні сервера", "LESS використовує JavaScript і обробляється на стороні клієнта"]
}];

//quiz array for options
const quizOptionQuestionAndAnswer = [{
    id: "6",
    question: "Як можна використовувати LESS?",
    options: ["Прописати в файлі .css", "Через npm LESS можна використовувати в командному рядку", "Прописати в файлі .js"],
    correct: "Через npm LESS можна використовувати в командному рядку"
}, {
    id: "7",
    question: "Що таке «Source Map Less Inline»?",
    options: ["Параметр вказує на те, що ми повинні включити всі файли CSS у вихідну карту", "Встановлює правило стилю для різних типів медіа"
        , "Повідомляє LESS відповідати цьому селектору як частині іншого селектора"],
    correct: "Параметр вказує на те, що ми повинні включити всі файли CSS у вихідну карту"
}];

//quiz array for drag and drop
const quizDragAndDropQuestionAndAnswer = [{
    id: "8",
    question: ["Перетягність лого Sass", "Перетягність лого Less"],
    correct: ["value2", "value1"]
}, {
    id: "9",
    question: ["Синтаксис Less", "Синтаксис Sass"],
    correct: ["value3", "value4"]
}];

//quiz array for text area
const quizTextAreaQuestionAndAnswer = [{
    id: "10",
    question: "Викликати компілятор з командного рядка в LESS",
    answer: "$ lessc styles.less"
}];

//quiz generator
//setting question and options
function quizCreator() {
    //тест для radio
    let radioTests = [test1, test2, test3];
    let ansDivs = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11, ans12, ans13, ans14, ans15,
        ans16, ans17, ans18, ans19, ans20, ans21];
    k = 0;

    for (i = 0; i < quizRadioQuestionAndAnswer.length; i++) {
        let current = quizRadioQuestionAndAnswer[i];
        current.options.sort(() => Math.random() - 0.5);
        //console.log(current);
        let div = document.createElement("div");
        div.innerHTML = `${current.question}`;
        radioTests[i].prepend(div);

        for (j = 0; j < current.options.length; j++) {
            let choose = "choose" + `${k}`;

            let option = document.getElementById(choose);
            option.value = current.options[j];
            option.innerHTML = `${current.options[j]}`;


            let labelDiv = document.createElement("label");
            labelDiv.setAttribute("for", `${choose}`)
            labelDiv.innerHTML = current.options[j];
            ansDivs[k].appendChild(labelDiv);

            k++;
        }
    }

    //тест для checkbox
    let checkBoxTests = [test4, test5];
    for (i = 0; i < checkBoxTests.length; i++) {
        let current = quizCheckBoxQuestionAndAnswer[i];
        current.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.innerHTML = `${current.question}`;
        checkBoxTests[i].prepend(div);
        for (j = 0; j < current.options.length; j++) {
            let choose = "choose" + `${k}`;
            //console.log(choose);

            let option = document.getElementById(choose);
            option.value = current.options[j];
            option.innerHTML = `${current.options[j]}`;

            let labelDiv = document.createElement("label");
            labelDiv.setAttribute("for", `${choose}`)
            labelDiv.innerHTML = current.options[j];
            ansDivs[k].appendChild(labelDiv);
            k++;
        }
    }

    //тест для list
    let optionTests = [test6, test7];
    for (i = 0; i < optionTests.length; i++) {
        let current = quizOptionQuestionAndAnswer[i];
        current.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.innerHTML = `${current.question}`;
        optionTests[i].prepend(div);
        for (j = 0; j < current.options.length; j++) {
            let choose = "choose" + `${k}`;

            let option = document.getElementById(choose);
            option.setAttribute("value", `${current.options[j]}`);
            option.innerHTML = `${current.options[j]}`;

            k++;
        }
    }

    //тест для dragAndDrop
    let dragAndDropTests = [test8, test9];
    g = 0;
    for (i = 0; i < dragAndDropTests.length; i++) {
        let current = quizDragAndDropQuestionAndAnswer[i]
        for (j = 0; j < 2; j++) {
            let div = "div" + `${g + 1}`;

            let option = document.getElementById(div);
            option.innerHTML = current.question[j];
            g++;
        }
    }

    //тест для textArea
    let textAreaTests = [test10];
    g = 0;
    for (i = 0; i < textAreaTests.length; i++) {
        let current = quizTextAreaQuestionAndAnswer[i];
        let div = document.createElement("div");
        div.innerHTML = `${current.question}`;
        textAreaTests[i].prepend(div);
    }
}

quizCreator();

let score = 0.0;

function displayResult() {
    score = 0.0;
    //TODO Пересмотреть, неправильно считает радио
    getRadioScore();
    getCheckBoxScore();
    getOptionScore();
    getDragAndDropScore();
    getTextAreaScore();

    if (fullName != null && group != null)
        alert(`Total score of ${fullName.value} from ${group.value}: ${score} of 10 points`);
    else
        alert(`Total score of Unknown user: ${score} of 10 points`);
}

function getRadioScore() {
    //Результат першого-третього завдання
    for (i = 0; i < 3; i++) {
        var option = `option${i + 1}`;
        var ans = document.getElementsByName(option);
        for (j = 0; j < 3; j++) {
            if (ans[j].checked && ans[j].value === quizRadioQuestionAndAnswer[i].correct) {
                console.log(`Test ${i + 1}: right ${ans[j].value}`)
                score++;
            }
        }
    }
}

function getCheckBoxScore() {
    //Результат четвертого-п'ятого завдання
    let chooseNumber = 9;
    let countOfRight = 0;
    for (i = 0; i < 2; i++) {
        let current = quizCheckBoxQuestionAndAnswer[i];
        for (j = 0; j < 3; j++) {
            let choose = "choose" + `${chooseNumber}`;
            var ans = document.getElementById(choose);
            if (ans.checked === true && (ans.value === current.correct[0] || ans.value === current.correct[1])) {
                console.log(ans.value + " " + countOfRight);
                countOfRight++;
                score += 0.5;
            }
            chooseNumber++;
        }

        if (countOfRight === 2) {
            console.log(`Test ${4 + i}: question ${countOfRight}`)
        }

        countOfRight = 0;
    }
}

function getOptionScore() {
    //Результат шостого-сьомого завдання
    for (i = 0; i < 2; i++) {
        let current = quizOptionQuestionAndAnswer[i];
        var e = document.getElementById("option" + `${i + 1}`);
        var text = e.options[e.selectedIndex].text;
        if (text === current.correct) {
            console.log(`Test ${6 + i}: right ${text}`)
            score++;
        }
    }
}

function getDragAndDropScore() {
    //Результат восьмого-дев'ятого завдання
    let divNumber = 0;
    ans = 0;
    for (i = 0; i < 2; i++) {
        let current = quizDragAndDropQuestionAndAnswer[i];
        for (j = 0; j < 2; j++) {
            let div = "div" + `${divNumber + 1}`;
            let divOption = document.getElementById(div);

            let currentQuestion = divOption.innerText;
            let currentDrag = divOption.childNodes[1];
            let answer = currentDrag.getAttribute("value");
            if (answer === current.correct[ans]) {
                console.log(`Test ${8 + i} question ${currentQuestion} right ${answer}`);
                score += 0.5;
            }
            ans++;
            divNumber++;
        }
        ans = 0;
    }
}

function getTextAreaScore() {
    //Результат десятого завдання
    let textArea = document.getElementById("text-area");
    if (textArea.value === quizTextAreaQuestionAndAnswer[0].answer) {
        console.log(`Test 10 answer: ${textArea.value}`);
        score++;
    }
}