import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingBag, ShoppingCart, UserRound, CircleChevronRight } from "lucide-react";


interface Props {
    className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <div>
                <Container className='flex items-center justify-between py-8'>
                    
                    {/* левая часть хедера */}

                    <div className="flex items-center gap-4">
                        <Image className="cursor-pointer" src="/img/logo.jpg" alt="Logo" width={85} height={80} />
                        <div>
                            <h1 className="text-2xl uppercase font-black cursor-pointer">Stage shoes</h1>
                            <p className="text-sm text-gray-400 leading-3">описание</p>
                        </div>
                    </div>

                    {/* правая часть */}

                    <div className="flex items-center gap-3">
                        <Button variant={"outline"} className="flex items-center gap-1.5">
                            <UserRound size={16} />
                                Войти
                            </Button>

                            <div>
                                <Button className="group relative">
                                    <b> 399.99 $</b>
                                    <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                                    <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                        <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                        <b>3</b>
                                    </div>
                                    <CircleChevronRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                                </Button>
                            </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};