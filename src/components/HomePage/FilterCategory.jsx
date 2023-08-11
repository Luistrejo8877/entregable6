import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"

const FilterCategory = () => {

   const [ categories, getAllCategories ] = useFetch()

   useEffect(() => {
     getAllCategories('/categories')
   }, [])

   const dispatch = useDispatch()

   const handleAllCategories = () => {
     getAllProductsThunk()
   }

   const handleFilterCategories = id => {
     dispatch(getFilteredProductsThunk(id))
   }
  return (
    <div>
        <h3>Category</h3>
        <ul>
            <li onClick={handleAllCategories}>All categories</li>
            {
                categories?.map(category => (
                    <li 
                    onClick={() => handleFilterCategories(category.id)}key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FilterCategory
