import React from "react";
import PropTypes from "prop-types";
import {
  BsFillGiftFill,
  BsFillInboxFill,
  BsSuitDiamondFill,
} from "react-icons/bs";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import LinkTo from "../../atoms/Link";
import "./DisplayCartDetails.scss";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/actions/deleteFromCart.action";

export default function DisplayCartDetails({ data, cartPage }) {
  let dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className="content">
      <div className="image-container">
        <Image src={data.thumbnail} alt="product" className={"image"} />
      </div>
      <div className="prod-details">
        <span className="brand-name"> {data.brand}</span>
        <LinkTo className="product-name">{data.title}</LinkTo>
        <p className="price-tag">
          <span className="price">${data.quantity * data.price}</span>{" "}
          <span className="price-new">${(data.quantity * data.price * (100 - data.discountPercentage) / 100).toFixed(2)}</span>{" "}
          <span className="price-new">( {data.quantity} )</span>

        </p>
        <span className="discount">
          {data.discountPercentage}% off for Black Friday
        </span>
        <span className="color">Category: {data.category}</span>
        {cartPage === "cart" && (
          <Button className="underline-button" dataTestId="EditItem">Edit Item</Button>
        )}
      </div>
      {cartPage === "cart" && (
        <div className="product-actions">
          <p className="action-allignment">
            <span>
              <span className="pickup-icon">
                <BsFillInboxFill></BsFillInboxFill>{" "}
              </span>
              <span className="pickup-content">
                Pick Up at TUMI Permimeter Mall
              </span>
            </span>
            <Button className="underline-button" dataTestId="Change">
              Change
            </Button>
          </p>
          <p className="action-allignment">
            <span>
              <span className="monogram-icon">
                <BsSuitDiamondFill></BsSuitDiamondFill>{" "}
              </span>
              <span className="monogram-content">Add Your Monogram</span>
            </span>
            <Button className="underline-button" dataTestId="Add">Add</Button>
          </p>
          <p className="action-allignment">
            <span>
              <span className="gift-icon">
                <BsFillGiftFill></BsFillGiftFill>{" "}
              </span>
              <span className="gift-content">Gift Options</span>
            </span>
            <Button className="underline-button" dataTestId="Add">Add</Button>
          </p>
          <span className="add-remove-button">
            <Button className="action-button save-for-later" dataTestId="SaveForLater">
              Save for Later
            </Button>
            &nbsp;
            <Button className="action-button remove" dataTestId="Remove" onClickHandler={() => { deleteProduct(data.id) }}>Remove</Button>
          </span>
        </div>
      )}
    </div>
  );
}

DisplayCartDetails.propTypes = {
  data: PropTypes.object,
  cartPage: PropTypes.string
};
