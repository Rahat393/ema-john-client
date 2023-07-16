import {   useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductsCard from '../../components/Products/ProductsCard';
import './SearchModal.css'
import useTitle from '../../hooks/useTitle';
 
const SearchModal = ({setModalOpen  }) => {
  useTitle('Search')
  const [searchTerm, setSearchTerm] = useState('');
  const {  data: products = [], refetch } = useQuery(['products', searchTerm], async () => {
    const res = await fetch(`http://localhost:5000/products/search?searchTerm=${searchTerm}`);
    const data = await res.json();
    return data;
  });

  console.log(products);

  const handleSearch = (e) => {
    e.preventDefault();
    e.target.reset()
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    refetch();
  };
  return (
    <div className="min-h-screen w-full bg-opacity-90 bg-black fixed top-0 left-0 overflow-y-scroll">
    <section className="max-w-6xl mx-auto px-3">
      <button
        className="fixed lg:right-10 md:right-7 right-3 lg:top-10 md:top-7 top-3 font-bold bg-white rounded-full h-8 w-8 z-20"
        onClick={() => setModalOpen(false)}
      >
        ✕
      </button>
      <h2 className='text-orange-600 text-4xl text-center font-semibold mt-7 '>Search Products</h2>
      <form onSubmit={handleSearch} className="flex justify-center mt-8" data-aos="zoom-in">
        <input
          type="text"
          name="query"
          value={searchTerm}
          placeholder="Product Name (Ex: Shoes)"
          className="input w-full max-w-md"
          onChange={handleInputChange}
        />
      </form>

      {  
        products?.length ? <div
          className="search-products max-h-96 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10 text-white"
        > 
          {products?.map((item) => (
            <ProductsCard key={item.id} product={item}  setModalOpen={setModalOpen} />
          ))}

             
        </div>
          : <h1 className='text-white text-3xl mt-10 lg:text-start text-center'>No Items Found!</h1>
          }
    </section>
  </div>
  );
};

export default SearchModal;