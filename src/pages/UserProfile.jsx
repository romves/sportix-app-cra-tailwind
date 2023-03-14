import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";

const UserProfile = ({ userID }) => {
  const [userData, setUserData] = useState({
    nomor: "",
    deskripsi: null,
    name: "",
    email: "",
    jenisKelamin: 0,
    umur: 0,
    pekerjaan: "",
    userPic: "",
  });

  const getUserProfile = async () => {
    await axios
      .get(`https://ahmadsultan.aenzt.tech/api/userId/${userID}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserData({
          nomor: response.data.data.nomor,
          deskripsi: response.data.data.deskripsi,
          name: response.data.data.name,
          email: response.data.data.email,
          jenisKelamin:
            response.data.data.jenisKelamin === 1 ? "Laki-laki" : "Perempuan",
          umur: response.data.data.umur,
          pekerjaan: response.data.data.pekerjaan,
          userPic: response.data.data.gambar,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(userID);
    getUserProfile();
  }, []);

  return (
    <div>
      <Utama>
        <div className="pt-[75px]">
          <TabSelect />
          <div className="flex mx-16 ">
            <InputCard className={"w-[400px]"}>
              <h4 className="text-primary-500 mb-8 h4-med">Profil User</h4>
              <h3 className="leading-10">{userData.name}</h3>
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
              <InputCard className={"w-[1000px]"}>
                <h4 className="h4-med">Detail akun</h4>
                <div className="flex">
                  <div className="flex pl-4 h-[50px] w-full border rounded-xl mr-2 items-center text-start body-text-nor-transp">
                    Email{" "}
                    <span className="pl-4 text-black body-text-nor">
                      {userData.email}
                    </span>
                  </div>
                  <div className="flex pl-4 h-[50px] w-full border rounded-xl items-center text-start body-text-nor-transp">
                    Nomor telepon{" "}
                    <span className="pl-4 text-black body-text-nor">
                      {userData.nomor}
                    </span>
                  </div>
                </div>
                <div className="flex my-8 ">
                  <img
                    src={userData.userPic}
                    alt=""
                    className="w-[250x] h-[250px] mr-8 border rounded-xl object-cover"
                  />
                  <div className=" border rounded-xl flex flex-col w-[800px] p-8">
                    <InputField placeholder={userData.name} />
                    <InputField placeholder={userData.jenisKelamin} />
                    <InputField placeholder={userData.pekerjaan} />
                    <InputField placeholder={userData.umur}/>
                    <div className="flex items-end justify-end mt-8">
                      <Button>Simpan</Button>
                    </div>
                  </div>
                </div>
              </InputCard>
            </div>
          </div>
        </div>
      </Utama>
    </div>
  );
};

export default UserProfile;
