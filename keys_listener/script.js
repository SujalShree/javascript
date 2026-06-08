const keyValue = document.getElementById('keyValue');
const codeValue = document.getElementById('codeValue');
const valueValue = document.getElementById('valueValue');

function formatValue(key) {
    if (key === ' ') return 'Space';
    if (key === 'Enter') return 'Enter';
    if (key === 'Backspace') return 'Backspace';
    if (key === 'Tab') return 'Tab';
    return key;
}

window.addEventListener('keydown', (event) => {
    keyValue.textContent = event.key;
    codeValue.textContent = event.code;
    valueValue.textContent = formatValue(event.key);
});
