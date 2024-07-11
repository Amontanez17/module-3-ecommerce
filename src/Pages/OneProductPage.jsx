import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import service from "../service/api";
import "../Pages/Style/OneProductPage.css";
import AllComments from "../Components/AllComments";

function OneProductPage({}) {
  const { productId } = useParams();

  const [oneData, setOneData] = useState(null);

  async function fetchProduct() {
    try {
      const response = await service.get(`/api/products/${productId}`);
      setOneData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  if (!oneData) return <p>loading...</p>;
  return (
    <div id="one-product-page">
      <article id="product-details-cont">
        <div className="oneProduct-img">
          {" "}
          <img src={oneData.product.image} />
        </div>
        <div className="oneProduct-details">
          {" "}
          <h3>{oneData.product.name}</h3>
          <h5>{oneData.product.breweryName}</h5>
          <p>{`${oneData.product.price} €`}</p>
          <p>{oneData.product.detailsType}</p>
          <p>{oneData.product.detailsRegion}</p>
          <p>{oneData.product.abv}</p>
          <p>{oneData.product.description}</p>
        </div>
      </article>
      <AllComments comments={oneData.comments} fetchProduct={fetchProduct} />
    </div>
  );
  //   <div>{oneData.product.coomments}</div>
}

export default OneProductPage;
