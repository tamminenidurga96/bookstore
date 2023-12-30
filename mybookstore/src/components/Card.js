import React from "react";
import { useCart } from "./CartContext";

const Card = ({ book, openModal }) => {
  const { addToCart } = useCart();

  const handleClick = (item) => {
    openModal(item);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Card;
