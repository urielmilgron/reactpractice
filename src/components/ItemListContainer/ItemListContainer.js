import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import {getProduct} from '../../dbSimulator'
import ItemList from '../ItemList/ItemList'

//Es el que muestra los productos
const ItemListContainer = ()=>{
    //Usamos un estado para que react solo actualice lo que se necesite actualizar(y no actualizar toda la página)
const [products, setProducts] = useState([])
//useEffect, ejecuta el código dentro cada vez que el componente se renderiza.
useEffect(()=>{
    //Dentro de el use, ejecutamos la función getProducts, que nos devuelve una promesa
    getProduct().then((products)=>{ //Entonces, si obtiene products, seteamos el estado de products
        setProducts(products) //a los elementos que recibamos desde la DB
    })
},[])
    return(
        <main >
            {/* Lo que hacemos aca, es pasarle por props los products al ItemList */}
            <ItemList products={products}/>
        </main>
    )
}
export default ItemListContainer