import { Route, Routes } from "react-router-dom";
import HomePage from "./User/Client/Homepage/HomePage";
import Premium from "./User/ServiceClient/Premium";
import Fast from "./User/ServiceClient/Fast";
import Dry from "./User/ServiceClient/Dry";
import Hotel from "./User/ServiceClient/Hotel";
import Uniform from "./User/ServiceClient/Uniform";
import Discount from "./User/Client/Discount/Discount";
import About from "./User/Client/About/About";
import AdminPage from "./Admin/AdminPage";
import Users from "./Admin/page/UserManagement/Users";
import AdminSignUp from "./Admin/page/Auth/AdminSignUp";
import AdminSignIn from "./Admin/page/Auth/AdminSignIn";
import Order from "./Admin/page/OrderManagement/Order";
import Service from "./Admin/page/ServiceManagement/Service";
import AdminProfile from "./Admin/page/AdminProfile/AdminProfile";
import UsersProfile from "./Admin/page/UserManagement/UsersProfile";
import UserProfile from "./User/Page/UserPage/UserProfile";
import OrderStatus from "./User/Page/UserPage/OrderStatus";
import OrdersProfile from "./Admin/page/OrderManagement/OrdersProfile";
import OrderProfile from "./User/Page/UserPage/OrderProfile";
import LoginComponent from "./User/Client/LoginComponent/LoginComponent";
import RegisterComponent from "./User/Client/RegisterComponent/RegisterComponent";
import PaymentSuccess from "./User/Page/Payment/PaymentSuccess";
import Sign from "./User/Client/Sign";


function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="" element={<HomePage />} />
          <Route path="premium" element={<Premium />} />
          <Route path="fast" element={<Fast />} />
          <Route path="dry" element={<Dry />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="uniform" element={<Uniform />} />
          <Route path="discount" element={<Discount />} />
          <Route path="about" element={<About />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="orderstatus" element={<OrderStatus />} />
          <Route path="orderProfile/:id" element={<OrderProfile />} />
          <Route path="signIn" element={<LoginComponent />} />
          <Route path="signUp" element={<RegisterComponent />} />
          <Route path="paymentSuccess" element={<PaymentSuccess  />} />
          <Route path="login" element={<Sign/>}  />
        </Route>
        <Route path="/admin" >
          <Route path="" element={<AdminPage />} />
          <Route path="user" element={<Users />} />
          <Route path="user-profile/:id" element={<UsersProfile />} />
          <Route path="order" element={<Order />} />
          <Route path="order-profile/:id" element={<OrdersProfile />} />
          <Route path="service" element={<Service />} />
          <Route path="signup" element={<AdminSignUp />} />
          <Route path="signin" element={<AdminSignIn />} />
          <Route path="userProfile" element={<AdminProfile />} />
          <Route path="signup" element={<AdminSignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
