import { PageProps } from "@/types";
import { Breadcrumbs, Input, Button, Subscribe } from "@/components";
import Link from "next/link";

const page = ({ params }: PageProps) => {
  return (
    <main>
      <div className="border-b">
        <Breadcrumbs params={params} />
      </div>
      <div className="border-b">
        <div className="flex mx-auto justify-center gap-[6px] py-5 xl:max-w-[1150px]">
          <Input
            type={"text"}
            placeholder={"Search for a city or particular hotel"}
          />
          <Input type="date" placeholder="Tue, 07 Nov - Wed, 08 Nov" />
          <Button text="Find Hotels" />
        </div>
      </div>
      <div className="mt-10 flex xl:max-w-[1150px] 2xl:max-w-[1250px] mx-auto justify-between gap-10">
        <div className="flex flex-col  mt-16 min-w-[23%] 2xl:min-w-[23%]">
          <Subscribe />
          <Link
            href="/"
            className="bg-[#00aeff] text-white py-2 text-center text-sm rounded-md "
          >
            Shortlet Apartments in {params.city}
          </Link>
        </div>
        <div className="flex flex-col flex-wrap max-w-full">
          <h1 className="text-[#084482] text-xl font-semibold mb-3">
            3,454 Hotels in {params.city}
          </h1>
          <h2 className="text-[#4f4f4f] text-[18px]">
            Select & book from 3,454 Hotel near {params.city}
          </h2>
          <p className="text-[#4f4f4f] font-light text-md my-3">
            Book a great hotel in {params.city}. Hotels.ng has luxury hotels,
            cheap hotels, lodges, airbnbs in {params.city}, short-let apartments
            and more. All at the best rates that are only available online!
          </p>
          <div className="flex justify-between mt-2 text-sm text-[#4f4f4f] items-center">
            <h2>Only show hotels in area</h2>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-[#084482] hover:border-b hover:border-[#084482]"
              >
                Ikeja
              </Link>
              <Link
                href="/"
                className="text-[#084482] hover:border-b hover:border-[#084482]"
              >
                Lekki
              </Link>
              <Link
                href="/"
                className="text-[#084482] hover:border-b hover:border-[#084482]"
              >
                Victoria Island
              </Link>
              <Link
                href="/"
                className="text-[#084482] hover:border-b hover:border-[#084482]"
              >
                Ikoyi
              </Link>
            </div>
            <button className="border p-2 pr-10 rounded-md text-[#4f4f4f]">
              Choose another area
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
