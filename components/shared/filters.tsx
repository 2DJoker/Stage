import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox  text="Скидки" value="1" />
                <FilterCheckbox  text="Новинки" value="2" />
                <FilterCheckbox  text="Популярное" value="3"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={39000} defaultValue={0} />
                    <Input type="number" min={100} max={39000} placeholder="39000"/>
                </div>

                <RangeSlider min={0} max={39000} step={10} value={[0, 39000]} />
            </div>

            <CheckBoxFiltersGroup
            title="Бренды"
            className="mt-5"
            limit={6}
            defaultItems={[
                {
                    text: 'Nike',
                    value: '1',
                },
                {
                    text: 'Adidas',
                    value: '2',
                },
                {
                    text: 'Puma',
                    value: '3',
                },
                {
                    text: 'New Balance',
                    value: '4',
                },
                {
                    text: 'Maison Margiela',
                    value: '5',
                },
                {
                    text: 'Chrome Hearts',
                    value: '6',
                },   
            ]}
            items={[
                {
                    text: 'Nike',
                    value: '1',
                },
                {
                    text: 'Adidas',
                    value: '2',
                },
                {
                    text: 'Puma',
                    value: '3',
                },
                {
                    text: 'New Balance',
                    value: '4',
                },
                {
                    text: 'Maison Margiela',
                    value: '5',
                },
                {
                    text: 'Chrome Hearts',
                    value: '6',
                },
                {
                    text: 'Nike',
                    value: '1',
                },
                {
                    text: 'Adidas',
                    value: '2',
                },
                {
                    text: 'Nike',
                    value: '1',
                },
                {
                    text: 'Adidas',
                    value: '2',
                },
                {
                    text: 'Nike',
                    value: '1',
                },
                {
                    text: 'Adidas',
                    value: '2',
                },
            ]}
            />
        </div>
    );
};