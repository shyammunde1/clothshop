import {  Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation  from "./routes/navigation/navigation.component";
import LogIn from "./routes/login/login-component";



export const Shop = () => {
  return <div>
    <h1>I am the shop page</h1>
  </div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  )

};

export default App;