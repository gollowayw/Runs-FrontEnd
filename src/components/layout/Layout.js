import MainNavigation from "./NavBar/MainNavigation";

function Layout(props) {
  return (
    <div className="bg-myGray">
      <MainNavigation location={props.location} />
      <main className="ml-28">{props.children}</main>
    </div>
  );
}

export default Layout;
