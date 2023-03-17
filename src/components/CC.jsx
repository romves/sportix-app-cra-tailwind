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
    <div className="absolute flex items-center justify-center text-center h-screen w-screen">
      <InputCard className="absolute m-auto w-[400px] h-[300px]">
        <div className="flex flex-col items-center">
          <InputField onChange={(e) => setCCNumber(e.target.value)} />
          <InputField onChange={(e) => setCCCvv(e.target.value)} />
          <InputField onChange={(e) => setExpMt(e.target.value)} />
          <InputField onChange={(e) => setExpYr(e.target.value)} />
        </div>
        <button
          type={"button"}
          onClick={(e) => {
            handleCC();
            setShowCC();
          }}
        >
          Submit
        </button>
      </InputCard>
    </div>
  );
};

export default CC;
