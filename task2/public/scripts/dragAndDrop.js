//drag and drop
function allowDrop(ev) {
    // За замовчуванням дані/елементи не можна скидати (подія dragover) в інші елементи. Щоб дозволити це,
    // ми повинні запобігти обробці елемента за замовчуванням
    ev.preventDefault();
}

function drag(ev) { /// встановлює тип даних і значення перетягнутих даних
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    // запобігання обробці даних за замовчуванням
    ev.preventDefault();
    // отримання перетягнутих даних (ідентифікатор перетягнутого елемента
    var data = ev.dataTransfer.getData("text");
    // додання перетягнутого елементу до елемента перетягування
    ev.target.appendChild(document.getElementById(data));
}