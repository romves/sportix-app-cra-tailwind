import axios from 'axios'

export const getKota = async () => {
    const kota = await axios.get(`${process.env.REACT_APP_BASEURL}/showKota`)
    return
} 

export const getLapangan = async () => {
    /* const lapangan = await axios.get(`${process.env.REACT_APP_BASEURL}/showLapangan/${idKategori}/${idKota}`)
    return */
} 

export const searchLapangan = async () => {
    /* const lapangan = await axios.get(`${process.env.REACT_APP_BASEURL}/searchLapangan/${name}`)
    return */
} 