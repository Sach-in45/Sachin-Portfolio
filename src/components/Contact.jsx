import { Btn } from "./Section";
import { GH, LI, EMAIL } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-[3vw] rounded-[36px] bg-fg px-[5vw] py-24 text-center text-bg"
    >
      <span className="mb-5 block font-mono text-xs uppercase tracking-[.15em] text-ac">
        Contact
      </span>

      <h2 className="text-5xl font-bold leading-none tracking-tighter md:text-8xl">
        Let's build something meaningful.
      </h2>

      <p className="mx-auto my-8 max-w-xl opacity-75">
        I'm open to software engineering opportunities, internships,
        collaborations and interesting technical projects.
      </p>

      <div className="flex flex-wrap justify-center gap-3 [&_a]:border-bg">
        <Btn
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Let's%20Connect`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch →
        </Btn>
        <Btn href={GH} target="_blank" rel="noopener noreferrer">
          View GitHub ↗
        </Btn>
        <Btn href={LI} target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn ↗
        </Btn>
      </div>
    </section>
  );
}
