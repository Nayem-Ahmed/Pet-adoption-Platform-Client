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

const Listing = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;  
  useEffect(() => {
    fetch('./petlisting.json')
      .then((response) => response.json())
      .then((data) => {
        const sortedPets = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPets(sortedPets);
        setFilteredPets(sortedPets);
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
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
        </select>
      </div>
      {visiblePets.map((listing) => (
        <div key={listing.id} className="card card-compact bg-base-100 shadow-xl">
          <figure><img className='w-full h-72' src={listing.image} alt="pet" /></figure>
          <div className="card-body">
            <h2 className="card-title">Pet Name : {listing.name}</h2>
            <h2 className="card-title">Pet age : 0{listing.age}</h2>
            <h3 className='font-semibold'>Location : {listing.location}</h3>
            <div className="card-actions justify-end">
              <Link to={`/adopt/${listing.id}`}>
                <button className="btn text-white bg-[#30336b]">Adopt</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      {hasMorePets && (
        <button onClick={loadMorePets} className="btn bg-blue-500 text-white mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default Listing;

