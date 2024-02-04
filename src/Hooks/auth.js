import axiosPublic from "./axiosPublic";

// Save user data in database
export const saveUser = async (user) => {
    const currentUser = {
      name: user?.displayName,
      email: user?.email,
      role: 'user',
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser)
  
    return data
  }
  export default saveUser;