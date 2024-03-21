import Product from "@/app/components/Product";

async function getProduct(id){
//fetching the particular id
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await response.json();

    return data;

} 

export default async function Productpage({params}) {
    const product = await getProduct(params.id);
  return (
    <div>
        <Product title={product.title} price={product.price}/>
    </div>
  )
}
 