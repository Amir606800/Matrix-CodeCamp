import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import { ScaleLoader } from "react-spinners";
import "../assets/CSS/DetailPage.css";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState([]);
  const [img, setImg] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200")
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  const foundedProduct = product.find(
    (el) => slugify(el.title).toLowerCase() === slug
  );
  console.log(foundedProduct);

  return (
    <>
      <div className="detail-page d-flex flex-row justify-content-center align-items-center mb-5">
        {!foundedProduct ? (
          <ScaleLoader color="#55a3e7" width={5} />
        ) : (
          <div className="product-detail  d-flex flex-row justify-content-center align-items-center py-5">
            <div className="images-list d-flex flex-column justify-content-center align-items-center gap-3 ">
              {foundedProduct.images.map((link) => (
                <div className="small-images">
                  <img
                    src={link}
                    alt="ThumbnailImage"
                    onClick={() => setImg(link)}
                  />
                </div>
              ))}
            </div>
            <div className="big-image">
              <img
                src={!img ? foundedProduct.images[0] : img}
                alt="productImage"
              />
            </div>
            <div className="content overflow-y-auto">
              <div className="title">{foundedProduct.title}</div>
              <div className="d-flex flex-row justify-content-between mt-1">
                <div className="rating d-flex justify-content-start gap-1 align-items-center">
                  {[...Array(Math.floor(foundedProduct.rating))].map(
                    (_, index) => (
                      <IoIosStar key={index} className="yellow-star" />
                    )
                  )}
                  {[...Array(5 - Math.floor(foundedProduct.rating))].map(
                    (_, index) => (
                      <IoIosStarOutline key={index} />
                    )
                  )}{" "}
                  {foundedProduct.rating}{" "}
                </div>
                <div className="cat"><span className="h6">Category: </span>{foundedProduct.category}</div>
                <div className="code">
                  <span className="h6">SKU:</span> {foundedProduct.sku}
                </div>
              </div>
              <hr />
                  <div className="desc">{foundedProduct.description}</div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="price d-flex flex-row justify-content-start align-items-center gap-2">
                  <span className="text-danger fs-2">
                    $
                    {foundedProduct.discountPercentage > 7
                      ? (
                          (foundedProduct.price *
                            foundedProduct.discountPercentage) /
                          100
                        ).toFixed(2)
                      : foundedProduct.price}
                  </span>

                  <span className="text-decoration-line-through fs-5">
                    {foundedProduct.discountPercentage > 7
                      ? `$${foundedProduct.price}`
                      : ""}
                  </span>
                </div>
                <div className={`discount ${foundedProduct.discountPercentage > 7? "":"d-none"}`}>
                  <span className="fs-5 me-2  fw-bolder">Discount:</span>
                  <span className={`rounded-3 bg-warning p-2 fw-bolder }`}>
                    {foundedProduct.discountPercentage > 7
                      ? `${foundedProduct.discountPercentage}%`
                      : ``}
                  </span>
                </div>
              </div>
              <hr />
              <div className="feats d-flex flex-column gap-2 align-items-start">
                <div
                  className={`stock border border-2 p-2  rounded-3 ${
                    foundedProduct.availabilityStatus == "Low Stock"
                      ? "border-danger text-danger"
                      : "border-success text-success"
                  }  fw-bold justify-content-start`}
                >
                  {foundedProduct.availabilityStatus}
                </div>
                <div className="shipping border border-2 p-2 border-success rounded-3 text-success fw-bold justify-content-start">
                  <span>Shipping Status: </span>
                  {foundedProduct.shippingInformation}
                </div>
                <div className="warranty border border-2 p-2 border-success rounded-3 text-success fw-bold justify-content-start">
                  <span>Warranty Status: </span>
                  {foundedProduct.warrantyInformation}
                </div>
              </div>

              <div className="order d-flex justify-content-between mt-5 ">
                <button className="bg-success d-flex align-items-center gap-2 text-white border-0 px-3 fs-4 py-1 rounded-3">
                  <FiShoppingCart /> <span>Add To Cart</span>
                </button>
                <button className="btn border border-black border-2 px-2 rounded-4 fw-bolder">
                  <Link to={"/"} className=" text-decoration-none text-black">
                    Go Back
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
