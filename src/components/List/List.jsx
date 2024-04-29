import React from "react";
//IMAGES
import Card from "../../components/ui/Card";

import { useFetch } from "../../hooks/useFetch";

function List({ category, selectedSubCat, sortPrice }) {

  const {
    data: products,
    loading,
    error,
  } = useFetch(`*[_type == "category" && category == "men"]{
    "products": products[${selectedSubCat
      .map((subCat) => `@->type == "${subCat}"`)
      .join(" || ")}] | order(@->product_price ${sortPrice})->{
      "id":_id,
      product_name,
      product_price,
      product_description,
      "image": product_image.asset._ref
    }
  }`);

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-red-500">an Error occured</p>;

  return (
    <div className="grid gap-x-5 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-auto-fill">
      {products[0]?.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default List;
