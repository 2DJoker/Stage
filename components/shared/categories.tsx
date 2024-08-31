'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCategoryStore } from '@/store/category';

interface Props {
    className?: string;
}

const Premium = "Premium";
const cats = [
    { id: 1, name: 'Обувь' },
    { id: 2, name: 'Одежда' },
    { id: 3, name: 'Головные уборы' },
    { id: 4, name: 'Парфюмерия' },
    { id: 5, name: 'Какашки' },
];
const premiumId = 6;  // Идентификатор для премиум категории

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    const setActiveCategory = useCategoryStore((state) => state.setActiveId);

    const handleClick = (id: number) => {
        setActiveCategory(id);

        // Скроллим к нужной категории
        const element = document.getElementById(`category-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={cn('flex justify-center py-4 px-2', className)}>
            <div className={cn('inline-flex gap-1 bg-gray-200 p-1 rounded-2xl shadow-lg max-w-full')}>
                {cats.map(({ name, id }) => (
                    <a
                        className={cn(
                            "flex items-center font-bold h-11 rounded-2xl px-5",
                            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                        )}
                        href={`/#${name}`}
                        key={id}
                        onClick={() => handleClick(id)}  // Обработка клика на обычных категориях
                    >
                        <button>{name}</button>
                    </a>
                ))}
                <div className={cn('inline-flex gap-1')}></div>
                <a
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5 bg-black text-white shadow-md shadow-gray-300"
                    )}
                    onClick={() => handleClick(premiumId)}  // Обработка клика на премиум категории
                >
                    <Sparkles color='#ffffff' className="h-4 w-4 mr-2 cursor-pointer" strokeWidth={2} />
                    <button className="text-white">{Premium}</button>
                </a>
            </div>
        </div>
    );
};
