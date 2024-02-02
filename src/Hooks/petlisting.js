import axiosPublic from "./axiosPublic"

// Fetch all petlisting from db
export const getAllPetListing = async () => {
    const { data } = await axiosPublic('/petlisting')
    return data
  }