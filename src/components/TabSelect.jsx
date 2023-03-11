import React from "react";
import { Link } from "react-router-dom";

const TabSelect = ({className}) => {
  return (
    <div className={`bg-primary-200 px-20 py-2 mb-2 ${className}`}>
      <Link to="/" className="beranda-lg-transp">
        Beranda
      </Link>
      {" > "}
      <Link className="beranda-lg-norm">Cari Lapangan</Link>
    </div>
  );
};

export default TabSelect;
