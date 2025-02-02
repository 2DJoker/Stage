"use client";
import { SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";

const productsData = {
  footwear: [
    { id: 1, name: 'Yeezy 350', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727088798/3_qfjzul.jpg', price: 230 },
    { id: 2, name: 'Nike Air Force Skeleton', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089477/skeleton_zytpuw.jpg', price: 230 },
    { id: 3, name: 'Dunk Off-white', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089460/dunk3_u6y9lh.jpg', price: 230 },
    { id: 4, name: 'Dunk', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089448/dunk_duwy5k.jpg', price: 230 },
    { id: 5, name: 'Travis Scott', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089487/travis_ytdydd.jpg', price: 230 },
    { id: 6, name: 'Jordan 1', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089487/travis_ytdydd.jpg', price: 230 },
    { id: 7, name: 'Nike Dunk', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089455/dunk2_d3eovd.jpg', price: 230 },
    { id: 8, name: 'Yeezy 500', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089427/500_i35k6u.jpg', price: 230 },  
  ],
  clothing: [
    { id: 1, name: 'Supreme', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089483/supreme_ftvo1l.png', price: 230 },
    { id: 2, name: 'Vlone', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089492/vlone_o2g1ov.png', price: 230 },
    { id: 3, name: 'Черные псы', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089497/YE_sh8q0x.png', price: 230 },
    { id: 4, name: 'Mastermind', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089470/mind_aqx327.png', price: 230 },
    { id: 5, name: 'Yeezy hoodie', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089502/ye2_qehnq9.png', price: 230 },
    { id: 6, name: 'Cav empt', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727089432/cav_aizkpa.png', price: 230 },
  ],
  hats: [
    { id: 1, name: 'C.P company hat', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727107885/2024-09-23_19.10.36_bz0zay.jpg'},
    { id: 2, name: 'Polar skate co', imageUrl: 'https://res.cloudinary.com/dc57mpiao/image/upload/v1727107874/2024-09-23_19.10.32_rrlkck.jpg'},
  ],
  parfume: [
    { id: 1, name: "Masion Margiela Replica", imageUrl: "https://res.cloudinary.com/dc57mpiao/image/upload/v1727108291/2024-09-23_19.17.07_ghfvjf.jpg"},
    { id: 2, name: "Masion Margiela Replica", imageUrl: "https://res.cloudinary.com/dc57mpiao/image/upload/v1727108286/2024-09-23_19.17.04_jpnpnv.jpg"},
  ],
  acsessories: [
    { id: 1, name: "Chrome Hearts", imageUrl: "https://res.cloudinary.com/dc57mpiao/image/upload/v1727108278/2024-09-23_19.17.01_fefduq.jpg"},
    { id: 2, name: "Chrome Hearts", imageUrl: "https://res.cloudinary.com/dc57mpiao/image/upload/v1727108273/2024-09-23_19.16.58_vrkjbh.jpg"},
  ],
  Premium: [
    { id: 1, name: "Goyard", imageUrl: "https://res.cloudinary.com/dc57mpiao/image/upload/v1727108269/2024-09-23_19.16.51_rf1b2b.jpg"},
  ]
};

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Каталог" size="lg" className="font-extrabold" />
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
                items={productsData.footwear} 
                categoryId={1}
              />
              <ProductsGroupList 
                title="Одежда" 
                items={productsData.clothing} 
                categoryId={2}
              />
               <ProductsGroupList 
                title="Головные уборы" 
                items={productsData.hats} 
                categoryId={3}
              />
               <ProductsGroupList 
                title="Парфюмерия" 
                items={productsData.parfume} 
                categoryId={4}
              />
              <ProductsGroupList 
                title="Аксессуары" 
                items={productsData.acsessories} 
                categoryId={5}
              />
              <ProductsGroupList 
                title="Premium" 
                items={productsData.Premium} 
                categoryId={6}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
