"use strict";

let sel_col = null;

let sort_column = target => {
    let col_index = target.cellIndex,
        compare;

    switch (target.dataset.type) {
        case "number": {
            compare = (first_row, second_row) => first_row.cells[col_index].innerHTML - second_row.cells[col_index].innerHTML;
            break;
        }

        case "string": {
            compare = (first_row, second_row) => {
                let first_row_txt = first_row.cells[col_index].innerHTML.toLowerCase(),
                    second_row_txt = second_row.cells[col_index].innerHTML.toLowerCase();
                return first_row_txt > second_row_txt ? 1 : first_row_txt == second_row_txt ? 0 : -1;
            }
            break;
        }
    }

    let tbody = table_info.querySelector("tbody");
    tbody.append(...Array.from(tbody.rows).sort(compare));

    if (sel_col)
        sel_col.innerHTML = sel_col.innerHTML.slice(0, -1);

    sel_col = target;
    sel_col.innerHTML += "&#9661;";
}

table_info.onclick = event => {
    let target = event.target.closest("span");

    if (target)
        return sort_column(target.closest("th"));
}
