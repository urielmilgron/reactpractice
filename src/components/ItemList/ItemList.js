import Item from "../Item/Item"

const ItemList = ({products}) => {

    return(
        <>
        {products.map((prod)=><Item key={prod.id} products={prod}/>)}
        </>
    )
}
export default ItemList