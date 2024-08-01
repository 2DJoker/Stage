import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container" ;
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";


interface Props {
    className ?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white  py-6 shadow-lg shadow-black/0 z-10 ', className)}>
            <Container className="flex items-center justify-between">
            <Categories />
            <SortPopup />
            </Container>
        </div>

    );
};