import { useEffect } from "react";
import Box from "@mui/material/Box";

const PriceChartWidget = () => {
  useEffect(() => {
    // Fix TypeScript error by declaring the type for window.createMyWidget
    function loadWidget() {
      // Extend the Window interface to include createMyWidget
      type CreateMyWidgetType = (
        containerId: string,
        options: Record<string, any>
      ) => void;

      const win = window as Window & { createMyWidget?: CreateMyWidgetType };

      if (typeof win.createMyWidget === "function") {
        win.createMyWidget("price-chart-widget-container", {
          autoSize: true,
          chainId: "solana",
          tokenAddress: "AZhiP3rYWJ1wLHgfCoupxGoPMsRN3t7zfFXapzQcpump",
          showHoldersChart: false,
          defaultInterval: "1",
          timeZone:
            Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC",
          theme: "moralis",
          locale: "en",
          backgroundColor: "#071321",
          gridColor: "#0d2035",
          textColor: "#68738D",
          candleUpColor: "#4CE666",
          candleDownColor: "#E64C4C",
          hideLeftToolbar: false,
          hideTopToolbar: false,
          hideBottomToolbar: false,
        });
      } else {
        console.error("createMyWidget function is not defined.");
      }
    }

    if (!document.getElementById("moralis-chart-widget")) {
      const script = document.createElement("script");
      script.id = "moralis-chart-widget";
      script.src = "https://moralis.com/static/embed/chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = loadWidget;
      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, []);

  return (
    <Box
      id='price-chart-widget-container'
      sx={{ width: "100%", height: 600 }}
    />
  );
};

export default PriceChartWidget;
