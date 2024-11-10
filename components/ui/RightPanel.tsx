import { ProjectTabs } from "./ProjectTabs";

function RightPanel({ description }: { description: string }) {
  return (
    <aside className="right-panel" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="block md:hidden font-semibold text-4xl text-white mx-auto">
        {description}
      </h2>
      <ProjectTabs />
    </aside>
  );
}

export default RightPanel;