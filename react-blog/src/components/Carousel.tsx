import { useState } from "react";

const IMAGE_1_URL =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL =
  "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL =
  "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";

export default function Carousel() {
  const [activeItem, setActiveItem] = useState(1);
  console.log(activeItem);
  return (
    <div className="carousel">
      <ul className="carousel__slides">
        <input type="radio" checked={activeItem === 1} name="radio-buttons" id="img-1" />
        <li className="carousel__slide-container">
          <div className="carousel__slide-img">
            <img src={IMAGE_1_URL} alt="image-1" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveItem(3)} className="carousel__slide-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveItem(2)} className="carousel__slide-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" checked={activeItem === 2} name="radio-buttons" id="img-2" />
        <li className="carousel__slide-container">
          <div className="carousel__slide-img">
            <img src={IMAGE_2_URL} alt="image-2" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveItem(1)} className="carousel__slide-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveItem(3)} className="carousel__slide-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" checked={activeItem === 3} name="radio-buttons" id="img-3" />
        <li className="carousel__slide-container">
          <div className="carousel__slide-img">
            <img src={IMAGE_3_URL} alt="image-3" />
          </div>
          <div className="carousel__controls">
            <label onClick={() => setActiveItem(2)} className="carousel__slide-prev">
              <span>&lsaquo;</span>
            </label>
            <label onClick={() => setActiveItem(1)} className="carousel__slide-next">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div className="carousel__dots">
          <label onClick={() => setActiveItem(1)} className="carousel__dot" id="img-dot-1"></label>
          <label onClick={() => setActiveItem(2)} className="carousel__dot" id="img-dot-2"></label>
          <label onClick={() => setActiveItem(3)} className="carousel__dot" id="img-dot-3"></label>
        </div>
      </ul>
    </div>
  );
}
