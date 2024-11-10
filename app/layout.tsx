import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import MobileNav from "@/components/ui/MobileNav";
const CVURL = process.env.NEXT_CV_URL;

export const metadata: Metadata = {
  title: "Nemrod C. | Full-Stack Software Developer",
  description:
    "I am Nemrod C., a full-stack software developer skilled in React, Next.js, Vue, JavaScript, TypeScript, Java, Node.js, and more. Explore my portfolio and see how I can help with your projects.",
  openGraph: {
    type: "website",
    url: CVURL,
    title: "Nemrod C. | Full-Stack Software Developer",
    description:
      "Welcome to the portfolio of Nemrod C., a software developer specializing in modern web technologies including React, Next.js, JavaScript, TypeScript, Node.js, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dpmtz8b5x/image/upload/v1730721660/n-cv/xyd3woxm4cx4h3nof1se.jpg",
        width: 1200,
        height: 630,
        alt: "Nemrod C. - Full-Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nemrod C. | Full-Stack Software Developer",
    description:
      "Nemrod C. — A full-stack developer proficient in React, Next.js, JavaScript, and more.",
    images: "https://res.cloudinary.com/dpmtz8b5x/image/upload/v1730721660/n-cv/xyd3woxm4cx4h3nof1se.jpg",
  },
  keywords: [
    "Nemrod C.",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Vue",
    "Java",
    "MongoDB",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

      </head>
      <body
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpmtz8b5x/image/upload/v12345678/n-cv/bs5ealvlcl35t4espi4k')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <main className="flex w-screen h-screen overflow-hidden">
          <NavBar />
          <MobileNav />
          {children}
        </main>
      </body>
    </html>
  );
}
