import solver from "../images/Probsolver.png"
import Image from "next/image"
import learner from "../images/learner.png"
import continu from "../images/continue.png"
import opp from "../images/opportunity.png"
export default function About(){
    return (
        <section id="about" className="min-h scroll-mt-16 bg-linear-to-l from-[#f1ebd6] to-[#f8f7f4] px-5 pb-12  sm:px-8 md:px-12 lg:px-16">
           <div className="w-full h-10 mt-3 border-t border-gray-300 py-2 ">
            <span className="text-gray-500 font-mono pl-2 py-2">01.</span>
            <span className="text-gray-500 font-mono  ">About me</span>
            <div className="border border-gray-400 w-1/50 ml-2"></div>
           </div>
        <div className="max-w-4xl h-full grid grid-cols-1 sm:flex ">
            <div className="w-full sm:border-r border-gray-300 sm:ml-2 sm:mr-2">
            <h2 className="text-3xl font-bold bg-linear-to-r from-emerald-900 to-[#4ee23b] bg-clip-text text-transparent sm:text-4xl font-['Playfair_Display'] flex justify-center ">About Me</h2>
                <p className=" mt-2 max-w-xl leading-7 sm:text-base text-gray-600">
                   I’m Rishi, a full-stack developer (MERN) with 1.5 years of experience in software testing. Spending my days finding bugs taught me to think about edge cases, failure points, and how real users break things, and I bring that mindset into the apps I build.</p>

<p className="mt-1 max-w-xl leading-7 sm:text-base text-gray-600 ">
I work with React, Redux Toolkit, Tailwind CSS, Node.js, Express, and MongoDB, and I’ve implemented JWT-based authentication. My projects include a blog platform with authentication and full CRUD, along with an expense tracker, a currency converter, and a few smaller tools.
</p>
        <div className=" sm:w-1/3 rounded-lg bg-linear-to-r from-green-900 to-green-950 shadow-2xl hover:bg-green-950/10 h-12 mt-5 mb-4 flex justify-center items-center">
            <a
               href="https://www.linkedin.com/in/rishi-goyal-960641208"
                target = "_blank"
                rel="noopener noreferrer"
              className="text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Know more about me <span className="ml-2">↗</span>
            </a>
        </div>
            </div>
            <div className=" rounded-4xl sm:w-90 sm:ml-2 max-h-full grid grid-rows-4 " >
                <div className=" w-full h-full                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   sm:w-75 mx-auto">
                <div className="flex mt-3 gap-1 py-1 sm:mt-5 border border-gray-300 shadow-2xl bg-gray-100 z-20 rounded-lg hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-400">
                        <Image
                        src={solver}
                        alt="Problem solving"
                        className="w-10 h-10"
                        />
                     <div className=" grid grid-cols">
                        <h4 className="text-black font-mono sm:text-sm">Problem solver</h4>
                        <div className="mt-0.2">
                            <p className="text-gray-600 text-xs font-['Playfair_Display']">Breaking complex problems into simple solutions</p>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="h-full w-full  sm:w-75 mx-auto ">
                    <div className="flex mt-3 gap-3 py-1 sm:py-0 sm:mt-5 border border-gray-300 shadow-2xl bg-gray-100 z-20 rounded-lg  hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-400">
                        <Image
                        src={learner}
                        alt="Learning"                                                                                                  
                        className="w-8 h-8 ml-2 mt-1 sm:mt-2"
                        />
                     <div className=" grid grid-cols">                                                                                                                   
                        <h4 className="text-black font-mono sm:text-sm">Quick Learner</h4>
                        <div className="mt-0.2">
                            <p className="text-gray-600 text-xs font-['Playfair_Display']">Turning complex concepts into functional realities, fast.</p>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="h-full w-full sm:w-75 mx-auto ">
                    <div className="flex py-1 sm:py-0 mt-3 gap-3 sm:mt-5 border border-gray-300 shadow-2xl bg-gray-100 z-20 rounded-lg  hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-400">
                        <Image
                        src={continu}
                        alt="Continuous Learning"
                        className="w-8 h-8 mt-1 sm:mt-2 ml-2"
                        />
                     <div className=" grid grid-cols">
                        <h4 className="text-black font-mono sm:text-sm">Continuous Learner</h4>
                        <div className="mt-0.5">
                            <p className="text-gray-600 text-xs font-['Playfair_Display']">Staying updated with the latest trends and technologies</p>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="h-full w-full sm:w-75 mx-auto">
                    <div className="flex mt-3 gap-3 sm:mt-5 border border-gray-300 shadow-2xl bg-gray-100 z-20 rounded-lg  hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-400">
                        <Image
                        src={opp}
                        alt="Opportunity"
                        className="w-8 h-8 ml-2 mt-1 sm:mt-2"
                        />
                     <div className=" grid grid-cols">
                        <h4 className="text-black font-mono sm:text-sm">Opportunity Seeker</h4>
                        <div className="mt-0.2">
                            <p className="text-gray-600 text-xs font-['Playfair_Display']">Identifying and seizing new opportunities for growth and development.</p>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}