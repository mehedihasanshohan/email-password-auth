import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const Root = () => {
  return(
    <div>
      {/* <h2 className="text-rose-500">Shohan</h2> */}
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}


export default Root