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
// get  addpet
// export const getAddPet = async (email) => {
//   const { data } = await axiosPublic(`/addpet/${email}`)
//   return data
// }


// get  all create donation campaign
export const getCreatedonation = async () => {
  const { data } = await axiosPublic(`/createdonation`)
  return data
}