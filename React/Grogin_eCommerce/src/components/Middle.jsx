import { useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import axios from "axios";

const Middle = (props) => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);

  const [checksList, setCheckList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=200")
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid d-flex gap-4 mt-4">
        <Filter
          settingMax={setMaxPrice}
          settingMin={setMinPrice}
          maximum={maxPrice}
          minimum={minPrice}
          settingChecks={setCheckList}
          checkList={checksList}
          brandList={brandsList}
          settingBrands={setBrandsList}
          productlar={product}
        />
          <Products
                  inputValue={props.inputValue}
                  maximum={maxPrice}
                  minimum={minPrice}
                  checkList={checksList}
                  brandList={brandsList}
                  productlar={product}
                />
        
      </div>
    </>
  );
};

export default Middle;
