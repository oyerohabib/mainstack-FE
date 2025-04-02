import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartOld() {
  const options = {
    animationEnabled: true,
    height: 260,
    axisY: {
      lineThickness: 0,
      gridThickness: 0,
      tickLength: 0,
      labelFormatter: function () {
        return " ";
      },
    },
    axisX: {
      gridThickness: 0,
    },
    data: [
      {
        type: "spline",
        color: "#FF5403",
        dataPoints: [
          { x: new Date(2022, 3, 1), y: 0 },
          { x: new Date(2022, 3, 5), y: 18000 },
          { x: new Date(2022, 3, 8), y: 18000 },
          { x: new Date(2022, 3, 10), y: 8000 },
          { x: new Date(2022, 3, 12), y: 8000 },
          { x: new Date(2022, 3, 17), y: 18000 },
          { x: new Date(2022, 3, 21), y: 18000 },
          { x: new Date(2022, 3, 29), y: 0 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default ChartOld;
