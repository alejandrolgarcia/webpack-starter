import '../css/componentes.css';

export const saludar = (saludo) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `${saludo}`;

    document.body.append(h1);
}