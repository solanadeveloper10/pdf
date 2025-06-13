import { useEffect } from "react";

const TradingViewWidget = ({
  symbol = "BINANCE:BTCUSDT",
  width = "100%",
  height = 600,
}) => {
  useEffect(() => {
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => createWidget();
    } else {
      createWidget();
    }

    function createWidget() {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          width: width,
          height: height,
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          container_id: "tradingview-container",
        });
      }
    }
  }, [symbol, width, height]);

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview-container' />
    </div>
  );
};

export default TradingViewWidget;
