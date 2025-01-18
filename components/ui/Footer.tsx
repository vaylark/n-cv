import Image from "next/image";
import IconEmailOutline from "@/assets/IconEmailOutline";
import IconTwitterLogo from "@/assets/IconTwitterLogo";

export default function Footer() {
    return (
        <footer className="footer">
                <div className="flex justify-center items-center w-[8rem]">
                    <Image
                        src="/n-cv/xfbw92kjx3czat0aknuy"
                        alt="Application logo"
                        width={80}
                        height={80}
                    />
                </div>

                <div className="flex flex-grow justify-center items-center">
                    <ul className="space-y-2 flex-col p-5">
                        <h2 className="font-semibold text-xl text-white">Contact</h2>
                        <li className="flex text-white items-center space-x-2">
                            <IconEmailOutline aria-hidden="true" />
                            <a
                                href="mailto:nemdevcontact@gmail.com"
                                className="text-sm hover:underline"
                                aria-label="Email Nemrod C."
                            >
                                nemdevcontact@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
        </footer>
    );
}