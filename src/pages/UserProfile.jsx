import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import InputField from "../components/InputField";
import TabSelect from "../components/TabSelect";
import Utama from "../layouts/Utama";
import { MdOutlineDiamond } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { GoNote } from "react-icons/go";
import { BsGear, BsPerson } from "react-icons/bs";
import { BiReceipt } from "react-icons/bi";

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

  const handleEditProfile = async (e) => {
    e.preventDefault();
    console.log('halo')
    await axios
      .post("https://ahmadsultan.aenzt.tech/api/editUser", {
        /* name: nama,
          email: email,
          password: password,
          nomor: noTelp,
          password_confirmation: confPassword,
          jenisKelamin: jenisKelamin,
          umur: umur,
          pekerjaan: pekerjaan, */
      })
      .then((response) => {
        console.log(response);
        getUserProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <Utama>
        <div className="pt-[75px]">
          <TabSelect />
          <div className="flex mx-16 mb-8">
            <InputCard className={"w-[30vw] min-w-[300px] h-[full]"}>
              <h4 className="text-primary-500 mb-8 h4-med">Profil User</h4>
              <h3 className="leading-10">{userData.name}</h3>
              <p className="body-text-nor-transp">
                12.000 poin aktif <span className="ml-2">Platinum</span>
              </p>
              <div className="mt-8 flex flex-col justify-start text-start items-start">
                <button className="mb-2 flex items-center">
                  <BsPerson className="mr-2" />
                  Akun saya
                </button>
                <button className="mb-2 flex items-center">
                  <BiReceipt className="mr-2" />
                  Pesanan saya
                </button>
                <button className="mb-2 flex items-center">
                  <BsGear className="mr-2" />
                  Pengaturan
                </button>
                <button className="mb-2 flex items-center">
                  <MdOutlineDiamond className="mr-2" />
                  Poin saya
                </button>
                <button className="mb-2 flex items-center">
                  <GoNote className="mr-2" />
                  Review saya
                </button>
                <button className="mb-2 flex items-center hover:text-red">
                  <IoMdExit className="mr-2" />
                  Keluar
                </button>
              </div>
            </InputCard>

            <InputCard className={"w-full"}>
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
              <div className="flex my-8">
                <div className="text-end w-[250x] h-[200px] mr-8 border rounded-xl">
                  <img
                    src={userData.userPic}
                    alt=""
                    className="w-[250x] min-w-[250px] h-[200px] rounded-xl object-cover"
                  />
                  <button>Ubah foto profil</button>
                </div>

                <div className="w-[33vw] border rounded-xl flex flex-col p-8">
                    <InputField
                      type={'text'}
                      value={userData.name}
                      onChange={(e) => setUserData({...userData , name: e.target.value})}
                    />
                    <InputField
                      type={'text'}
                      value={userData.jenisKelamin}
                      onChange={(e) => setUserData({...userData , jenisKelamin: e.target.value})}
                    />
                    <InputField
                      type={'text'}
                      value={userData.pekerjaan}
                      onChange={(e) => setUserData({...userData , pekerjaan: e.target.value})}
                    />
                    <InputField
                      type={'number'}
                      value={userData.umur}
                      onChange={(e) => setUserData({...userData , umur: e.target.value})}
                    />
                    <div className="flex items-end justify-end mt-8">
                      <Button>Simpan</Button>
                    </div>
                </div>
              </div>
            </InputCard>
          </div>
        </div>
      </Utama>
    </div>
  );
};

export default UserProfile;
