import {useEffect,useState} from 'react';import {Section,Chip,Btn} from './Section';import ProjectCard from './ProjectCard';import {projects,GH} from '../data';
const H=({children})=><h4 className="mb-2 mt-8 font-mono text-xs tracking-widest text-ac">{children}</h4>;
export default function Projects(){const[o,setO]=useState(null),p=projects[o];
useEffect(()=>{document.body.style.overflow=p?'hidden':'';const k=e=>e.key==='Escape'&&setO(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[p]);
return<Section id="projects" eyebrow="Selected work" title="Projects built to learn, solve and ship.">{projects.map((x,i)=><ProjectCard key={x.n} p={x} i={i} onOpen={()=>setO(i)}/>)}
{p&&<div role="dialog" aria-modal="true" className="fixed inset-0 z-[80] overflow-auto bg-bg px-[5vw] pb-16 pt-24"><div className="fixed right-[5vw] top-5"><Btn small onClick={()=>setO(null)}>Close ✕</Btn></div>
<div className="mx-auto max-w-3xl"><span className="font-mono text-xs text-ac">CASE STUDY {p.n}</span><h2 className="my-3 text-4xl font-bold tracking-tighter md:text-6xl">{p.t}</h2>
<H>01 — OVERVIEW</H><p className="text-mut">{p.d}</p><H>02 — PROBLEM</H><p className="text-mut">Students and learners need practical tools in one place; this project addresses that need as described in the overview.</p>
<H>03 — SOLUTION</H><p className="text-mut">A deployed full-stack web application with the features listed below.</p><H>04 — ARCHITECTURE</H><p className="text-mut">{p.arch}</p>
<H>05 — KEY FEATURES</H><ul className="list-disc pl-5 text-mut">{p.f.map(f=><li key={f}>{f}</li>)}</ul><H>06 — TECHNOLOGY</H><div className="flex flex-wrap gap-2">{p.tech.map(t=><Chip key={t}>{t}</Chip>)}</div>
<H>07 — CHALLENGES</H><p className="text-mut">Add your own notes here.</p><H>08 — WHAT I LEARNED</H><p className="text-mut">Add your own notes here.</p>
<H>09 — LIVE DEMO</H><Btn primary small href={p.live}>Live Demo ↗</Btn><H>10 — GITHUB</H><Btn small href={GH}>GitHub ↗</Btn></div></div>}</Section>}
