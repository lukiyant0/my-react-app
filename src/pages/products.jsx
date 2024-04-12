import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    descriptions: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ipsa, voluptas qui hic harum omnis nesciunt! Sapiente sit odio eum
          laborum nemo voluptatum aut molestias repellat quae nam, debitis
          laboriosam?`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    descriptions: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Nika",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    descriptions: `Ini sepatu baru dari Nika`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.descriptions}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
