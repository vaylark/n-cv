'use client'

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, MenuItemLink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

function NavBar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 b max-md:hidden", className)}
      >
        <Menu setActive={setActive}>

          <MenuItemLink setActive={setActive} active={active} href="/">Home</MenuItemLink>

          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="PrJManager"
                href="/projects/prjmanager"
                src="/n-cv/drzuwbxxxmleagmiwabl"
                description="Repository platform prototype."
              />
              <ProductItem
                title="PrJExtension"
                href="/projects/prjextension"
                src="/n-cv/iu8v2xx2dmi2zt3g5cfg"
                description="Full interaction with remote repositories in Visual Studio Code."
              />
              <ProductItem
                title="PrJBank"
                href="/projects/prjbank"
                src="/n-cv/gho4v58z7yqbua9njliu"
                description="Fintech powered by Plaid, Dwolla, Appwrite among other technologies."
              />
              <ProductItem
                title="CollabChat"
                href="/projects/collabchat"
                src="/n-cv/madcf4s9jyo8yxefdtvi"
                description="Online chat technology has never been easier to implement."
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
}

export default NavBar;