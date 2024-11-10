import LeftPanel from "@/components/ui/LeftPanel";
import RightPanel from "@/components/ui/RightPanel";


export default function Home() {
  return (
    <section className="home">
          <LeftPanel
            src="/n-cv/xyd3woxm4cx4h3nof1se.jpg"
            name="Nemrod C."
            expertise="Fullstack Developer"
          />

          <RightPanel
            description="About & Projects" 
          />
    </section>
  );
}
