import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav className="nav">
        <p>
        <Link to ="/" className="nav-left">Booklify</Link>
        </p>

        <p>
        <Link to ="/list" className="nav-right">List</Link> 
        </p>
    </nav><br/><br/>
      <Outlet />
    </>
  )
};

export default Layout;
