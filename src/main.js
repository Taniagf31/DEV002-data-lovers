import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

import { filterBy,filterDateAsc, filterDateDesc, compute } from './data.js';

console.log(example, data);
console.log(filterDateAsc, data);
console.log(filterDateDesc, data);
console.log(compute, data);
const tarjetas = document.getElementById("tarjetas");
data.films.forEach(element => {
  const tarjeta = `
      <div class="contenedor"> 
            <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
            <section class="texto">
              <p id= "titulo"> ${element.title}</p>
              <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
            </section>
      </div>
      `
  tarjetas.innerHTML += tarjeta
});

if (todas) {
  //botón todas
  document.getElementById("todas").addEventListener("click", function () {
    const tarjetas = document.getElementById("tarjetas");
    tarjetas.innerHTML = "";
    console.log(tarjetas);
    data.films.forEach(element => {
      const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
      tarjetas.innerHTML += tarjeta
    });
    console.log("Mostrar Todas");
  });
}
// BOTONES DIRECTORES
document.getElementById("directores").addEventListener("click",function(event) {
  console.log (event.target.id);
  let director = filterBy(event.target.id, data); //enviar dos argumentos
  //enlazar función filter de data.js
  tarjetas.innerHTML = "";
  director.forEach(element => {
    const tarjeta = `
    <div class="contenedor">
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div> `
    tarjetas.innerHTML += tarjeta});
    let menu = document.getElementById("menu-principal");
    menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});

const dataClone = {};
Object.assign (dataClone, data);
console.log(data)
console.log(dataClone)

//Botón Lanzamiento
// filterDate.addEventListener('change', () => {
//   if (filterDate.value === '0') {
//       const filterDate = filterDateAsc(dataClone)
//       tarjetas(filterDate)
//   }
//  if (filterDate.value === '1') {
//       const filterDate = filterDateDesc(dataClone)
//       tarjetas(filterDateDesc)
//   }
// }) 

document.getElementById("asc").addEventListener("click",function(event) {
 const filterDateAsc = filterBy(event.target.id, data); 
 console.log(filterDateAsc)
})











//botón Isao
// document.getElementById("Isao Takahata").addEventListener("click", function (event) {
//   console.log(event.target.id);

//   let isao = filterBy(event.target.id, data); //enviar dos argumentos
//   console.log(isao)
//   const tarjetas = document.getElementById("tarjetas");
//   tarjetas.innerHTML = "";
//   isao.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta
//   });
//   let menu = document.getElementById("lista")
//   menu.style.display = "none"
// });

// //botón Yoshifumi 
// document.getElementById("Yoshifumi Kondō").addEventListener("click", function (event) {
//   console.log(event.target.id);

//   let kondo = filterBy(event.target.id, data); //enviar dos argumentos
//   console.log(kondo)
//   const tarjetas = document.getElementById("tarjetas");
//   tarjetas.innerHTML = "";
//   kondo.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta
//   });
//   let menu = document.getElementById("lista")
//   menu.style.display = "none"
// });

// //botón Hiroyuki Morita
// document.getElementById("Hiroyuki Morita").addEventListener("click", function (event) {
//   console.log(event.target.id);

//   let morita = filterBy(event.target.id, data); //enviar dos argumentos
//   console.log(morita)
//   const tarjetas = document.getElementById("tarjetas");
//   tarjetas.innerHTML = "";
//   morita.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta
//   });
//   let menu = document.getElementById("lista")
//   menu.style.display = "none"
// });
// //botón Gorō Miyazaki
// document.getElementById("Gorō Miyazaki").addEventListener("click", function (event) {
//   console.log(event.target.id);

//   let goro = filterBy(event.target.id, data); //enviar dos argumentos
//   console.log(goro)
//   const tarjetas = document.getElementById("tarjetas");
//   tarjetas.innerHTML = "";
//   goro.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta
//   });
//   let menu = document.getElementById("lista")
//   menu.style.display = "none"
// });

// //botón Hiromasa Yonebayashi
// document.getElementById("Hiromasa Yonebayashi").addEventListener("click", function (event) {
//   console.log(event.target.id);

//   let hiromasa = filterBy(event.target.id, data); //enviar dos argumentos
//   console.log(hiromasa)
//   const tarjetas = document.getElementById("tarjetas");
//   tarjetas.innerHTML = "";
//   hiromasa.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta
//   });
//   let menu = document.getElementById("lista")
//   menu.style.display = "none"
// });



//document.getElementById("reciente").addEventListener("click",function() {
  //console.log ("Muestra Más recientes");
  //enlazar función filter de data.js
//});



// const poster = document.getElementById("poster")
// poster.innerHTML = ` <figure><img src="${data.films[0].poster}"</figure> `

// const titulo = document.getElementById("titulo")
// titulo.innerHTML = ` <p id= "titulo"> ${data.films[0].title} </p> `

// const datos = document.getElementById("datos")
// datos.innerHTML = ` <p id= "datos"> Director: ${data.films[0].director} <br> Productor: ${data.films[0].producer} <br> Lanzamiento: ${data.films[0].release_date} <br> Score: ${data.films[0].rt_score}</p>`

