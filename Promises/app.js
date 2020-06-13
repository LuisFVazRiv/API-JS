// Promises

const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if (descuento){
        resolve('Descuento aplicado');
    } else{
        reject('No se puede aplicar descuento')
    }
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});