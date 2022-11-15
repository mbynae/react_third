import React from "react";
import {SearchBar} from './'

import { GiCrossMark } from 'react-icons/gi';


const HeaderCont = () => {
  return (
    <header id="header">
        <h1 className="logo">Animal survivals 
          <GiCrossMark className="icon"/>
        </h1>
        <SearchBar />
    </header>
  );
};

export default HeaderCont;
