let string = "";
const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.btn, .btn-one');

function getButtonValue(button) {
    if (button.querySelector('.fa-divide')) return '/';
    if (button.querySelector('.fa-xmark')) return '*';
    if (button.querySelector('.fa-minus')) return '-';
    if (button.querySelector('.fa-plus')) return '+';
    if (button.querySelector('.fa-equals')) return '=';
    if (button.querySelector('.fa-delete-left')) return 'DEL';
    return button.textContent.trim();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = getButtonValue(button);

        if (value === '=') {
            try {
                string = eval(string).toString();
            } catch (error) {
                string = 'Error';
            }
        } else if (value === 'AC') {
            string = '';
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
        } else {
            if (string === 'Error') {
                string = '';
            }
            string += value;
        }
        display.value = string;
    });
});