"use client";
import { Tabs } from "../ui/tabs";
import TabButton from "./TabButton";

 
export function ProjectTabs() {
  const tabs = [
    {
      title: "About Me",
      value: "about",
      content: (
        <div 
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/dvsggv3tbpxbe3gozwuj')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-4 md:p-12 font-bold text-white bg-gradient-to-br">
            <p className="hidden md:block text-black text-4xl">Nemrod Cardona | Fullstack Developer</p>
            <p className=" text-black font-normal text-[16px] md:text-lg mt-2 md:mt-5">
            With over 2 years of experience in web development, I have a strong foundation in creating robust, user-centered applications. My adaptability and proficiency across various frameworks and programming languages enable me to tackle diverse challenges and deliver efficient solutions.

As a self-taught, proactive professional, I excel at taking projects from concept to prototype, always focusing on innovation and quality. 
                <span className="hidden sm:block">
                  I thrive in collaborative environments, 
                  where my creativity and problem-solving skills contribute to achieving team goals and driving impactful results.                  
                </span>

            </p>                
         
        </div>
      ),
    },
    {
      title: "ShaffyNation",
      value: "shaffynation",
      content: (
        <div 
        style={{
            backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v1733669198/n-cv/mbvnblwpzzjm1ffm3ad2.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-6 md:p-12 font-bold text-white bg-gradient-to-br">
            <TabButton title="Website" href="https://www.shaffynation.com/"/>
        </div>
      ),
    },
    {
      title: "PrJManager",
      value: "prjmanager",
      content: (
        <div 
        style={{
            backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/drzuwbxxxmleagmiwabl')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-6 md:p-12 font-bold text-white bg-gradient-to-br">
            <TabButton title="Website" href="https://www.prjmanager.com"/>
        </div>
      ),
    },
    {
      title: "PrJExtension",
      value: "prjextension",
      content: (
        <div 
        style={{
            backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/iu8v2xx2dmi2zt3g5cfg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-6 md:p-12 font-bold text-white bg-gradient-to-br">
            <TabButton title="Website" href="https://marketplace.visualstudio.com/items?itemName=cclmal.prjextension"/>
        </div>
      ),
    },
    {
      title: "PrJBank",
      value: "prjbank",
      content: (
        <div 
        style={{
            backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/gho4v58z7yqbua9njliu')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-6 md:p-12 font-bold text-white bg-gradient-to-br">
            <TabButton title="Website" href="https://prjbank-4oa6txnq4-cclmal-projects.vercel.app"/>
        </div>
      ),
    },
    {
      title: "CollabChat",
      value: "collabchat",
      content: (
        <div 
        style={{
            backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/ejqbyg39tqzgdjhsb5ig')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
            className="relative w-full overflow-hidden  h-full rounded-2xl p-6 md:p-12 font-bold text-white bg-gradient-to-br">
            <TabButton title="Website" href="https://collabchat.vercel.app/"/>
        </div>
      ),
    },
  ];
 
  return (
    <div className="project-tabs">
      <Tabs tabs={tabs} />
    </div>
  );
}
 