import { Categories, Container, SortPopup, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
    <Container>
      <Title text='Все пиццы' size='lg' className="font-bold"/>
    </Container>
    <TopBar/>
    <Container>
      <Filters/>
    </Container>
    </>
  );
}