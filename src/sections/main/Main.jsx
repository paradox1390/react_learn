import { useEffect, useState } from "react";
import { Product } from "../../componets/product";

export const Main = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
          setLoading(true);
          const data = await fetch("https://dummyjson.com/products?limit=32");
          const products = await data.json();
          setLoading(false);
          setProducts(products.products);
        };
        
        loadProducts();
      }, []);

  return (
    <main className="mt-3 mb-7">
        {loading && <p>Loading...</p>}

        {products && <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-full'>{products.map((product)=>{
                    return <div key={product.id} className=''>
                              <Product product={product}/>
                            </div>})}
                 </div>}


    </main>
  )
}
