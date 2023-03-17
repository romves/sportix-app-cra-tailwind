import axios from 'axios'

export const getKategori = async () => {
    const category = await axios.get(`${process.env.REACT_APP_BASEURL}/showKategori`)
    // console.log(category.data.data)
    return category.data.data
} 