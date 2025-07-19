import { Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <h1>This is Articles Page</h1>
      <Outlet />
    </>
  );
};

export default Articles;
