
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Start shopping to add items to your cart</p>
          <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            Clear Cart
          </Button>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {items.map((item) => (
            <div key={item.id} className="p-6 border-b border-gray-700 last:border-b-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{item.image}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  
                  <span className="text-white w-8 text-center">{item.quantity}</span>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-white">Total:</span>
            <span className="text-2xl font-bold text-purple-400">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button asChild className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
