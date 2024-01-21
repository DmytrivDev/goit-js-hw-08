const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const updateOutput = event => {
    const value = event.currentTarget.value.trim();

    if(value.length > 0) {
        output.textContent = value;
    } else {
        output.textContent = 'Anonymous';
    }
    
}

input.addEventListener('input', updateOutput);