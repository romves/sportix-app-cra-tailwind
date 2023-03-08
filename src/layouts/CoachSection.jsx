import React from "react";
import CoachCard from '../components/CoachCard'

const CoachSection = () => {
  return (
    <div className="h-[768px] bg-primary-50 to-orange-300/80">
      <div className="pt-4 px-20">
        <h1 className="text-primary-500">Coach</h1>
        <h2>Latih dirimu bareng coach keren ini!</h2>
        <p>Yuk, reservasi dengan mudah dan aman disini</p>
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
