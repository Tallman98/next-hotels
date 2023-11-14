import { PageProps } from "@/types";
import {
  Breadcrumbs,
  Input,
  Button,
  LeftPanel,
  RightPanel,
} from "@/components";

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
        <LeftPanel params={params} />
        <RightPanel params={params} />
      </div>
    </main>
  );
};

export default page;
