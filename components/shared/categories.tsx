'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCategoryStore } from '@/store/category';

interface Props {
className?: string;
}

const Premium = ["Premium"];
const cats = [
    { id: 1, name: 'Обувь'},
    { id: 2, name: 'Одежда'},
    { id: 3, name: 'Головные уборы'},
    { id: 4, name: 'Парфюмерия'},
    { id: 5, name: 'Какашки'},
];
const activeIndexPremium = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

return (
    <div className={cn('flex justify-center py-4 px-2', className)}>
    <div className={cn('inline-flex gap-1 bg-gray-200 p-1 rounded-2xl shadow-lg max-w-full')}>
        {cats.map(({name, id}, index) => (
        <a
            className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === index + 1 && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            key={index}
        >
            <button>{name}</button>
        </a>
        ))}
        <div className={cn('inline-flex gap-1')}></div>
        {Premium.map((cat, index) => (
        <a
            className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndexPremium === index && 'bg-black shadow-md shadow-gray-300 text-white'
            )}
            key={index}
        >
            <Sparkles color='#ffffff' className="h-4 w-4 mr-2 cursor-pointer" strokeWidth={2} />
            <button className={activeIndexPremium === index ? 'text-white' : 'text-black'}>Premium</button>
        </a>
        ))}
    </div>
    </div>
);
};
