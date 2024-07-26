import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Image from "next/image";
interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

interface CollabAppItem {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

const Collaboration: React.FC = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Smart Note-Taking App for seamless productivity
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item: CollabContentItem) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          {/* <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src={"/logo.gif"}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div> */}

            
            {/* <LeftCurve /> */}
            {/* <RightCurve /> */}
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
