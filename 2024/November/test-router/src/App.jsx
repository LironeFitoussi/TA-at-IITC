import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const Dashboard = () => {
  return <>
    <h1>Dashboard</h1>
    <Outlet />
  </>;
}

const Settings = () => {
  return <h1>Settings</h1>;
}

const Profile = () => {
  return <h1>Profile</h1>;
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
