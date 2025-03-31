import { useEffect, useRef } from "react";

export function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Set canvas size to parent size
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = 120;
      drawChart(ctx, canvas.width, canvas.height);
    };

    // Draw the chart
    const drawChart = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Create sine wave-like path
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);

      // Draw the curve as shown in the image
      ctx.bezierCurveTo(
        width * 0.3,
        height * 0.2,
        width * 0.5,
        height * 0.8,
        width * 0.7,
        height * 0.2
      );
      ctx.bezierCurveTo(
        width * 0.8,
        height * 0.1,
        width * 0.9,
        height * 0.3,
        width,
        height * 0.8
      );

      // Set the styling
      ctx.strokeStyle = "#d6a587";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Initial draw and setup resize listener
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-32 mt-6 mb-3 relative">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-0 left-0 text-xs text-gray-500">
        Apr 1, 2022
      </div>
      <div className="absolute bottom-0 right-0 text-xs text-gray-500">
        Apr 30, 2022
      </div>
    </div>
  );
}
