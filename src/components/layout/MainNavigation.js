import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNaviation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Navigation</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllUsers">All Users</Link>
          </li>
          <li>
            <Link to="/CreateLogin">Create Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaviation;
