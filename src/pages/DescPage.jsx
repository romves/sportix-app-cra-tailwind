import React from "react";
import DescBox from "../components/DescBox";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const DescPage = () => {
  return (
    <>
      <Utama>
        <div className="'mt-[75px]'">
          <TabSelect />
          <div>
            <div className="flex">photo list</div>
            <div>
              <div>
                descbox
                <DescBox />
              </div>
            </div>
          </div>
        </div>
      </Utama>
    </>
  );
};

export default DescPage;
