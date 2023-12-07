import React from "react";

const Cards = ({ item }) => {
  return (
    <div>
      <div className="card w-95 bg-base-100 shadow-xl rounded-box">
        <figure>
          <img src={item.image} alt="" className="rounded-t-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between items-center mt-2 ">
            <h5 className="font-semibold">
              <span className="text-sm text-red">$</span>
              {item.price}
            </h5>

            <button className="btn bg-green text-white btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
