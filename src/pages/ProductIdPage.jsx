import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductIdPage/ProductInfo";
import SimilarProducts from "../components/productIdPage/SimilarProducts";
import SliderImgs from "../components/ProductIdPage/SliderImgs";


const ProductIdPage = () => {

  const { id } = useParams();

  const [ product, getSingleProduct ] = useFetch()

  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  }, [id])

  return (

    <div>
        <ProductInfo
            product={product}
        />
        <SimilarProducts
            product={product}
        />
        <SliderImgs 
            product={product}
        />
    </div>
  )
};
      

export default ProductIdPage;
