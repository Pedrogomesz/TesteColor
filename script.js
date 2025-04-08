
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const btnColorInput = document.getElementById('btnColor');
const headerColorInput = document.getElementById('headerColor');
const logoColorInput = document.getElementById('logoColor');
const paragraphColorInput = document.getElementById('paragraphColor');

const buttons = document.querySelectorAll('.btn');
const header = document.querySelector('header');
const logo = document.querySelector('.navbar h2');
const paragraphs = document.querySelectorAll('p'); 


function updateColors() {
    document.body.style.backgroundColor = bgColorInput.value;
    document.body.style.color = textColorInput.value;


    buttons.forEach(button => {
        button.style.backgroundColor = btnColorInput.value;
    });


    header.style.backgroundColor = headerColorInput.value;


    logo.style.color = logoColorInput.value;


    paragraphs.forEach(p => {
        p.style.color = paragraphColorInput.value;
    });
}


bgColorInput.addEventListener('input', updateColors);
textColorInput.addEventListener('input', updateColors);
btnColorInput.addEventListener('input', updateColors);
headerColorInput.addEventListener('input', updateColors);
logoColorInput.addEventListener('input', updateColors);
paragraphColorInput.addEventListener('input', updateColors);


updateColors();
