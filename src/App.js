import "./App.css";
import MaterialUi from "./components/MaterialUi";
import PixabayImages from "./components/pixabay_images/Pixabay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={MaterialUi} />
          <Route path="/images" exact component={PixabayImages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
