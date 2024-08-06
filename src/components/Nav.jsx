import React, { useState } from "react";
import Destop from "./views/Destop";
import { Mobile } from "./views/Mobile";
const Nav = ({white}) => {

  const [click, setClick] = useState(false)
  
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <>
    <Destop white={white}/>
      <Mobile />
      </>
  );
};

export default Nav;
