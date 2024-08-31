import { SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters"
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
  
  
  <Container className="mt-10">
    <Title text="Каталог" size="lg" className="font-extrabold"  />
   </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

           {/* Список товаров */}
           <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
              title="Обувь" 
              items={[
                {
                  id: 1,
                  name: 'Yeezy 350',
                  imageUrl: '/img/3.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 2,
                  name: 'Nike Air Force Skeleton',
                  imageUrl: '/img/skeleton.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 3,
                  name: 'Dunk Off-white',
                  imageUrl: '/img/dunk3.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 4,
                  name: 'Dunk',
                  imageUrl: '/img/dunk.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 5,
                  name: 'Travis Scott',
                  imageUrl: '/img/travis.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 6,
                  name: 'Jordan 1',
                  imageUrl: '/img/jordan.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 7,
                  name: 'Nike Dunk',
                  imageUrl: '/img/dunk2.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 8,
                  name: 'Yeezy 500',
                  imageUrl: '/img/500.jpg',
                  price: 230,
                  items: [{ price: 230 }],
                },
              ]} 
              categoryId={1}
              />
              <ProductsGroupList 
              title="Одежда" 
              items={[
                {
                  id: 1,
                  name: 'Supreme',
                  imageUrl: '/img/supreme.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 2,
                  name: 'Vlone',
                  imageUrl: '/img/vlone.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 3,
                  name: 'Черные псы',
                  imageUrl: '/img/YE.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 4,
                  name: 'Mastermind',
                  imageUrl: '/img/mind.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 5,
                  name: 'Yeezy hoodie',
                  imageUrl: '/img/ye2.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
                {
                  id: 6,
                  name: 'Cav empt',
                  imageUrl: '/img/cav.png',
                  price: 230,
                  items: [{ price: 230 }],
                },
              ]} 
              categoryId={2}
              />
           </div>
        </div>
      </div>
      </Container>
  </>
  );
};
