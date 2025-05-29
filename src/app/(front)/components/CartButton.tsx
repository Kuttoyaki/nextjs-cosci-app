/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/car-store";
import { ChevronRight } from "lucide-react";

export default function CartButton({product}:any) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddItem = () => {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            qty: 1,
        });
    };
    const totalItems = useCartStore((state) => state.totalItems);
    const totalPrice = useCartStore((state) => state.totalPrice);                                           
    return (
        <>
        <Button
        className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Add to Cart<ChevronRight />
        </Button>
        </>
    );
} 