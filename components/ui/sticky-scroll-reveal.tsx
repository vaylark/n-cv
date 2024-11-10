"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TextPreview } from "./text-preview";


export type Content = {
  title: string;
  description: string;
  imgUrl: string | null;
  imgSrc?: string | null;
  vidSrc?: string | null;
  backupImg: string | null;
  url: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: Content[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollY } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    // offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const cardsBreakpoints = content.map((_, index) => index / cardLength);

  //   console.log('cardsBreakpoints', cardsBreakpoints)
  //   const closestBreakpointIndex = cardsBreakpoints.reduce(
  //     (acc, breakpoint, index) => {
  //       const distance = Math.abs(latest - breakpoint);
  //       if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
  //         return index;
  //       }
  //       return acc;
  //     },
  //     0
  //   );

  //   console.log('closestBreakpointIndex', closestBreakpointIndex)
  //   setActiveCard(closestBreakpointIndex);
  // });

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    if (!ref.current) return; // Ensure ref is available
  
    const maxScrollY = ref.current.scrollHeight - ref.current.clientHeight;
    const normalizedScrollY = currentScrollY / maxScrollY;
  
    const cardsBreakpoints =
      content.length > 1
        ? content.map((_, index) => index / (cardLength - 1))
        : [0];
  
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(normalizedScrollY - breakpoint);
        if (distance < Math.abs(normalizedScrollY - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
  
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[50rem] md:h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md "
      ref={ref}
    >

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden md:block h-[25rem] w-[45rem] rounded-xl bg-white sticky top-10 overflow-hidden ",
          contentClassName
        )}
      >
        {content[activeCard].imgSrc ? (
          <div className="h-full w-full flex items-center justify-center text-white">
            <Image
              src={content[activeCard].imgSrc}
              fill
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ) : content[activeCard].vidSrc ? (
          <div className="h-full w-full flex items-center justify-center text-white">
            <video
              src={content[activeCard].vidSrc}
              controls
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mt-12 mb-[7rem]">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-slate-100"
              >
               <span className="hidden md:block">{item.title}</span> 
                <TextPreview
                  isStatic
                  imageSrc={item.imgSrc ? item.imgSrc : item.backupImg}
                  url={item.url}                 
                  className="text-white block md:hidden"                  
                >
                  {item.title}
                </TextPreview>        
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
