import { useEffect, useState } from "react"
import { ProductCard } from "../../components/ProductCard"
import { getAllProducts } from "../../services/products"

import './styles.css'


const HomePage = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
        {products?.map(({ category, price, id, description }) => {
            return <ProductCard description={description} price={price} category={category} />
        })}
    </div >

}

export { HomePage }