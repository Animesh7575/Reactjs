import React, { useContext, useEffect, Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ChangePassword from "./ChangePassword"; // Import the ChangePassword component
import { ShowCartContextProvider } from "./store/showCart-context";
import { ProductContextProvider } from "./store/product-context";
import loginContext from "./store/login-context";
import LoadingSpinner from "./UI/LoadingSpinner";
import cartContext from "./store/cart-Context";

const Home = React.lazy(() => import("./pages/Home"));
const Store = React.lazy(() => import("./pages/Store"));
const About = React.lazy(() => import("./pages/About"));
const Login = React.lazy(() => import("./pages/Login"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);
  const { loginCartHandler } = cartCtx;
  const { isloggedIn } = loginCtx;

  useEffect(() => {
    if (isloggedIn) {
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [showChangePassword, setShowChangePassword] = useState(false); // State to control displaying the ChangePassword component

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      {/* ... Other routes ... */}

      {/* Render the ChangePassword component if user is logged in */}
      {loginCtx.isloggedIn && (
        <>
          <button onClick={() => setShowChangePassword(true)}>
            Change Password
          </button>
          {showChangePassword && <ChangePassword />}
        </>
      )}

      <Footer />
    </Suspense>
  );
}

export default App;