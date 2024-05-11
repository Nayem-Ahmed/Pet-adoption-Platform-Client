// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Listing = () => {
//     const [pets, setPets] = useState([]);
//     console.log(pets);
//     useEffect(() => {
//         fetch('./petlisting.json')
//             .then((response) => response.json())
//             .then((data) => setPets(data))
//             .catch((error) => console.error('Error fetching services:', error));
//     }, [])
//     return (
//         <div className='grid md:grid-cols-3 gap-6 my-8 p-4'>
//             {
//                 pets.map((listing) => (
//                     <div key={listing.id} className="card card-compact  bg-base-100 shadow-xl">
//                         <figure><img className='w-full h-72' src= {listing.image} alt="pet" /></figure>
//                         <div className="card-body">
//                             <h2 className="card-title">Pet Name : {listing.name}</h2>
//                             <h2 className="card-title">Pet age : 0{listing.age}</h2>
//                             <h3 className='font-semibold'>Location : {listing.location}</h3>
//                             <div className="card-actions justify-end">
//                                 <Link><button className="btn text-white bg-[#30336b]">Adopt</button></Link>
//                             </div>
//                         </div>
//                     </div>

//                 ))
//             }

//         </div>
//     );
// };

// export default Listing;

 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import { getAllPetListing } from '../Hooks/petlisting';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Listing = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
      getAllPetListing() 
      .then((data) => {
        const sortedPets = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPets(sortedPets);
        setFilteredPets(sortedPets);
        setLoading(false);
            // Initialize AOS with a slight delay
            const initAOS = setTimeout(() => {
              AOS.init();
            }, 100);
    
            // Cleanup function to clear the timeout
            return () => clearTimeout(initAOS);
      })
      .catch((error) => console.error('Error fetching pet listings:', error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterPets(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterPets(searchTerm, category);
  };

  const filterPets = (searchTerm, category) => {
    const filtered = pets.filter((pet) =>
      (pet.name.toLowerCase().includes(searchTerm) || pet.location.toLowerCase().includes(searchTerm)) &&
      (category === 'All' || pet.category === category)
    );
    setFilteredPets(filtered);
  };

  const loadMorePets = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const visiblePets = filteredPets.slice(0, pageNumber * itemsPerPage);
  const hasMorePets = visiblePets.length < filteredPets.length;

  if (loading) return <Loader/>;

  return (
    <div className='grid md:grid-cols-3 gap-6 my-8 p-4'>
      <div>
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 mb-2"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="border p-2 mb-4">
          <option value="All">All Categories</option>
          {/* Add options for your categories dynamically based on your data */}
          <option value="Cats">Cats</option>
          <option value="Dogs">Dogs</option>
        </select>
      </div>
      {visiblePets.length > 0 ? (
        visiblePets.map((listing) => (
          <div data-aos="fade-right" key={listing._id} className="card card-compact bg-base-100 shadow-xl rounded-md">
            <figure><img className='w-full h-72 object-cover' src={listing.image} alt="pet" /></figure>
            <div className="card-body">
              <h2 className="card-title">Pet Name : {listing.name}</h2>
              <h2 className="card-title">Pet age : 0{listing.age}</h2>
              <h3 className='font-semibold'>Location : {listing.location}</h3>
              <div className="card-actions justify-end">
                <Link to={`/listing/${listing._id}`}>
                  <button className="btn text-white bg-[#30336b]">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-red-500">No results found.</p>
      )}
      {hasMorePets && (
        <button onClick={loadMorePets} className="btn bg-blue-500 text-white mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default Listing;

