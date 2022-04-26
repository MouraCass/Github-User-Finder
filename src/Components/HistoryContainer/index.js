import { Link } from "react-router-dom";
import "./styles.css";

const HistoryContainer = function ({ searchHistory }) {
  return (
    <>
      <div className="pageTitle">History Page</div>
      <div className="searchHistory">
        {searchHistory.map((record, i) => (
          <div className="record" key={i}>
            <div className="recordsContent">
              {record.timestamp.toLocaleString()}
            </div>
            <div className="recordsContent">
              <Link to={"/search?q=" + record.userName}>{record.userName}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { HistoryContainer };
