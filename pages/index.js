import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ product, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {product?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { product, bannerData },
  };
};

export default Home;
