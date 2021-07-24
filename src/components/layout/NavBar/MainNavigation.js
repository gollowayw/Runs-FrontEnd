import SiteTitle from "./SiteTitle";
import NavItems from "./NavItems";
import { useLocation } from "react-router-dom";
function MainNaviation(props) {
  const location = useLocation();
  return (
    <div className="bg-myMetal">
      <SiteTitle>
        {"Runs.io" + (location.pathname === "/" ? "" : location.pathname)}
      </SiteTitle>
      <NavItems />
    </div>
  );
}

export default MainNaviation;
