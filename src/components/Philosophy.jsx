import {Reveal} from './Section';
const W='Learn → Build → Break → Debug → Improve → Ship → '.repeat(2);
export default()=><section aria-label="Development philosophy"><div className="overflow-hidden whitespace-nowrap border-y border-bd py-8" aria-hidden="true"><div className="mq inline-block text-5xl font-bold tracking-tighter md:text-8xl">{W}{W}</div></div>
<div className="mx-auto max-w-[1400px] px-[5vw] py-16"><Reveal><p className="max-w-4xl text-2xl leading-snug tracking-tight text-mut md:text-4xl">I believe the fastest way to become a better engineer is to continuously build, understand failures, and improve through real projects.</p></Reveal></div></section>
