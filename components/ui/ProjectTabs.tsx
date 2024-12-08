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
            <p className="text-black text-4xl">Software Developer | Self-taught | Problem solver</p>
            <p className="hidden md:block text-black font-normal text-[14px] md:text-xl mt-2 md:mt-5">
                Software developer with 2+ years of experience in web technologies, 
                specialized in JavaScript, TypeScript, React, Next.js, Node.js with Express, and MongoDB,
                with additional experience in PostgreSQL and Spring Boot. 
                Self-taught and proactive, with skills to take projects from conception to prototype. 
                I am looking to contribute to dynamic teams as a remote developer, combining creativity and problem-solving.
            </p>                
         
            <TabButton 
              title="Linkedin" 
              href="https://www.linkedin.com/in/nemrod-c-41b428330" 
              styles="block"
            />
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
            <TabButton title="Website" href="https://prjbank-8zhafee9i-cclmal-projects.vercel.app/"/>
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
 