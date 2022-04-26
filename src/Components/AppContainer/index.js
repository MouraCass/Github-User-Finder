import { useState } from "react";
import { SearchContainer } from "../SearchContainer";
import { HistoryContainer } from "../HistoryContainer";
import "./styles.css";
import {
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
 
const AppContainer = function () {
  const [searchHistory, setsearchHistory] = useState([]);
  const history = useHistory();
  const location = useLocation();
  let query = new URLSearchParams(location.search);

  function addSearch(search) {
    replaceQueryParam("q", search);
    setsearchHistory([
      { timestamp: new Date(), userName: search },
      ...searchHistory,
    ]);
  }

  function replaceQueryParam(key, value) {
    const params = new URLSearchParams({ [key]: value });
    history.replace({ pathname: location.pathname, search: params.toString() });
  }

  return (
    <>
      <nav className="NavBar">
        <div>
          <Link to="/search">Search</Link>
        </div>
        <div>
          <Link to="/History">History</Link>
        </div>
      </nav>
      <main className="MainContent">
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/search">
            <SearchContainer
              searchString={query.get("q")}
              addToHistory={addSearch}
            />
          </Route>
          <Route path="/history">
            <HistoryContainer searchHistory={searchHistory} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export { AppContainer };
