import {useEffect,useState} from 'react';import {Menu,X} from 'lucide-react';import {Btn} from './Section';
const L=['about','skills','projects','journey','education','achievements','contact'],N={journey:'Experience'};
export default function Navbar(){const[s,setS]=useState(false),[o,setO]=useState(false),[a,setA]=useState('');
useEffect(()=>{const f=()=>setS(scrollY>40);addEventListener('scroll',f);const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&setA(x.target.id)),{rootMargin:'-45% 0px -50% 0px'});L.forEach(i=>document.getElementById(i)&&io.observe(document.getElementById(i)));return()=>{removeEventListener('scroll',f);io.disconnect()}},[]);
return<nav className={`fixed left-1/2 top-3 z-50 flex w-[94vw] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-full border border-bd bg-bg/80 px-6 backdrop-blur transition-all ${s?'py-2':'py-4'}`}>
<a href="#top" className="font-extrabold tracking-tight">SACHIN NANVARE</a>
<div className={`${o?'absolute left-0 right-0 top-16 flex flex-col gap-4 rounded-3xl border border-bd bg-bg p-6 text-lg':'hidden'} md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0 md:text-sm`}>{L.map(i=><a key={i} href={'#'+i} onClick={()=>setO(false)} className={`capitalize transition hover:text-fg ${a===i?'text-fg underline decoration-ac underline-offset-8':'text-mut'}`}>{N[i]||i}</a>)}</div>
<div className="hidden md:block"><Btn small href="#contact">Let's Connect →</Btn></div>
<button className="md:hidden" aria-label="Menu" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>}
