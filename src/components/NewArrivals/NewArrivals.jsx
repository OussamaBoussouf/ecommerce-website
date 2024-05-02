import React from "react";

import Card from "../ui/Card";
import { useFetch } from "../../hooks/useFetch";

function NewArrivals() {
  const {data:products, loading, error} = useFetch(`*[_type == "product"]| order(releaseDate asc)[0..5]
  { "id":_id,
    product_name,
    product_price,
    product_description,
    "image": product_image.asset._ref
  }`);

  if(loading) return <p>Loading...</p>

  if(error) return <p className="text-red-500">an Error occured</p>

  return (
    <section className="max-w-[1300px] mx-auto py-24 px-3 md:px-6 lg:px-0">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-poppins-bold text-3xl mb-8">New Arrivals</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-auto-fill">
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
