import { useCartContext } from "../../contexts/cartContext"
import { ProductCard } from "../../components/ProductCard"

const Cart = () => {
    
    const [cartProducts] = useCartContext()
    return(
        <>
        <ProductCard />
        </>
    )
}

export {Cart} 
