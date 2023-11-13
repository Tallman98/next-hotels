import {
  Hero,
  TodaysDeals,
  PopularCities,
  Book,
  Deals,
  Features,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <TodaysDeals />
      <PopularCities />
      <Book />
      <Deals />
      <Features />
    </div>
  );
}
