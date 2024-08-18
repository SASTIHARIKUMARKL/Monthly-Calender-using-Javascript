function generate(year, month) {
    const clndrBody = document.getElementById('calendar-body');
    clndrBody.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const dayinMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                cell.innerHTML = '';
            } else if (date > dayinMonth) {
                break;
            } else {
                cell.innerHTML = date;
                if (j === 0) { 
                    cell.classList.add('sunday');
                }
                date++;
            }

            row.appendChild(cell);
        }

        clndrBody.appendChild(row);
    }
}

function yearSelect() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}
function update() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    generate(year, month);
}
const today = new Date();
document.getElementById('month').value = today.getMonth();
yearSelect();
document.getElementById('year').value = today.getFullYear();
generate(today.getFullYear(), today.getMonth());
document.getElementById('month').addEventListener('change', update);
document.getElementById('year').addEventListener('change', update);
