import { FaLongArrowAltRight } from "react-icons/fa";
import "../assets/CSS/products.css";
import { CiBoxList } from "react-icons/ci";
import { FiGrid, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
const Products = (props) => {
  const [display, setDisplay] = useState("col-12 col-sm-6 col-md-4 col-xl-3");

  const filteredProducts = props.productlar.filter(
    (item) =>
      item.title.toLowerCase().includes(props.inputValue.toLowerCase()) &&
      item.price >= props.minimum &&
      item.price <= props.maximum
  );

  const catFilteredProducts =
    props.checkList.length > 0
      ? filteredProducts.filter((item) =>
          props.checkList.includes(item.category)
        )
      : filteredProducts;

  const lastFilteredProducts =
    props.brandList.length > 0
      ? catFilteredProducts.filter((item) =>
          props.brandList.includes(item.brand)
        )
      : catFilteredProducts;

  return (
    <>
      <div className="Products">
        <div className="head-product w-100 rounded-2 p-4 overflow-hidden d-flex flex-column justify-content-center align-items-start bg-dark-subtle">
          <h6 className="only-this ">Only This Week</h6>
          <h2 className="treasure">Grocery store with different treasures</h2>
          <p className="under-treasure">
            We have prepared special discounts for you on grocery products...
          </p>
          <button className="btn bg-white fw-bold rounded-5 ">
            Shop Now <FaLongArrowAltRight />
          </button>
        </div>
        <div className="middle-splitter d-flex flex-row align-items-center p-3 my-2 justify-content-between">
          <p>
            Showing {catFilteredProducts.length} of {props.productlar.length}{" "}
            results
          </p>
          <div className="right d-flex align-items-center gap-3 justify-content-center">
            <p>
              Sort:
              <select className="criteria">
                <option value="latest">Sort by latest</option>
                <option value="popularity">Sort by popularity</option>
                <option value="lowToHigh">Sort by price: low to high</option>
                <option value="highToLow">Sort by price: high to low</option>
              </select>
            </p>
            <p>
              Show:
              <select className="display">
                <option value="latest">20 items</option>
                <option value="popularity">40 items</option>
                <option value="lowToHigh">60 items</option>
                <option value="highToLow">80 items</option>
              </select>
            </p>
            <CiBoxList
              onClick={() => {
                setDisplay("hey");
              }}
              className="icon"
            />
            <FiGrid
              onClick={() => {
                setDisplay("col-12 col-sm-6 col-md-4 col-xl-3 ");
              }}
              className="icon"
            />
          </div>
        </div>

        <div className="list justify-content-center row g-3">
          {lastFilteredProducts.map((item, i) => (
            <div key={i} className={`${display} product-item`}>
              <Link to={`/products/${slugify(item.title).toLowerCase()}`} className=" text-decoration-none">
              <div className={"item d-flex  gap-2 card p-3 "}>
                <div className="discount position-absolute rounded-start-1 rounded-end-4">
                  {item.discountPercentage > 7
                    ? `${item.discountPercentage}%`
                    : ``}
                </div>
                <div><img src={item.thumbnail} alt="product" /></div>
                <div>
                  <div className="title">{item.title}</div>
                  <div className="rating">
                    {[...Array(Math.floor(item.rating))].map((_, index) => (
                      <IoIosStar key={index} className="yellow-star" />
                    ))}
                    {[...Array(5 - Math.floor(item.rating))].map((_, index) => (
                      <IoIosStarOutline key={index} />
                    ))}{" "}
                    {item.rating}{" "}
                  </div>
                  <div className="price d-flex flex-row justify-content-start align-items-end gap-2">
                    <span className="text-danger fs-5">
                      $
                      {item.discountPercentage > 7
                        ? (
                            (item.price * item.discountPercentage) /
                            100
                          ).toFixed(2)
                        : item.price}
                    </span>

                    <span className="text-decoration-line-through fs-6">
                      {item.discountPercentage > 7 ? `$${item.price}` : ""}
                    </span>
                  </div>
                </div>

                <div className="bott d-flex gap-5 align-items-center">
                  <button className="bg-success text-white border-0 px-3 fs-4 py-1 rounded-3">
                    <FiShoppingCart />
                  </button>
                  <button className="btn btn-warning px-2 rounded-4 fw-bolder">Read More</button>
                </div>
              </div>
            </Link>
            </div>
          ))}

          
        </div>
      </div>
    </>
  );
};

export default Products;
