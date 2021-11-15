const boton = document.querySelector('.button');

const input = document.querySelector('.entrada');
const contenido= document.querySelector('.miH') ;

const changeContent = () =>{
    let value = document.querySelector('.entrada').value;
    
    contenido.innerText = value;
    contenido.style.background = 'green'
    contenido.style.color = 'white'

};

boton.addEventListener('click',changeContent);

console.log(input.value);

content = contenido.innerText =  'Hola, como estas'

