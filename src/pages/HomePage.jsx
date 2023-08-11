import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";

const HomePage = () => {

  const [ nameValue, setNameValue ] = useState('')
  const [ fromTo, setFromTo ] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef()

  const handleFilterName = () => {
    setNameValue(inputName.current.value)
  };

  const cbFilter = prod => {
    const inputNameLower = nameValue.toLowerCase().trim()
    const nameReal = prod.title.toLowerCase()
    const filterName = nameReal.includes(inputNameLower)
    //filter by price
    const price = Number(prod.price)
    const filterPrice = fromTo.from < price && price <= fromTo.to
    
    return filterName && filterPrice
  }
  return (
    <div>
      <input 
      value={nameValue}
      ref={inputName}
      onChange={handleFilterName} 
      type="text" 
      />
      <FilterCategory />
      <FilterPrice 
        setFromTo={setFromTo}
      />
      <div>
        {
          products?.filter(cbFilter).length
            ? products?.filter(cbFilter).map((prod) => (
              <CardProduct key={prod.id} product={prod} />
            ))
            : <h2>Sorry 😭, not exist products with that filters. ❌</h2>
        }
      </div>
    </div>
  );
};

export default HomePage;
