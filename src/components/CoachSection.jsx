import React from "react";
import CoachCard from "./CoachCard";

const CoachSection = () => {
  return (
    <div className="h-[500px] bg-gradient-to-r from-orange-100 to-orange-300/80">
      <div className="pt-8 px-20">
        <h3 className="text-orange-600 text-lg font-bold ">Coach</h3>
        <h2 className="text-2xl font-bold">Latih dirimu bareng coach keren ini!</h2>
      </div>
      <div className="my-4 flex">
        <CoachCard />
        <CoachCard />
        <CoachCard />
      </div>
      <div className="text-end px-8">
        <p className="font-bold text-sm">Geser untuk lihat lebih banyak</p>
      </div>
    </div>
  );
};

export default CoachSection;
