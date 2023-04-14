import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../../redux/actions/getAllProducts.action";
import best from "./BestSeller.module.scss";
import Loader from "../../atoms/Loader/Loader";
import Image from "../../atoms/Image/Image";

export default function BestSeller() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts(0));
  }, [dispatch]);

  if (products.isLoading) {
    return <Loader />;
  }

  if (!products?.products?.length) {
    return "No products found";
  }

  const bestSellerProducts = products?.products
    ?.sort((p1, p2) =>
      p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
    )
    .slice(0, 4);

  async function navigateProduct(id) {
    navigate(`product/${id}`);
  }

  function onKeyUp(e,id){
    if (e.key === "Enter")
    {
    navigateProduct(id);
    }
  }

  return (
    <div className={best.container}>
        <div className={best.bestSeller}>Our Best Sellers</div>
        <div className={best.div1}>
          {bestSellerProducts.length > 0 &&
            bestSellerProducts?.map((prod, index) => {
              return (
                <div
                  key={prod.id}
                  id='products'
                  className={`${best.imageWrapper} ${
                    index === 0 && best.item1
                  } `}
                  tabIndex="0"
                  onKeyUp={(event) => {
                    onKeyUp(event,prod.id)
                  }}
                  onClick={() => {
                    navigateProduct(prod.id);
                  }}
                >
                  <Image src={prod.thumbnail} alt={`product name is ${prod.title}`}/>
                  <div className={best.prodInfo}>
                    <span className={best.category}>{prod.category}</span>
                    <span className={best.title}> {prod.title}</span>
                    <p className={best.price}> ${prod.price}</p>
                  </div>
                  <span className={best.rating}>{prod.rating}</span>
                </div>
              );
            })}
        </div>
    </div>
  );
}
