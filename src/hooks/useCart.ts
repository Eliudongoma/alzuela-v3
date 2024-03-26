import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../contexts";
import { figure } from "../utils";
import { Product } from "../components/interfaces/Product";
import { useProducts } from ".";

export interface CartProduct extends Product {
  quantity: number;
}
// Adding products to cart is done by adding the product's id to the ids object like {id1: 'id1'} and then incrementing the count
// Removing a product from the cart is the opposite
// To check whether a product is in cart, just check if the id is present in the ids object
const useCart = () => {
  const context = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const { products } = useProducts();

  const count = context.cartProducts.count;
  const results = getProducts();

  useEffect(() => {
    setCartProducts(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, results.length]); 

  const addToCart = (productId: string | number) => {
    const { count, ids } = { ...context.cartProducts };

    if (hasProductInCart(productId)) return;
    ids[productId] = productId;

    context.setCartProducts({ count: count + 1, ids });
  };

  const removeFromCart = (productId: string | number) => {
    const { count, ids } = { ...context.cartProducts };

    if (!hasProductInCart(productId)) return;
    delete ids[productId];

    context.setCartProducts({ count: count - 1, ids });
  };

  const clearCart = () => context.setCartProducts({ count: 0, ids: {} });

  function hasProductInCart(productId: string | number): boolean {
    return context.cartProducts.ids[productId] ? true : false;
  }

  function getProducts(): CartProduct[] {
    const found: CartProduct[] = [];

    products.forEach((p) => {
      if (hasProductInCart(p._id)) found.push({ ...p, quantity: 1 });
    });

    return found;
  }

  const incrementQuantity = (productId: string | number) => {
    const updated = cartProducts.map((p) => {
      if (p._id === productId) p.quantity += 1;
      return p;
    });

    setCartProducts(updated);
  };

  const decrementQuantity = (id: string | number) => {
    const updated = cartProducts.map((p) => {
      if (p._id !== id) return p;

      p.quantity === 1
        ? toast.info("Delete it if you really wanna remove")
        : (p.quantity -= 1);

      return p;
    });

    setCartProducts(updated);
  };

  const getGrandTotal = () => {
    const grandTotal = cartProducts.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );

    return figure.addComma(figure.roundToTwoDecimalPlaces(grandTotal));
  };

  return {
    add: addToCart,
    clear: clearCart,
    decrementQuantity,
    count,
    getGrandTotal,
    getProducts,
    hasProduct: hasProductInCart,
    incrementQuantity,
    products: cartProducts,
    remove: removeFromCart,
    setProducts: setCartProducts,
  };
};

export default useCart;
