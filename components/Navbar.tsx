import Link from 'next/link';
import { Terminal, GitBranch } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Terminal className="text-accent w-6 h-6" />
          <span>APPLIED <span className="text-accent">CS</span></span>
        </Link>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="https://github.com" className="hover:text-white transition">
            <GitBranch className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
