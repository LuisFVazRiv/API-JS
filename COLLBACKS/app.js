// Listado de paises
const paises = ['México', 'Tlaxcala', 'NY', 'Noruega', 'EU'];

// Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

// Agregar nuevo pais
nuevoPais('Polonia', mostrarPaises);

// Mostrar paises
mostrarPaises();



/*
// Callback en Foreach
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
// Inline callback
ciudades.forEach(function(ciudad){
    console.log(ciudad);
})
// Con función definida
function callback(pais){
    console.log(ciudad);
}
ciudades.forEach(callback);
*/