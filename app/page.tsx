"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilters from "@/components/CustomFilters";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //saerch states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  //filter states
  const [fuel, setFuel] = useState<string>("");
  const [year, setYear] = useState<number>(2022);
  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilters 
            title="fule" 
            options={fuels} 
            setFilter={setFuel} />
            <CustomFilters
              title="year"
              setFilter={setYear}
              options={yearsOfProduction}
            />
          </div>
        </div>

        <div>
          {allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}
              <ShowMore
                pageNumber={(limit) / 10}
                isNext={limit> allCars.length}
                setLimit={setLimit}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
