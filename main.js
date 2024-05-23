document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');

    const buttons = document.querySelectorAll('.numberButton');
    const buttons2 = document.querySelectorAll('.functionButton');
    const clearButton = document.getElementById('clearButton');
    const clearEntry = document.getElementById('clearEntry');
    const bsButton = document.getElementById('backSpace');
    const changeButton = document.getElementById('change');
    const squareButton = document.getElementById('square');
    const dotButton = document.getElementById('dot');
    const sqrtButton = document.getElementById('root');
    const equalButton = document.getElementById('equals');

    let equaled = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (equaled) {
                output2.textContent = '';
                output.textContent = '';
                equaled = false;
            }
            const buttonText = button.textContent;
            output.textContent += buttonText;
        });
    });

    buttons2.forEach(button => {
        button.addEventListener('click', () => {
            const button2Text = button.textContent;
            output.textContent += button2Text;
            output2.textContent = output.textContent;
            output.textContent = '';
        });
    });


    clearButton.addEventListener('click', () => {
        output.textContent = '';
        output2.textContent = '';
    });

    clearEntry.addEventListener('click', () => {
        output.textContent = '';
    });

    bsButton.addEventListener('click', () => {
        let text = output.textContent;
        text = text.slice(0, -1);
        output.textContent = text;
    });

    changeButton.addEventListener('click', () => {
        let text = output.textContent;
        let textFloat = parseFloat(text);
        if (textFloat === 0) {
            output.textContent = 'Error';
            output2.textContent = 'Cannot divide by zero';
        } else {
            let result = 1 / textFloat;
            output.textContent = String(result);
            output2.textContent = `1/(${text})`;
        }
    });

    squareButton.addEventListener('click', () => {
        let text = output.textContent;
        let textFloat = parseFloat(text);
        let result = textFloat * textFloat;
        output2.textContent = `sqr(${text})`;
        output.textContent = String(result);
    });

    dotButton.addEventListener('click', () => {
        const buttonText = dotButton.textContent;
        output.textContent += buttonText;
    });

    sqrtButton.addEventListener('click', () => {
        let text = output.textContent;
        let textFloat = parseFloat(text);
        if (textFloat < 0) {
            output.textContent = 'Error';
            output2.textContent = 'Invalid input for sqrt';
        } else {
            let result = Math.sqrt(textFloat);
            output.textContent = String(result);
            output2.textContent = `√(${text})`;
        }
    });

    const change2Button = document.getElementById('changeS');
    change2Button.addEventListener('click', () => {
        let text = output.textContent;
        if (text) {
            let textFloat = parseFloat(text);
            textFloat = -textFloat;
            equaled = false;
            output.textContent = String(textFloat);
            output2.textContent = String(textFloat);
        }
    });

    equalButton.addEventListener('click', () => {
        try {
            output2.textContent += output.textContent;
            const result = eval(output2.textContent);
            output2.textContent += " = ";
            output.textContent = String(result);
            equaled = true;
        } catch (error) {
            console.error('계산 중 오류 발생:', error.message);
            output.textContent = 'Error';
        }
    });
});
