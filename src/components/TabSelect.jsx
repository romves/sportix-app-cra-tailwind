import React from "react";
import { Link } from "react-router-dom";

const TabSelect = ({className, nav1, nav2}) => {
  return (
    <div className={`bg-primary-200 px-20 py-2 mb-2 ${className}`}>
      <Link to="/" className="beranda-lg-transp">
        Beranda
        {" > "}
      </Link>
      
      <Link className="beranda-lg-norm">{nav1? nav1 : ''}</Link>
      <Link className="beranda-lg-norm">{nav2? ' > ' + nav2  : ''}</Link>
    </div>
  );
};

export default TabSelect;
