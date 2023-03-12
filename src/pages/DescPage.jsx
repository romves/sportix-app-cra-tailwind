import React from "react";
import { useNavigate } from "react-router-dom";
import DescBox from "../components/DescBox";
import TabSelect from "../components/TabSelect";
import DiscountSection from "../layouts/DiscountSection";
import Utama from "../layouts/Utama";

const DescPage = () => {
  const navigate = useNavigate();
  const handleSewa = () => {
    navigate("/");
  };

  return (
    <>
      <Utama>
          <div className="pt-[75px]">
            <TabSelect />
            <div>
              <div className="flex mb-2">photo list</div>
              <div className="mb-2">
                <div className="flex justify-center">
                  <DescBox />
                </div>
              </div>
              <DiscountSection />
            </div>
          </div>
      </Utama>
    </>
  );
};

export default DescPage;
