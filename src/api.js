import axios from 'axios'

export const getKota = async () => {
    const kota = await axios.get(`${process.env.REACT_APP_BASEURL}/showKota`)
    return kota.data.data
} 

export const getLapangan = async () => {
    /* const lapangan = await axios.get(`${process.env.REACT_APP_BASEURL}/showLapangan/${idKategori}/${idKota}`)
    return */
} 

export const getKategori = async () => {
    const category = await axios.get(`${process.env.REACT_APP_BASEURL}/showKategori`)
    console.log(category.data.data)
    return category.data.data
} 