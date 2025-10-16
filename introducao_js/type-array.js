const arrayValor = [1, 2, 3, 4, 5];
console.log(arrayValor); // [1, 2, 3, 4, 5]

const arrayObjects = [
    { nome: 'Pedro', idade: 19, socio: true },
    { nome: 'civic', idade: 14, socio: false },

];
console.log('Antes: ', arrayObjects);

arrayObjects.push({ nome: 'thiago', idade: 20, socio: true });
console.log('Depois: ', arrayObjects);