import Product from "../components/Product";
import ProductButton from "../components/ProductButton";
async function getProducts(){
    const response = await fetch('https://dummyjson.com/products?limit=10&&select=title,price');

    const data = await response.json();
    return data.products;
}

export default async function Products() {
    const products = await getProducts();
    console.log(products);
  return (
    <div>
        <h1>Products</h1>
        {
            products.length>0 && (
                products.map(({id,title,price}) =>
                {
                    // return <h1 key={id}>Title : {title}</h1>
                    return <><Product key={id} title={title} price={price}/>
                    <ProductButton key={id} id = {id}/>
                    </>
                })
            )
        }
    </div>
  )
}
