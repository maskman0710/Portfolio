import Link from "next/link";


export default function Header() {
    return(
        <div className="h-screen bg-amber-100">
            <main className="w-full h-full">
                <nav className="w-full border h-10 border-b border-b-amber-300 shadow-2xl flex justify-between">
                    <div className="py-2 text-8 px-2">
                        <h3 className="text-black px-2">Rishi Goyal</h3  >
                    </div>
                    <div className="text-black text-xs py-2.5 ">
                        <Link href="" className="px-2">Home</Link>
                        <Link href="" className="px-2">About</Link>
                        <Link href="" className="px-2">Journey</Link>
                        <Link href="" className="px-2">Projects</Link>
                        <Link href="" className="px-2">Skills</Link>
                        <Link href="" className="px-2">Contact</Link>
                   </div>
                    <div className="text-xs px-3 py-1.5 flex">
                        <button className="text-white bg-green-950 rounded-3xl h-full px-3 hover:bg-green-100 hover:text-black">Let's Connect ↗</button>
                    </div>
                </nav>
                 <div className="h-1/12 w-1/2 px-2 py-3">
                 <div className="p-1 w-1/3 h-7 ">
                    <ul className="list-disc list-inside bg-linear-to-r from-orange-900 to-yellow-500 w-full h-full py-0.5 px-2 rounded-2xl">
                        <li className="text-black bold text-xs">Mern Stack Developer</li>
                    </ul></div>
                    
                </div>
                <div className="border border-red-500 h-1/2 flex justify-between">
                    <div className="h-full w-1/2 border-2 border-green-500 ">
                        <h1 className="text-black">Building Ideas into Products</h1>
                    </div>
                    <div className="h-full w-1/2 border-2 border-purple-400">

                    </div>
                </div>
            </main>
        </div>
    )
}