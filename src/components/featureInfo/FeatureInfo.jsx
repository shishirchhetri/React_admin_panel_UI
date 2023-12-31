import React from "react";
import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featured-items">
        <span className="featured-title">Revenue</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$2,000</span>
          <span className="featured-moneyRate">-11.4 <ArrowDownward className="featured-icon negative"/></span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>

      <div className="featured-items">
        <span className="featured-title">Sales</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$4,100</span>
          <span className="featured-moneyRate">-1.4 <ArrowDownward className="featured-icon negative"/></span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>

      <div className="featured-items">
        <span className="featured-title">Cost</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$2,000</span>
          <span className="featured-moneyRate">+1.8 <ArrowUpward className="featured-icon "/></span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
