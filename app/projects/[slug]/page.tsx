import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { getContentType } from "@/constants";
import Head from "next/head";
const CVURL = process.env.NEXT_CV_URL;
import Footer from "@/components/ui/Footer";

export default async function Project({ params }) {
  const { slug } = await params;
  const projectContent = getContentType(slug);
  const mainProject = projectContent[0]; // Utilizamos el primer contenido como principal para metadatos

  return (
    <>
      <Head>
        <title>{mainProject.title} | Project by Nemrod C.</title>
        <meta name="description" content={mainProject.description} />
        <meta property="og:title" content={`${mainProject.title} | Project by Nemrod C.`} />
        <meta property="og:description" content={mainProject.description} />
        <meta property="og:url" content={`${CVURL}/projects/${slug}`} />
        <meta property="og:image" content={`${CVURL}${mainProject.imgUrl}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${mainProject.title} | Project by Nemrod C.`} />
        <meta name="twitter:description" content={mainProject.description} />
        <meta name="twitter:image" content={`${CVURL}${mainProject.imgSrc}`} />
      </Head>
      
      <section className="project-section" aria-labelledby="project-title">
          <StickyScroll content={projectContent} />
      </section>


    </>
  );
}