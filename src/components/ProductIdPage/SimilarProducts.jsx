import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"

const SimilarProducts = ({ product }) => {
    const [ productsByCategory, getProductsByCategory ] = useFetch()

    useEffect(() => {
        if (product) {
          getProductsByCategory(`/products?.categoryId=${product.categoryId}`)
        }
    }, [product])

    const cbFilter = prod => {
        if (prod.id !==product.id) {
           return prod 
        }
    }

  return (
    <div>
        <h3>Similar Product</h3>
        <div>
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <CardProduct
                        key={prod.id}
                        product={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SimilarProducts
