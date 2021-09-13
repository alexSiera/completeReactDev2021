import React from "react";
import "./homepage.styles.scss";
const HomePage = () => {
  const productsArray = ["HATS", "JACKETS", "WOMENS", "MANS"];
  return (
    <div className="homepage">
      <div className="directory-menu">
        {productsArray.map((item) => (
          <div key={item} className="menu-item">
            <div className="content">
              <h1 className="title">{item}</h1>
              <span className="title">SHOP NOW</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
