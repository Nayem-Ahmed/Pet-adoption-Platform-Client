import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import axiosPublic from '../../Hooks/axiosPublic';
import { toast } from 'react-toastify';
import { imgUpload } from '../../Hooks/imgbb';
import { AuthContext } from '../../Providers/AuthProviders';

const AddPet = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,setValue,reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        const imageData = await imgUpload(data.petImage[0]);

        const updatedData = {
            ...data,
            adopted: false,  
            petImage: imageData?.data?.url, 
            email:user?.email,  
        };

        axiosPublic.post("/addpet", updatedData)
        .then((response) => {
            console.log("Adoption request submitted successfully:", response.data);
            toast.success("Addpet submitted successfully!");
        })
        .catch((error) => {
            console.error("Error submitting adoption request:", error);
        })

        reset();
    };

    const categoryOptions = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        // Add more categories as needed
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto py-5 p-10 shadow-md">
            <label className="block mb-4">
                Pet Image:
                <input
                    type="file"
                    name="petImage"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('petImage', { required: 'Pet Image is required' })}
                />
                {errors.petImage && <p className="text-red-500 mt-2">{errors.petImage.message}</p>}
            </label>

            <label className="block mb-4">
                Pet Name:
                <input
                    type="text"
                    name="petName"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('petName', { required: 'Pet Name is required' })}
                />
                {errors.petName && <p className="text-red-500 mt-2">{errors.petName.message}</p>}
            </label>

            <label className="block mb-4">
                Pet Age:
                <input
                    type="text"
                    name="petAge"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('petAge', { required: 'Pet Age is required' })}
                />
                {errors.petAge && <p className="text-red-500 mt-2">{errors.petAge.message}</p>}
            </label>

            <label className="block mb-4">
                Pet Location:
                <input
                    type="text"
                    name="petLocation"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('petLocation', { required: 'Pet Location is required' })}
                />
                {errors.petLocation && <p className="text-red-500 mt-2">{errors.petLocation.message}</p>}
            </label>

            <label className="block mb-4">
                Pet Category:
                <Select
                    {...register('petCategory', { required: 'Pet Category is required' })}
                    options={categoryOptions}
                    onChange={(selectedOption) => setValue('petCategory', selectedOption)}
                />
                {errors.petCategory && <p className="text-red-500 mt-2">{errors.petCategory.message}</p>}
            </label>

            <label className="block mb-4">
                Short Description:
                <input
                    type="text"
                    name="shortDescription"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('shortDescription', { required: 'Short Description is required' })}
                />
                {errors.shortDescription && <p className="text-red-500 mt-2">{errors.shortDescription.message}</p>}
            </label>

            <label className="block mb-4">
                Long Description:
                <textarea
                    name="longDescription"
                    className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                    {...register('longDescription', { required: 'Long Description is required' })}
                />
                {errors.longDescription && <p className="text-red-500 mt-2">{errors.longDescription.message}</p>}
            </label>

            <button
                type="submit"
                className="bg-[#30336b] text-white px-8 py-2 rounded-md hover:bg-blue-500 transition duration-300"
            >
                Add Pet
            </button>
        </form>
    );
};

export default AddPet;
