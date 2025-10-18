import ReactApexChart from "react-apexcharts";

const CommonChart = ({ chartData }) => {
  // console.log(chartData);
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: function (val, opts) {
          var currencySymbol = opts.currencySymbol || " ";
          return val + currencySymbol;
        },
      },
      colors: ["#FFB340"],
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 500,
      },
    },
    colors: ["#FFB340"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.01,
        stops: [10, 90],
      },
    },
    stroke: {
      width: 1.5,
      curve: "smooth",
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  // const series = [
  //   {
  //     name: "series-1",
  //     data: [30, 40, 45, 50, 49, 60, 70, 91],
  //   },
  // ];
  if (chartData) {
    return (
      <ReactApexChart
        options={options}
        series={chartData}
        type="area"
        width="100%"
        height="80"
      />
    );
  }
};

export default CommonChart;
