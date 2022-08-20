import "./App.css";
import React from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./componets/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, creatUserprofileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
const HatPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/`)}></button>
      <h1> HatPage</h1>
      <h1> Yasser</h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     // this.setState({ currentUser: user });
  //     creatUserprofileDocument(user);
  //     console.log(user.uid);
  //   });
  // }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserprofileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          );

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
