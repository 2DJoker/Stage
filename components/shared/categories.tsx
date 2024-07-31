'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  className?: string;
}

const Premium = ["Premium"];
const cats = ["Одежда", "Обувь", "Парфюмерия", "Акссесуары", "Головные уборы","Какашки"];
const activeIndex = 0;


export const Categories: React.FC<Props> = ({ className }) => {

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
    {
        cats.map((cat, index) => (
            <a  className={cn(
                "flex items-center font-bold h-11 rounded-2xl px-5",
                activeIndex == index && 'bg-white shadow-md shadow-gray-300 text-primary'
            )} key={index}>
                <button>{cat}</button>
            </a>
        ))
    }
     <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}></div>
     {
        Premium.map((cat, index) => (
            <a
                className={cn(
                    "flex items-center font-bold h-11 rounded-2xl px-5",
                    activeIndex == index && 'bg-black shadow-md shadow-gray-300 text-white'
                )}
                key={index}
            >
                <Sparkles color='#ffffff' className="h-4 w-4 mr-2 cursor-pointer" strokeWidth={2} />
                <button className={activeIndex == index ? 'text-white' : 'text-black' }>Premium</button>
            </a>
        ))
        
    }
    </div>
    
    

  );
};