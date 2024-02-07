import React from 'react';
import { useForm } from 'react-hook-form';
import { imgUpload } from '../../Hooks/imgbb';
import axiosPublic from '../../Hooks/axiosPublic';
import { toast } from 'react-toastify';

const CreateDonationCampaign = () => {
    const { register, handleSubmit,reset, formState: { errors }  } = useForm();

    const onSubmit = async (data) => {
        try {
            // Upload pet picture
            const imageData = await imgUpload(data.petPicture[0]);
           
            // Create donation object with image URL
            const donationData = {
                ...data,
                petPicture: imageData?.data?.url
            };
            await axiosPublic.post("/createdonation", donationData);
            toast.success('Create Donation Campaign Success');
            reset();
        
        } catch (error) {
            toast.error(error)
            console.error("Error occurred:", error);
        }
    };
    
 
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl shadow-xl mx-auto py-5 p-10">
        <div className="mb-4">
          <label htmlFor="petPicture" className="block mb-2">Pet Picture</label>
          <input 
            type="file" 
            id="petPicture" 
            {...register('petPicture', { required: 'Pet picture is required' })} 
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.petPicture && <p className="text-red-500 mt-2">{errors.petPicture.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="maxDonation" className="block mb-2">Maximum Donation Amount</label>
          <input 
            type="number" 
            required
            id="maxDonation" 
            {...register('maxDonation')} 
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.maxDonation && <p className="text-red-500 mt-2">{errors.maxDonation.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastDonationDate" className="block mb-2">Last Date of Donation</label>
          <input 
            type="date" 
            required
            id="lastDonationDate" 
            {...register('lastDonationDate')} 
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.lastDonationDate && <p className="text-red-500 mt-2">{errors.lastDonationDate.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription" className="block mb-2">Short Description</label>
          <textarea 
            id="shortDescription" 
            required
            {...register('shortDescription')} 
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.shortDescription && <p className="text-red-500 mt-2">{errors.shortDescription.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="longDescription" className="block mb-2">Long Description</label>
          <textarea 
            id="longDescription" 
            required
            {...register('longDescription')} 
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.longDescription && <p className="text-red-500 mt-2">{errors.longDescription.message}</p>}
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
        </div>
      </form>
    );
};

export default CreateDonationCampaign;
