import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

function Products() {
  const catId = useParams().id;
  const [sortPrice, setSortPrice] = useState('desc');
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item != value)
    );
  };

 

  return (
    <div className="max-w-[1300px] mx-auto py-16 px-3 md:flex md:gap-10 lg:gap-16">
      <aside className="min-w-[200px]">
        <div className="md:sticky md:top-3">
          <h2 className="font-poppins-bold text-xl mb-3">Product Categories</h2>
          <div className="space-x-1 mb-3">
            <input
              type="checkbox"
              id="1"
              value="T-shirt"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="1">T-shirts</label>
          </div>
          <div className="space-x-1 mb-3">
            <input
              type="checkbox"
              id="2"
              value="Jacket"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="2">Jackets</label>
          </div>
          <div className="space-x-1 mb-3">
            <input
              type="checkbox"
              id="3"
              value="Coat"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="3">Coats</label>
          </div>
          <div>
            <h2 className="font-poppins-bold text-xl mb-3">Sort by</h2>
            <div className="space-x-1 mb-3">
              <input
                type="radio"
                name="price"
                value="asc"
                id="asc"
                onChange={(e) => setSortPrice(e.target.value)}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="space-x-1 mb-3">
              <input
                type="radio"
                name="price"
                value="desc"
                id="desc"
                onChange={(e) => setSortPrice(e.target.value)}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </aside>
      <section className="flex-grow">
        <List category={catId} sortPrice={sortPrice} selectedSubCat={selectedSubCat} />
      </section>
    </div>
  );
}

export default Products;
