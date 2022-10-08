import './Item.css'

//Recibimos products a partir de ItemList
const Item = ({products}) => {
//Cada item muestra el nombre del producto
    return(
        <>
        <h2>{products.nombre}</h2>
        </>
    )
}
export default Item