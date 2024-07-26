import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Timeline } from "./_components/timeline";
import { TypingEffect } from "./_components/type-writer";
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./_components/Button"
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Collaboration from "./_components/Collaboration"
import Roadmap from "./_components/Roadmap";
export default function LandingPage() {
  return (
   <>
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden 
   ">
    <Header/>
    <Hero />
    {/* <Button className={"mt-0"} href={"#login"} onClick={undefined} >
      Sign up
    </Button> */}
    <Collaboration/>
    <Roadmap />

   <ButtonGradient/>
   </div>
   </>
  );
}