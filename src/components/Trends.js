import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Trends.css";

export default function Trends() {
  const { trends } = useContext(AppContext);

  return (
    <div className="trend-main">
      <div className="trend-topic">
        Trend For You
        <img
          src="https://img2.pngindir.com/20190826/uel/transparent-settings-icon-5d671ecfe1cf82.0465114815670391839249.jpg"
          width="15%"
        ></img>
      </div>

      {trends ? (
        trends.map((trend) => (
          <div className="trend-topics">
            <div className="trend-item flex justify-between mb-4">
              <div className="trend-left ml-3">
                <div className="tweet-title">{trend.title}</div>
                <div className="tweet-number">{trend.tweetNumber}</div>
              </div>
              <div className="trend-right mr-3 text-white">...</div>
            </div>
          </div>
        ))
      ) : (
        <div>'trendler yukleniyor'</div>
      )}
    </div>
  );
}
