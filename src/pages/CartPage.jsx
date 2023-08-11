import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import ProductInCart from "../components/CartPage/ProductInCart"


const CartPage = () => {

    const cart = useSelector(reducer => reducer.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    console.log(cart)

    const totalAmount = cart.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)

    const { makeAPurchases } = () => {
      makeAPurchases()
    }

    const handlePurchase = () => {
      

    }

  return (
    <section>
      <h2>Cart</h2>
      <div>
        {
          cart.map(prod => (
            <ProductInCart 
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
      </div>
      <footer>
        <span>Total</span>
        <h3>{totalAmount}</h3>
        <button onClick={handlePurchase}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage
