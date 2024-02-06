 
import axiosPublic from './axiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useGetAddPet = () => {
  const { user } = useContext(AuthContext);

  const { data: getAddPet = [], refetch } = useQuery({
    queryKey: ['getAddPet',user?.emai],
    queryFn: async () => {
      const res = await axiosPublic.get(`/addpet?email=${user?.email}`)
      return res.data
    },

  });

  return [ getAddPet, refetch ];
};

export default useGetAddPet;


