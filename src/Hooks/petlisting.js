import axiosPublic from "./axiosPublic"

// Fetch all petlisting from db
export const getAllPetListing = async () => {
    const { data } = await axiosPublic('/petlisting')
    return data
  }

// post adoption
export const postAdoption = async () => {
  const { data } = await axiosPublic.post('/adoption')
  return data
}