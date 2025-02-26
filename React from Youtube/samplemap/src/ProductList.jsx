const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "HeadPhone", price: "$199" },
];

const ProductList = () => {
  return (
    <div>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
