import { List } from "rc-field-form"
import { useEffect, useState } from "react"
import { ProductCard } from "../../components/ProductCard"
import { getAllProducts } from "../../services/products"
import { useCartContext } from "../../contexts/cartContext"


import './styles.css'


const HomePage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedList,setList] = useState([])

    const handleCheckedList = (product,e) => {
        if(e.target.checked){
            setList([...selectedList, product])
        } else {
            const newList = selectedList.filter(({id})=> product.id !== id)
            setList(newList)
        }
    }

    const {cartProducts,addProduct} = useCartContext()
     



    const addOnCart = () => {   
        addProduct(selectedList)

    }
    
    useEffect(async () => {
        setIsLoading(true)
        const { data } = await getAllProducts()
        setProducts(data)
        setIsLoading(false)
    }, [])
    
    if (isLoading) {
        return <p>loading...</p>
    }
    
    return <div className="HomePageContent" >
        {products?.map((product) => {
            return <ProductCard handleChange={handleCheckedList} product={product} />
        })}
        <input
        type='button'
        value='Send'
        className='btn'
        onClick={addOnCart}/>
    </div >
}

export { HomePage }
