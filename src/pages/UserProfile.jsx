import React from "react";
import InputCard from "../components/InputCard";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const UserProfile = () => {
  return (
    <div>
      <Utama>
        <div className="pt-[75px]">
          <TabSelect />
          <div className="flex mx-20 border">
            <InputCard className={"w-[350px]"}>
              <h3 className="text-primary-500 mb-8">Profil User</h3>
              <h3 className="leading-10">Yohana Beatrice Nainggolan</h3>
              <p className="body-text-nor-transp">
                12.000 poin aktif <span className="ml-2">Platinum</span>
              </p>
              <div className="mt-8 flex flex-col justify-start text-start items-start">
                <button className="mb-2">Akun saya</button>
                <button className="mb-2">Pesanan saya</button>
                <button className="mb-2">Pengaturan</button>
                <button className="mb-2">Review saya</button>
                <button className="mb-2">Keluar</button>
              </div>
            </InputCard>
            <div>
              <InputCard>
              <h4>Detail akun</h4>
              
              </InputCard>
            </div>
          </div>
        </div>
      </Utama>
    </div>
  );
};

export default UserProfile;
