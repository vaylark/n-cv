"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };


export const MobileMenuItem = ({
    setActive,
    active,
    item,
    isActive,
    src,
    Icon,
    children,
  }: {
    setActive: (item: string | null) => void;
    active: string | null;
    item: string;
    isActive: boolean;
    src: string;
    Icon: (props: any) => React.JSX.Element;
    children?: React.ReactNode;
  }) => {

    const router = useRouter();

    const handleClick = (e) => {
      if (src.startsWith('/projects')) {
        // Si src empieza con '/projects', evitamos la navegación
        e.preventDefault();
      } else {
        // En otros casos, navegamos usando el router de Next.js
        router.push(src);
      }
    };
  
    return (
      <div onMouseEnter={() => setActive(item)} className="relative">
        <motion.a
          onClick={handleClick}
          transition={{ duration: 0.3 }}
          className={cn("mobilenav-sheet_close", {
            "bg-bank-gradient": isActive
          })}
        >
          <Icon className={ cn('w-10 h-10 text-black dark:text-black', {
            'text-white': isActive
          })}/>
          {item}
        </motion.a>
        {children && active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && (
              <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 ">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    );
  };