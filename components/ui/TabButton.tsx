import { cn } from "@/lib/utils"

export default function TabButton({ title, href, styles = '' }: { title: string, href: string, styles?: string }){
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button                
                className={cn("absolute right-10 bottom-6 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-white/60 hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200", styles) }>
                {title}
            </button>
      </a>
    )
}