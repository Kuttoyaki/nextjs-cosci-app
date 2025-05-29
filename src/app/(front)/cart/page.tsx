import CartList from "../components/CartList"

export default function CartPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1><CartList /></h1>
            <p className="text-gray-600">Your cart is currently empty.</p>
            <p className="text-gray-600">Start shopping to add items to your cart!</p>
        </div>
    );
}