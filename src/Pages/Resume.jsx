import { Link } from "react-router-dom";
const Resume = () => {
    return ( 
        <div>
            <div>
            <nav className="flex bg-slate-900 p-4">
                          <br />
                                <Link to="/" className="md:text-xl text-xl mt-2 text-slate-200 ml-4 md:ml-36 md:mr-36 font-serif">Martha Ochuko O.</Link>

                                <Link to="/about" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 ml-6 ">About</Link>

                                <Link to="/projects" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3">Projects</Link>

                                <Link to="/resume" className="text-xl   mt-2 text-slate-200 font-serif md:mr-10 mr-3 hidden md:block">Resume</Link>

                                <Link to="/contact" className="text-xl text-slate-200 mt-2 font-serif md:mr-10 mr-3">Contact</Link>  
            </nav>   
            </div>

            <div className="flex justify-center">
                        <a href="https://docs.google.com/document/d/1Ai2PZqLlLnU_wG2HzsfudEwwgJTYHH87WW6bJQbmwGY/edit?usp=sharing" className="flex justify-center border mt-32 px-10 py-4 border-slate-900 rounded-lg text-slate-200 font-bold">Link to Resume</a>
            </div>

            <Link to="/contact">
                <div className="flex justify-center">
                    <div className="flex mt-32">
                        <p className="text-2xl text-slate-300">Contact</p>
                            <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>

            </Link>
                        
        </div>
     );
}
 
export default Resume;