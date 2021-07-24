import { Route, Switch } from "react-router-dom";
import AllUsersPage from "./pages/AllUsers";
import HomePage from "./pages/Home";
import Layout from "./components/layout/Layout";
import CreateLogin from "./pages/CreateLogin";

function App(props) {
  var strPath = "";
  return (
    <Layout location={strPath}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/AllUsers" exact>
          <AllUsersPage />
        </Route>
        <Route path="/CreateLogin" exact>
          <CreateLogin />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
