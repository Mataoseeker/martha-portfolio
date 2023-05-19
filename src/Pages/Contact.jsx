import { Link } from "react-router-dom";
const Contact = () => {
    return ( 
        <div>
            <div>
            <nav className="flex bg-slate-900 p-4">
                          <br />
                                <Link to="/" className="md:text-xl text-xl mt-2 text-slate-200 ml-4 md:ml-36 md:mr-36 font-serif">Martha Ochuko O.</Link>

                                <Link to="/about" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 ml-6 ">About</Link>

                                <Link to="/projects" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3">Projects</Link>

                                <Link to="/resume" className="text-xl   mt-2 text-slate-200 font-serif md:mr-10 mr-3">Resume</Link>

                                <Link to="/contact" className="text-xl text-slate-200 mt-2 font-serif md:mr-10 mr-3 hidden md:block">Contact</Link>  
                        </nav>   

                        <div>
                            <div className="">
                <h1 className="text-6xl text-slate-200 text-center font-serif mt-20 ">Contact</h1>
                <p className="md:text-2xl p-6 text-center text-lg text-slate-200 font-sans mt-10">Say Hi...</p>
                <p className="md:text-4xl text-center text-lg text-slate-200 underline font-sans mt-6">
                    <a href="mailto:marthaosika8@gmail.com">marthaosika8@gmail.com</a>
                </p>
                <p className="md:text-4xl text-center text-lg text-slate-200 font-sans mt-10 ">
                    <a href="tel:+2348030694524">+2348030 6945 24</a>
                </p>
                                </div>
                        </div>
            </div>
        </div>
     );
}
 
export default Contact;