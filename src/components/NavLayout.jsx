import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class NavLayout extends React.Component {
  render() {
    return (
      <section>
        <header>
          <nav>
            <h1>Outdoor Oasis</h1>
            {this.props.auth0.isAuthenticated ? (
              <>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="searchedcontent">Searched Content</NavLink>
                <NavLink to="logout">Logout</NavLink>
              </>
            ) : (
              <NavLink to="login">Login</NavLink>
            )}
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Us</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </section>
    );
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default withAuth0(NavLayout);