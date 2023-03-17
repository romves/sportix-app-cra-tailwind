import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "./Button";
import InputCard from "./InputCard";

const CC = ({
  handleCC,
  setCCNumber,
  setCCCvv,
  setExpMt,
  setExpYr,
  setShowCC,
}) => {
  return (
    <div className="absolute flex items-center bg-black bg-opacity-50 justify-center text-center h-[100vh] w-[100vw]">
      <InputCard className="absolute m-auto w-[500px] h-[300px]">
        <div className="flex flex-col w-[440px]">
          <div className="flex justify-between items-center">
            <p>Card Number</p>
            <InputField onChange={(e) => setCCNumber(e.target.value)} />
          </div>
          <div className="flex justify-between items-center">
            CVV
            <InputField onChange={(e) => setCCCvv(e.target.value)} />
          </div>
          <div className="flex justify-between items-center">
            Exp Month
            <InputField onChange={(e) => setExpMt(e.target.value)} />
          </div>
          <div className="flex justify-between items-center">
            Exp Year
            <InputField onChange={(e) => setExpYr(e.target.value)} />
          </div>
        </div>
        <div className="flex items-end justify-end pt-2"
        >
          <Button
            width={"180px"}
            type={"button"}
            onClick={(e) => {
              handleCC();
              setShowCC();
            }}
          >
            Submit
          </Button>
        </div>
      </InputCard>
    </div>
  );
};

export default CC;
