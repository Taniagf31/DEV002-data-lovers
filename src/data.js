
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//Botón filter Directores

export const filterBy = (string, data) => {
  // console.log (string, data.films)
  const result =  data.films.filter(movie => movie.director === string); // retorno implicito
  console.log(result)
  return result;

} 

//Botón desplazamiento, ordenar por año ascendente

export const filterDateAsc = (data) => {
  const filterDateAsc = data.sort((a, b) => {
    return a.release_date - b.release_date;
  });
  return filterDateAsc;
}

// Ordenar por año descedente
export const filterDateDesc = (data) => {
  const filterDateDesc = data.sort((a, b) => {
    return b.release_date - a.release_date;
  });
  return filterDateDesc;
}



//prueba de funcion filtrar
// function filtrar(data) {
//   for (let i = 2; data > i; i++) {
//     if (data % i === 0) {
//       return false;
//     }
//   }
//   return data > 1;
// }

// console.log(array.filter(filtrar)); // [2, 3, 5, 7, 11, 13]