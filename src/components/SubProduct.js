import React from "react";
import "./SubProduct.scss";
import Button from "./Button";

function SubProduct({ image, productName }) {
  return (
    <div className="SubProduct">
      <div className="subproduct_container">
        <div className="subproduct_img">
          <img src={image} alt="" />
        </div>
        <h2>{productName}</h2>
        <Button name="SEE PRODUCT" style="primaryButton" />
      </div>
    </div>
  );
}

export default SubProduct;
