import { Outlet } from "react-router-dom";
import NaveBar from "../page/Sheard/NaveBar";

const Main = () => {
  return (
    <div>
      <NaveBar />
      <Outlet />
    </div>
  );
};

export default Main;
