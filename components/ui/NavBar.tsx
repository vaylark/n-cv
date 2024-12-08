'use client'

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, MenuItemLink, HoveredContactlink } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import IconEmailOutline from "@/assets/IconEmailOutline";
import IconTwitterLogo from "@/assets/IconTwitterLogo";

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
                title="ShaffyNation"
                href="/projects/shaffynation"
                src="/n-cv/mbvnblwpzzjm1ffm3ad2"
                description="Products and services for the ShaffyNation community."
              />
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

          <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredContactlink 
              href="mailto:nemdevcontact@gmail.com"
              target="_blank"
              aria-label="Email Nemrod C."
            >
             <IconEmailOutline className="text-black" aria-hidden="true" /> <span>nemdevcontact@gmail.com</span> 
            </HoveredContactlink>
            <HoveredContactlink 
              href="https://x.com/neeeemrod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile of Nemrod C."
            >
             <IconTwitterLogo className="text-black" aria-hidden="true" /> <span>@neeeemrod</span> 
            </HoveredContactlink>
          </div>
        </MenuItem>
        </Menu>
      </div>
    );
}

export default NavBar;