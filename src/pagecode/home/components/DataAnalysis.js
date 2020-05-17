import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { cols, customerModel, profitModel } from './model/DataModel';

const styles = {
  mainTitle: {
    fontSize: 20,
    color: "black",
    textAlign: "center"
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center"
  }
}

export const ProfitAnalysis = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Chart height={400} data={profitModel} scale={cols} forceFit>
        <h3 className='main-title' style={styles.mainTitle}>
          公司業績分析
          </h3>
        <h4 className='sub-title' style={styles.subTitle}>
          2020年每月業績成長量
          </h4>
        <Axis name="year" />
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom type="line" position="year*value" size={2} />
        <Geom
          type="point"
          position="year*value"
          size={4}
          shape={"circle"}
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart>
    </div>
  );
}

export const CustomerAnalysis = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Chart width={600} height={400} data={customerModel.chartData} scale={customerModel.cols}>
        <Axis name="genre" title={customerModel.title} />
        <Axis name="sold" title={customerModel.title} />
        <Legend position="top" dy={-20} />
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
      </Chart>
    </div>
  );
}