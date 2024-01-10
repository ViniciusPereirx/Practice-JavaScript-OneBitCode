import { Link, useParams } from "react-router-dom";

import products from "../database.json";

function Product() {
  const { productId } = useParams(); // Mesmo nome definido no path em router.jsx

  const product = products.find((p) => p.id === +productId); // "+"" converte do tipo string para number

  if (!product) {
    return <h2>Ops... Esse produto não foi encontrado!</h2>;
  }

  return (
    <section>
      <Link to={"/products"}>
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}

export default Product;
