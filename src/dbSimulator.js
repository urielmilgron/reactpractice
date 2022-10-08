const product = [
    {id: 1 , nombre: "Spiderman", genero: "Acción"},
    {id: 2 , nombre: "One Piece", genero: "Anime"},
    {id: 3 , nombre: "Batman", genero: "Accion"}
]


//Exportamos una nueva funcion que obtiene los productos
export const getProduct = () => {
    //Retornamos una promesa, que cuando se cumpla (cumplido)
    return new Promise((cumplido)=>{
        //Espere 2 segundos y le envie los productos al que llame a getProducts
        setTimeout(()=>{
            cumplido(product)
        },2000)
    })
}
//Check