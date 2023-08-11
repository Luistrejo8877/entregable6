import { useState } from "react"
import './styles/SliderImgs.css'


const SliderImgs = ({ product }) => {
    const [imgSelected, setImgSelected] = useState(0)

    const movableStyle = {
        transform: `translateX(calc(-${imgSelected}/3 * 100%))`
    }

    const handlePrev = () => {
        if (imgSelected - 1 >= 0) {
            setImgSelected(imgSelected -1)
        } else {
            setImgSelected(2)
        }
    }

    const handleNext =() => {
        if (imgSelected + 1 <= 2) {
            setImgSelected(imgSelected + 1)
        } else {
            setImgSelected(0)
        }
    }
  return (
    <div className="slider">
        <button onClick={handlePrev} className="slider__btn slider__prev">&#60;</button>
        <div className="slider__movable">
            {
                product.images.map(imgInfo => (
                    <div className="slider__container-img" key={imgInfo.id}>
                        <img className="slider__img" src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className="slider__btn slider__next">&#62;</button>
    </div>
  )
}

export default SliderImgs
