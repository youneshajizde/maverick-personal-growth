"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialChart = () => {
  const series = [75];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 100,
      type: "radialBar",
      toolbar: { show: false },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "60%",
          background: "#fff",
          dropShadow: {
            enabled: true,
            top: 3,
            blur: 4,
            opacity: 0.5,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "77%",
          dropShadow: {
            enabled: true,
            top: -3,
            blur: 4,
            opacity: 0.7,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: (val: number) => `${parseInt(val.toString(), 10)}`,
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" },
    labels: ["Percent"],
  };

  return (
    <div className="w-full flex justify-center">
      <ReactApexChart options={options} series={series} type="radialBar" height={150} />
    </div>
  );
};

export default RadialChart;
