import { StickyScroll, Content } from "@/components/ui/sticky-scroll-reveal";
import { prjmanagerContent, prjextensionContent, prjbankContent, collabchatContent } from "@/constants";
import Head from "next/head";
const CVURL = process.env.NEXT_CV_URL;

export default function Project({ params }) {
  const getContentType = (project: string): Content[] => {
    switch (project) {
      case 'prjmanager':
        return prjmanagerContent;
      case 'prjextension':
        return prjextensionContent;
      case 'prjbank':
        return prjbankContent;
      case 'collabchat':
        return collabchatContent;
      default:
        return prjmanagerContent; // Puedes agregar una página 404 o mensaje de proyecto no encontrado
    }
  };

  const projectContent = getContentType(params.slug);
  const mainProject = projectContent[0]; // Utilizamos el primer contenido como principal para metadatos

  return (
    <>
      <Head>
        <title>{mainProject.title} | Project by Nemrod C.</title>
        <meta name="description" content={mainProject.description} />
        <meta property="og:title" content={`${mainProject.title} | Project by Nemrod C.`} />
        <meta property="og:description" content={mainProject.description} />
        <meta property="og:url" content={`${CVURL}/projects/${params.slug}`} />
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