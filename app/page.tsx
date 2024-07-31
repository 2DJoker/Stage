import { SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return <>
  
  
  <Container className="mt-10">
    <Title text="Каталог" size="lg" className="font-extrabold"  />

    <TopBar />
  </Container>
  </>; 
  
}
