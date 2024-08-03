import { SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters"

export default function Home() {
  return (
    <>
  
  
  <Container className="mt-10">
    <Title text="Каталог" size="lg" className="font-extrabold"  />
   </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
           {/* Список товаров */}
           <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
           </div>
        </div>
      </Container>
      <div style={{height: '3000px'}} />
  </>
  );
};
