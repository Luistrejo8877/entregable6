

const ProductPurchased = ({purchase}) => {
  return (
    <article>
      <header>
        <img src={purchase.product.images[0].url} alt="" />
      </header>
      <h3>{purchase.product.title}</h3>
      <div>{purchase.quantity}</div>
      <div>{purchase.quantity * purchase.product.price}</div>
    </article>
  )
}

export default ProductPurchased
