import { Link } from "react-router-dom";
import mypic from "./Images/image.jpeg"
const About = () => {  
    return ( 
        <div className="about"> 
           <nav className="flex bg-slate-900 p-4">
                          <br />
                                <Link to="/" className="md:text-xl text-xl mt-2 text-slate-200 ml-4 md:ml-36 md:mr-36 font-serif">Martha Ochuko O.</Link>

                                <Link to="/about" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 ml-6 hidden md:block">About</Link>

                                <Link to="/projects" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3">Projects</Link>

                                <Link to="/resume" className="text-xl   mt-2 text-slate-200 font-serif md:mr-10 mr-3">Resume</Link>

                                <Link to="/contact" className="text-xl text-slate-200 mt-2 font-serif md:mr-10 mr-3">Contact</Link>  
                        </nav>   

                <div className="">
                <h1 className="text-4xl md:text-6xl text-slate-200 font-serif text-center md:mt-20 mt-10 ">About Me</h1>
                 <div className="md:flex">
                     <img src= {mypic}  className="md:ml-20 hidden md:block ml-36 w-80 m-5  border rounded-full " alt="my face"/>
                     <p className="text-2xl md:text-2xl  text-slate-300 font-serif md:mt-20 p-6  md:text-justify text-center ">
                        Hi! I am Martha Ochuko O.  A Frontend Developer with a passion for building  beautiful and responsive websites. <br /> I am also a technical writer and a YouTuber   with a keen eye for details and a love for minimalism. <br /> <br /> 
                     <div>
                     I graduated from the University of Benin, studied Computer Engineering.<br /> I strive to be a better developer by writing code, practice by working on projects  <br /> and collaborate on projects. <br /> I am currently looking for an internship or an entry level role as a Frontend Developer.
                     </div>
                     </p>
                    </div>
                     <h1 className="text-2xl md:text-4xl text-slate-200 font-serif text-center md:mt-20 mt-10">Languages & Tools </h1>

                        <div className="mt-8 ">
                        <div className="">
                        <p className="text-slate-300 text-center text-2xl">Here are a list of tools that i have worked with:</p>
                        <p className="text-slate-300 text-center col-span-3  card  md:grid md:mt-10 grid-cols-3 mt-8 text-2xl">     
                                
                                {/* <img src= {require ("./images/html.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/>
                                
                                <img src= {require ("./images/css.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/>
                               
                                <img src= {require ("./images/js.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/>

                                <img src= {require ("./images/react.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/>

                                <img src= {require ("./images/tailwind.jpg")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/>

                                <img src= {require ("./images/git.png")}  className="ml-36 w-20 m-5 md:w-20 border rounded-full " alt="my face"/> */}

                        </p>
                        </div>
                        </div>
                        </div>



                        <Link to="/projects">
                                        <div className="flex justify-center">
                                            <div className="flex mt-14">
                                                <p className="text-2xl text-slate-300">Projects</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                        </Link>
                        
        </div>
     );
}
 
export default About;