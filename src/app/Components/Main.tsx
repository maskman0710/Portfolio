import Image from "next/image";
import profile from "../images/image.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import mail from "../images/mail.png"

export default function Main() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-16 bg-[#f8f7f4] px-5 pb-12 pt-24 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Developer badge */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-800/20 bg-white/70 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-green-700" />
          <span className="text-xs font-semibold text-gray-800 sm:text-sm">
            MERN Stack Developer
          </span>
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-8 lg:gap-16">
        
        {/* Left: Text content */}
        <div className="w-full md:w-1/2">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Building Ideas into
            <span className="block bg-linear-to-r from-[#05470e] to-[#78936b] bg-clip-text text-transparent">
              Products.
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-gray-600 sm:text-base">
            Hi, I’m Rishi, a full-stack developer who builds with the MERN
            stack. I enjoy turning ideas into complete, working products,
            from the database and API to a clean, responsive frontend.
          </p>

          <p className="mt-3 max-w-xl leading-7 text-gray-600 sm:text-base">
            I build in public and share my progress on GitHub and Twitter/X.
            I’m looking for a full-stack role where I can keep learning,
            ship real features, and grow as an engineer.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-linear-to-r from-[#03420c] to-[#0c2903] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              My Work <span className="ml-2">↗</span>
            </a>

            <a
              href="/CV.pdf"
              download
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:border-green-800 hover:bg-green-50"
            >
              Download my Resume <span className="ml-2">↓</span>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 sm:items-center">
           <a
           href="https://github.com/maskman0710"
            target = "_blank"
            rel="noopener noreferrer">
          <Image 
          src={github}
          alt="github"
          className="h-6 w-6"
          
          />
            

           </a>
           <a
           href="https://www.linkedin.com/in/rishi-goyal-960641208"
            target = "_blank"
            rel="noopener noreferrer">
          <Image 
          src={linkedin}
          alt="linkedin"
          className="h-6 w-6"
          
          />
            

           </a>
           <a
           href="https://x.com/RishiGoyal0710"
            target = "_blank"
            rel="noopener noreferrer">
          <Image 
          src={twitter}
          alt="twitter"
          className="h-6 w-6"
          
          />
            

           </a>
           <a
           href="mailto:rishigprofessional@gmail.com"
            target = "_blank"
            rel="noopener noreferrer">
          <Image 
          src={mail}
          alt="mail"
          className="h-6 w-6"
          
          />
            

           </a>
          </div>

          {/* Small supporting detail */}
          <div className="mt-8 border-t border-gray-300 pt-4">
            <p className="text-xs leading-6 text-gray-500 sm:text-sm">
              Focused on building useful products with clean UI and reliable
              backend systems.
            </p>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[100px] border-4 border-white shadow-xl sm:w-72 md:w-full md:max-w-[340px] lg:max-w-[390px]">
            <Image
              src={profile}
              alt="Rishi Goyal - MERN Stack Developer"
              fill
              sizes="(max-width: 767px) 288px, (max-width: 1023px) 45vw, 390px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}