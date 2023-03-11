import React from "react";
import CoachCard from "../components/CoachCard";

const CoachSection = () => {
  return (
    <div className="h-[700px] bg-primary-100 ">
      <div className="pt-8 px-20">
        <h1 className="text-primary-500 h1-med leading-10">Coach</h1>
        <h2 className="h3-med">
          Latih dirimu bersama coach keren ini!
        </h2>
        <p className="beranda-lg-transp">
          Yuk reservasi dengan mudah dan aman disini
        </p>
      </div>
      <div className=" relative overflow-x-scroll items-center my-4 mx-16 flex">
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
      </div>
      <div className="text-end px-8"></div>
    </div>
  );
};

export default CoachSection;
