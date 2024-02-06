 
import Swal from 'sweetalert2';
import useGetAddPet from '../../Hooks/useGetAddPet';
import axiosPublic from '../../Hooks/axiosPublic';


const MyAddedPet = () => {
    const [ getAddPet, refetch ] = useGetAddPet();
        
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });
    
            if (result.isConfirmed) {
                await axiosPublic.delete(`/addpet/${id}`);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your pet has been deleted.",
                    icon: "success",
                });
                refetch();
                 
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Pet name</th>
                            <th>Pet category</th>
                            <th>Pet image</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Adopted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAddPet?.map((pet, index) => (

                            <tr key={pet._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="font-bold">{index + 1}</div>

                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm opacity-50">{pet.petName}</div>
                                </td>
                                <td>

                                    <div className="text-sm opacity-50">{pet.petCategory.value}</div>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={pet.petImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td><button className='bg-green-500 px-2 rounded-md'>Update</button></td>
                                <td><button onClick={() => handleDelete(pet._id)} className='bg-green-500 px-2 rounded-md'>Delete</button></td>
                                <td><button className='bg-green-500 px-2 rounded-md'>Adopted</button></td>
                             </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAddedPet;


 

