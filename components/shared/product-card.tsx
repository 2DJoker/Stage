import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        {/* Изменение структуры контейнера и изображение */}
        <div className="bg-secondary rounded-lg overflow-hidden h-[260px]">
          <img 
            className="w-full h-full object-cover" 
            src={imageUrl} 
            alt={name} 
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          adidas Yeezy Boost 350 — самые популярные кроссовки, разработанные adidas совместно с музыкантом Канье Уэстом. Впервые представленные в 2015 году.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
