import { Link } from "react-router-dom";

const Home = () => {
    
    return ( 
        <div className="home">
             <div>
                <div>
                    <div>
                        <nav className="flex bg-slate-900 p-4">
                          <br />
                                <Link to="/" className="md:text-xl text-xl mt-2 text-slate-200 ml-4 md:ml-36 md:mr-36 hidden md:block font-serif">Martha Ochuko O.</Link>

                                <Link to="/about" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 ml-6 ">About</Link>

                                <Link to="/projects" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3">Projects</Link>

                                <Link to="/resume" className="text-xl   mt-2 text-slate-200 font-serif md:mr-10 mr-3">Resume</Link>

                                <Link to="/contact" className="text-xl text-slate-200 mt-2 font-serif md:mr-10 mr-3">Contact</Link>  
                        </nav>   

                        
                        <div className="text-center md:mt-20 mt-10 font-serif p-6 text-slate-300">
                            <h1 className="md:text-6xl text-4xl font-bold">Hey There! 👋🏾</h1>
                            <h2 className="md:text-4xl text-2xl mt-10 ">I'm Martha Ochuko O. A Front-end Developer, <br /> who is passionate about building beautiful <br /> and responsive websites.
                            </h2>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <div className="flex mt-10">
                                    <div className=" h-10 w-10 flex items-center font-mono justify-center md:text-xl">
                                        <a href="https://github.com/Mataoseeker" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">GitHub</a>
                                        <a href="https://www.linkedin.com/in/marthaosika/" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">LinkedIn</a>
                                        <a href="https://twitter.com/martha_ochuko" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">Twitter</a>
                                        <a href="https://dev.to/mataoseeker" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">Blog</a>
                                    </div>
                                    </div>
                                    </div>
                                    <Link to="/about">
                                        <div className="flex justify-center">
                                            <div className="flex mt-20">
                                                <p className="text-2xl text-slate-300">About</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                                    </Link>
                        </div>
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default Home ;