import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Trends() {
  const { trends } = useContext(AppContext);

  return (
    <div className="trend-main">
      <div>Trendler</div>

      {trends ? (
        trends.map((trend) => (
          <div className="trend-topics">
            <div className="trend-item flex justify-between mb-4">
              <div className="trend-left ml-3">
                <div>{trend.title}</div>
                <div>{trend.tweetNumber}</div>
              </div>
              <div className="trend-right mr-3">...</div>
            </div>
          </div>
        ))
      ) : (
        <div>'trendler yukleniyor'</div>
      )}
    </div>
  );
}
