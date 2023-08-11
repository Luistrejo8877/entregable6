import { useNavigate } from "react-router-dom";
import './style/CardProduct.css'
import useCartApi from "../../hooks/useCartApi";

const CardProduct = ({ product }) => {

    const navigate = useNavigate()

    const { addProductInCart } = useCartApi()

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        const data ={
          quantity: 1,
          productId: product.id
        }
        addProductInCart(data)
    }
  return (
    <article className="card" onClick={handleNavigate}>
      <header className="card__header">
        <img className="card__img card__img1" src={product.images[0].url} alt="" />
        <img className="card__img card__img2" src={product.images[1].url} alt="" />
      </header>
      <section className="card__body">
        <header>
          <h4 className="card__brand">{product.brand}</h4>
          <h3 className="card__name">{product.title}</h3>
        </header>
        <article className="card__price">
          <h3 className="card__price__label">Price</h3>
          <span className="card__price__value">{product.price}</span>
        </article>
        <button className="card__btn" onClick={handleAddCart}>
          <i className='bx bxs-cart-add card__icon' ></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;

