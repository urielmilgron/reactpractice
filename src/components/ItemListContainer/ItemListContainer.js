import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import {getProduct} from '../../dbSimulator'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ()=>{
const [products, setProducts] = useState([])
useEffect(()=>{
    getProduct().then((products)=>{
        setProducts(products)
    })
},[])
    return(
        <main >
            <ItemList products={products}/>
        </main>
    )
}
export default ItemListContainer