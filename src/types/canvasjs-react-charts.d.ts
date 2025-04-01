declare module "@canvasjs/react-charts" {
  import * as React from "react";

  interface CanvasJSChartProps {
    options?: unknown;
    containerProps?: unknown;
    onRef?: (ref: unknown) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class CanvasJSChart extends React.Component<CanvasJSChartProps> {}

  interface CanvasJSReact {
    CanvasJSChart: typeof CanvasJSChart;
    CanvasJS: unknown;
  }

  const CanvasJSReact: CanvasJSReact;

  export default CanvasJSReact;
}
