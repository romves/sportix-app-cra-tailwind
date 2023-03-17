import React from "react";
import InputCard from "./InputCard";
import Button from "./Button";
import { GoMail } from "react-icons/go";
import {
  BsTelephone,
  BsWhatsapp,
  BsCarFrontFill,
  BsSnow,
} from "react-icons/bs";
import { FaToilet } from "react-icons/fa";
import { MdGrass, MdShower, MdDoorBack, MdMosque } from "react-icons/md";
import { SiJusteat } from "react-icons/si";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { ImStarFull } from "react-icons/im";

const DescBox = ({descData, handleSewa}) => {
  return (
    <div>
      <div className="flex">
        <InputCard className={"w-[600px] h-[1000px]"}>
          <div className="flex flex-col w-[550px] text-start border-b pb-2">
            <h1>{descData.nama}</h1>
            <p className="flex items-center">
              <ImStarFull className="text-primary-500 mr-1" />
              4.9/5 <span className="body-text-nor-transp">(12 reviews)</span>
            </p>
            <p>Panjang lapangan : 25 m x 15 m</p>
            <p>Jumlah Lapangan : 2</p>
          </div>
          <div className="flex flex-col w-[550px] text-start border-b mt-1 pb-2">
            <p className="flex items-center beranda-lg-norm">
              <HiOutlinePencilAlt className="mr-1" />
              Fasilitas
            </p>
            <div className="grid grid-cols-4">
              <div className="flex items-center mb-2">
                <BsCarFrontFill className="mr-1" />
                Parkir mobil
              </div>
              <div className="flex items-center mb-2">
                <FaToilet className="mr-1 text-xl" />
                Toilet
              </div>
              <div className="flex items-center mb-2">
                <MdGrass className="mr-1 text-xl" />
                Sintetik
              </div>
              <div className="flex items-center mb-2">
                <MdShower className="mr-1 text-xl" />
                Shower
              </div>
              <div className="flex items-center mb-2">
                <BsSnow className="mr-1 text-xl" />
                AC
              </div>
              <div className="flex items-center mb-2">
                <MdMosque text-xl className="mr-1 text-xl" />
                Mushalla
              </div>
              <div className="flex items-center mb-2">
                <SiJusteat className="mr-1 text-xl" />
                Kantin
              </div>
              <div className="flex items-center mb-2">
                <MdDoorBack className="mr-1 text-xl" />
                Ruang ganti
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[550px] text-start border-b mt-1 pb-2">
            <p className="flex items-center beranda-lg-norm">
              <HiOutlinePencilAlt className="mr-1" />
              Apa sih kelebihan lapangan ini?
            </p>
            <div></div>
          </div>
          <div className="flex flex-col w-[550px] text-start border-b mt-1 pb-2">
            <h4 className="flex items-center beranda-lg-norm">
              <HiOutlinePencilAlt className="mr-1" />
              Review
            </h4>
            <p className="flex items-center">
              <ImStarFull className="text-primary-500 mr-1" />
              4,9/5{" "}
              <span className="body-text-nor-transp">
                (12 reviews dan 5 ulasan)
              </span>
            </p>
            <div></div>
          </div>
          <div className="flex flex-col w-[550px] text-start mt-1 pb-2">
            <h4 className="flex items-center beranda-lg-norm">
              <HiOutlinePencilAlt className="mr-1" />
              Lokasi
            </h4>
            <p>{descData.lokasi}</p>
            <div></div>
          </div>
        </InputCard>

{/* Right section */}
        <div>
          <div className="flex mb-6">
            <InputCard
              className={"w-[210px] h-[200px] text-center justify-center"}
            >
              <p className="beranda-lg-norm text-primary-400">Membership</p>
              <h4 className="h4-nor">Rp300.000</h4>
              <p className="mb-6 body-text-nor-transp">/bulan</p>
              <Button width={'180px'}>Daftar</Button>
            </InputCard>
              
            <InputCard
              className={"w-[210px] h-[200px] text-center justify-center"}
            >
              <p className="beranda-lg-norm text-primary-400">Biaya Sewa</p>
              <h4 className="h4-nor">{descData.harga}</h4>
              <p className="mb-6 body-text-nor-transp">/sesi/jam</p>
              <Button width={'180px'} onClick={() => handleSewa()}>Sewa</Button>
            </InputCard>
          </div>
          <InputCard className={"h-[240px]"}>
            <p className="beranda-lg-norm text-primary-400 mb-1">
              Kontak pengelola
            </p>
            <div className="flex mb-1">
              <GoMail className="text-xl mt-2 mr-3" />
              <div>
                <p>Email</p>
                <p>cs@sportix.com</p>
              </div>
            </div>
            <div className="flex mb-1">
              <BsTelephone className="text-xl mt-3 mr-3" />
              <div>
                <p>Call center</p>
                <p>+6221 397876 0898</p>
              </div>
            </div>
            <div className="flex mb-1">
              <BsWhatsapp className="text-xl mt-3 mr-3" />
              <div>
                <p>Whatsapp</p>
                <p>0823-0987-6543</p>
              </div>
            </div>
          </InputCard>
        </div>
      </div>
    </div>
  );
};

export default DescBox;
