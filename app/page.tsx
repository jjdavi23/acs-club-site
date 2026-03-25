import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import data from '@/data/club-info.json';

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-32">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic">
          BUILD. <span className="text-accent">SHIP.</span> REPEAT.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The Applied Computer Science Club. We focus on real-world engineering, 
          quantitative finance, and building tools that matter.
        </p>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Project Showcase</h2>
          <div className="h-[1px] flex-1 bg-slate-800" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}