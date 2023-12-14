import { useState } from "react";

const IMAGE_1_URL =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL =
  "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL =
  "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);
  console.log(activeImage);
  return (
    <div className="carousel">
      <ul className="carousel__slides">
        <input type="radio" readOnly checked={activeImage === 1} name="image-radio" id="img1" />
        <li className="carousel__slide-container">
          <div className="carousel__img">
            <img src={IMAGE_1_URL} alt="slide image 1" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveImage(3)} id="carousel-prev" className="carousel__controls-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveImage(2)} id="carousel-next" className="carousel__controls-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" readOnly checked={activeImage === 2} name="image-radio" id="img2" />
        <li className="carousel__slide-container">
          <div className="carousel__img">
            <img src={IMAGE_2_URL} alt="slide image 2" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveImage(1)} id="carousel-prev" className="carousel__controls-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveImage(3)} id="carousel-next" className="carousel__controls-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" readOnly checked={activeImage === 3} name="image-radio" id="img3" />
        <li className="carousel__slide-container">
          <div className="carousel__img">
            <img src={IMAGE_3_URL} alt="slide image 3" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveImage(2)} id="carousel-next" className="carousel__controls-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveImage(1)} id="carousel-next" className="carousel__controls-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div className="carousel__dots">
          <label id="carousel-dot-1" onClick={() => setActiveImage(1)} className="carousel__dot" />
          <label id="carousel-dot-2" onClick={() => setActiveImage(2)} className="carousel__dot" />
          <label id="carousel-dot-3" onClick={() => setActiveImage(3)} className="carousel__dot" />
        </div>
      </ul>
    </div>
  );
}
