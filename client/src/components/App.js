import { Component } from "react";
import AuthService from "../services/auth.service";
import "./App.css";
import Navbar from "./layaout/Navigation/Navbar";
import SignupPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import RestaurantForm from "./pages/RestaurantCreate/RestaurantForm";
import RestaurantPage from "./pages/RestaurantList/RestaurantPage";
import AdminPage from "./pages/Admin/AdminPage";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Index/Home";
import Mapsview from "../components/pages/MapsPages/Mapsview";
import Step from "./shared/Stepper";
import "./App.css";

class App extends Component {
  constructor(pros) {
    super(pros);

    this.state = { loggedUser: undefined };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService
      .isloggedin()
      .then((response) => this.storeUser(response.data))
      .catch((err) => this.storeUser(null));
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user });
  };

  render() {
    return (
      <div>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <Switch>
          <Route path="/" exact strict render={() => <Home></Home>}></Route>
          <Route
            path="/signup"
            render={(props) => (
              <SignupPage {...props} storeUser={this.storeUser} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage {...props} storeUser={this.storeUser} />
            )}
          />
          <Route
            path="/nuevo-restaurante"
            render={(props) => (
              <RestaurantForm {...props} storeUser={this.storeUser} />
            )}
          />
          <Route
            path="/restaurant/details/:id"
            render={(props) => (
              <RestaurantPage {...props} storeUser={this.storeUser} />
            )}
          />
          <Route
            path="/adminpage"
            render={(props) => (
              <AdminPage {...props} storeUser={this.storeUser} />
            )}
          />
          <Route
            path="/restaurantes"
            render={(props) => (
              <Mapsview {...props} storeUser={this.storeUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

