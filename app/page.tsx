import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import data from '@/data/club-info.json';


export default function Home() {
  const corePillars = [
    'Apply classroom concepts to real software for the SLU community.',
    'Build professional habits through collaboration, code review, and ownership.',
    'Grow career readiness with interview prep, modern tooling, and deployment experience.',
  ];
  const eboardMembers = [
    {
      photo: '/eboard/cj.jpeg',
      name: 'CJ Perriello',
      contact: 'Contact coming soon',
      description: 'Founder and President',
    },
    {
      photo: '/eboard/seamus.jpeg',
      name: 'Seamus Burke',
      contact: 'Contact coming soon',
      description: 'Cofounder and Head of Backend Development',
    },
    {
      photo: '/eboard/mj.jpeg',
      name: 'MJ Chaho',
      contact: 'Contact coming soon',
      description: 'Cofounder and Head of Frontend Development',
    },
    
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-32">
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
          Applied Computer Science Club at <span className="text-accent">St. Lawrence University</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          A proposal-driven club focused on real-world software development, technical growth,
          and student-led projects that create practical value on campus.
        </p>
      </section>

      {/* Chud Counsel */}
      <section id="counsel" className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Founders and EBoard</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-8 min-w-max">
            {eboardMembers.map((member) => (
              <article
                key={member.name}
                className="w-[380px] rounded-2xl border border-border bg-surface/45 p-7 shrink-0"
              >
                <div className="mb-5 h-56 rounded-xl border border-accent/30 bg-accent-strong/20 flex items-center justify-center">
                   <img
    src={member.photo}
    alt={`${member.name} headshot`}
    className="h-56 w-full rounded-xl object-cover border border-accent/30"
  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-base text-accent mb-3">{member.contact}</p>
                <p className="text-muted leading-relaxed">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Mission</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-border bg-surface/45 p-6">
              <p className="text-muted leading-relaxed">{pillar}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Tracks */}
      <section id="membership" className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Membership Tracks</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-surface/45 p-8">
            <h3 className="text-2xl font-bold mb-3">General Member</h3>
            <p className="text-muted leading-relaxed">
              Open to all students. Join public meetings on topics like Git, data structures,
              LeetCode strategy, databases, and modern frameworks. No minimum commitment required.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/50 bg-accent-strong/20 p-8">
            <h3 className="text-2xl font-bold mb-3">Builder Member</h3>
            <p className="text-muted leading-relaxed">
              Application-based track for students committed to building semester-long deliverables.
              Builder Members attend weekly progress meetings, own technical scope, and collaborate
              toward production-ready results.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebViOR3DYz9PyTC2NtJsJTz9UWlU6zYuyHnQTCBjVSuwuh-w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-foreground hover:bg-accent-strong transition-colors"
          >
            Apply Here
          </a>
        </div>
      </section>

      {/* Builder Series Projects */}
      <section id="projects" className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Builder Series Projects</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
        <div className="rounded-2xl border border-border bg-surface/45 p-8 text-center">
          <p className="text-2xl font-bold mb-3">Coming Soon</p>
          <p className="text-muted max-w-2xl mx-auto">
            We&apos;re finalizing this semester&apos;s workshops, builder sessions, and speaker events.
            Check back soon for the full calendar.
          </p>
        </div>
      </section>
    </main>
  );
}
