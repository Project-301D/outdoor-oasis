import React from "react";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import SearchedContent from "./pages/SearchedContent";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}  >
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="searchedcontent" element={<SearchedContent />} />
    </Route>
  )
);

class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
export default App;