import { useState } from "react";
import "./carrosel.css";

export default function Carousel() {

  const images = [
    "/img/vintage1.png",
    "/img/vintage2.png",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prev}>❮</button>

      <img src={images[index]} className="carousel-image" />

      <button className="carousel-btn right" onClick={next}>❯</button>
    </div>
  );
}