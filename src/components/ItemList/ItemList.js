import Item from "../Item/Item"

//Recibimos a products a traves de ItemListContainer
const ItemList = ({products}) => {

    return(
        <>
        {/* ItemList lo que hace es => Por cada producto de products, creame un item con id y con 
        los datos del producto */}
        {products.map((prod)=><Item key={prod.id} products={prod}/>)}
        </>
    )
}
export default ItemList