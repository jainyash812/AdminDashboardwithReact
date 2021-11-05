import React from "react";
import "./featureInfo.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
export default function FeatureInfo() {
  return (
    <div className="feature">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$3,567</span>
          <span className="featureMoneyGrowth">
            -11.4 <ArrowDownwardOutlinedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="subFeature">Compared to Last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$1,567</span>
          <span className="featureMoneyGrowth">
            -11.4 <ArrowDownwardOutlinedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="subFeature">Compared to Last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,567</span>
          <span className="featureMoneyGrowth">
            11.4 <ArrowUpwardOutlinedIcon className="featureIcon positive" />
          </span>
        </div>
        <span className="subFeature">Compared to Last month</span>
      </div>
    </div>
  );
}
