"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/car-store";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
    const router = useRouter();

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice());

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600">Start shopping to add items to your cart!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map((i) => (
                            <TableRow key={i.productId}>
                                <TableCell>{i.productId}</TableCell>
                                <TableCell>{i.title}</TableCell>
                                <TableCell>{i.price}</TableCell>
                                <TableCell>{i.qty}</TableCell>
                                <TableCell>{i.price * i.qty} Baht</TableCell>
                                <TableCell>
                                    <Button variant="destructive" onClick={() => removeItem(i.productId)}>
                                        <Trash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
                
                <div className="text-center mt-4">
                    <div>
                        Total: {totalPrice.toFixed(2)}
                    </div>
                    <div className="mt-4">
                        <Button className="mr-4" variant="outline" onClick={() => {clearCart(); }}>Clearcart</Button>
                        <Button onClick={() => {
                            clearCart();
                            router.replace("/product");
                        } }>Purchase</Button>
                        
                    </div>
                </div>

                </div>
    );
}
