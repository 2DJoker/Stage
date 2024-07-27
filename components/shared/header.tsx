import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { UserRound } from "lucide-react";


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
                    </div>
                </Container>
            </div>
        </header>
    );
};