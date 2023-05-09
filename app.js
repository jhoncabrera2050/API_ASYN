let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

// btnSiguiente.addEventListener('click', () =>{
//     if(pagina < 1000){
//         pagina +=1;
//         cargarPelicula();
//     }
// });

// btnAnterior.addEventListener('click', () =>{
//     if(pagina > 1){
//         pagina -=1;
//         cargarPelicula();
//     }
// });

const cargarPelicula = async() => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
        if(respuesta.status === 200){
            const dato = await respuesta.json();
            console.log(dato)
            let peliculas = '';
            dato.results.forEach(movie =>{
                peliculas += `
                
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    <h3 class="titulo">${movie.title}</h3>
                 </div>

                `;
            })
            document.getElementById('contenedor').innerHTML = peliculas;
        }else if(respuesta.status === 401){
            console.log('error en la clave')
        }else if(respuesta.status === 404){
            console.log('error en la busqieda de la pelicula')
        }else{
            console.log('error no encontrado');
        }
    }catch(error){
        console.log(error);
    }

}

cargarPelicula();