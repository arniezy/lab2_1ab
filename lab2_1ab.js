"use strict";

let add_elem = (elem, tr) => {
    let td = document.createElement("td");
    td.textContent = elem;
    tr.appendChild(td);
}

let add_data = () => {
    let num = document.getElementById("new_serial_number").value.trim(),
        name = document.getElementById("new_name").value.trim(),
        characters = document.getElementById("new_characters").value.trim(),
        year = document.getElementById("new_year").value.trim();

    if (num.length == 0 || Number(num) == NaN || name.length == 0 || characters.length == 0 || year.length != 4 || Number(year) == NaN) {
        alert("Некорректный ввод!");
        return;
    }

    let tr = document.createElement("tr");

    add_elem(num, tr);
    add_elem(name, tr);
    add_elem(characters, tr);
    add_elem(year, tr);

    document.getElementById("info").appendChild(tr);

    document.getElementById("new_serial_number").value = "";
    document.getElementById("new_name").value = "";
    document.getElementById("new_characters").value = "";
    document.getElementById("new_year").value = "";

    alert("Данные успешно добавлены!");
}

add_button.onclick = event => {
    add_data();
}
