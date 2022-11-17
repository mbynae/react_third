import React from "react";
import {Link} from "react-router-dom";
import {SearchBar} from './';

import { GiCrossMark } from 'react-icons/gi';


const HeaderCont = () => {
  return (
    <header id="header">
        <h1 className="logo">Animal survivals 
          <Link to="/" className="header_link">
              <GiCrossMark className="icon"/>
          </Link>
        </h1>
        <SearchBar />
    </header>
  );
};

export default HeaderCont;
