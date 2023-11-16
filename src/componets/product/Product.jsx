
export const Product = ({product}) => {
    console.log(product);
  return (
    <><img src={product.thumbnail} className='aspect-[1/1.2] object-contain'/>
      <h3>{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
    </>
  )
}
