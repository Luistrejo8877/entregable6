import useCartApi from "../../hooks/useCartApi"


const ProductInCart = ({ prodCart }) => {

  const { deleteProductInCart} = useCartApi()

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id)

  }
  return (
    <article>
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
        <span>{prodCart.quantity}</span>
        <button onClick={handleDeleteCart} style={{ fontSize: '2rem'}}>
          <div><i className='bx bx-trash'></i></div>
        </button>
      </section>
      <footer>
        <span>subtotal:</span>
        <span>{prodCart.product.price * prodCart.quantity}</span>
      </footer>
    </article>
  )
}

export default ProductInCart
