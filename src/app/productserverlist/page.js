async function productList(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    return data.products
}

const page =async () => {
    let product= await productList()
  return <div>
    <h1>Server side component Product List</h1>
    {product.map((ele,i)=>(<h3 key={i}>{ele.title}</h3>))}
  </div>;
};

export default page;
