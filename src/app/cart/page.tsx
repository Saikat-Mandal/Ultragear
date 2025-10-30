import { useCartStore } from "../store/cartStore";

const cart = () => {

  const products = useCartStore((state) => state.cart);

  return (
    <div>
      <h1>All products</h1>

    </div>

  )
}

export default cart