import React from "react";
import "./home.css";
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import LargeWidget from "../../components/largeWidgets/LargeWidget";
import SmallWidget from "../../components/smallWidgets/SmallWidget";
export default function Home() {
  return (
    <>
      <div className="home">
        <FeatureInfo />
        <Chart
          title="User Analytics"
          data={userData}
          dataKey="Active User"
          grid
        />
        <div className="homeWidgets">
          <SmallWidget />
          <LargeWidget />
        </div>
      </div>
    </>
  );
}
