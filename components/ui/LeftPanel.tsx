import Image from "next/image";
import Head from "next/head";

type LeftPanelProps = {
  src: string;
  name: string;
  expertise: string;

};

function LeftPanel({ src, name, expertise }: LeftPanelProps) {
  return (
    <>
      <Head>
        <title>Nemrod C. | Full-Stack Developer</title>
        <meta
          name="description"
          content="Nemrod C., a full-stack developer with expertise in React, Next.js, JavaScript, and more. Explore my technical skills and projects."
        />
      </Head>
      <section className="left-panel" aria-labelledby="profile-heading">
        <div className="flex w-full md:w-1/2 md:justify-end justify-center">
          <Image
            src={src}
            alt={`Profile picture of ${name}`}
            width={250}
            height={100}
            className="shadow-2xl border-2 border-white rounded-xl"
          />
        </div>

        <div className="h-1/3 w-1/2 space-y-10 text-center md:text-left">
          <div className="developer">
            <h1 id="profile-heading" className="text-3xl font-bold mb-1 text-white dark:text-white">
              {name}
            </h1>
            <h2 className="text-neutral-200 text-lg dark:text-neutral-300">
              {expertise}
            </h2>
          </div>

          <div className="skills space-y-2">
            <h3 className="text-md font-bold mb-1 text-white dark:text-white">Technical skills:</h3>
            <ul className="text-neutral-200 text-sm dark:text-neutral-300">
              <li>— React, NextJS, Vue</li>
              <li>— MongoDB, PostgreSQL</li>
              <li>— JavaScript, TypeScript, Java</li>              
              <li>— NodeJS, Express, Spring Boot</li>
            </ul>
          </div>
          <p className="text-neutral-200 text-sm dark:text-neutral-300">
            Spanish | English | Hebrew
          </p>
        </div>
      </section>
    </>
  );
}

export default LeftPanel;