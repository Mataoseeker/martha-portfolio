import { Link } from "react-router-dom";

const pic = new URL( "./images/img1.PNG", import.meta.url).href;
const pic2 = new URL( "./images/img4.PNG", import.meta.url).href;
const pic3 = new URL( "./images/img5.PNG", import.meta.url).href;
const pic4 = new URL( "./images/img6.PNG", import.meta.url).href;
const pic5 = new URL( "./images/img7.PNG", import.meta.url).href;
const pic6 = new URL( "./images/img2.PNG", import.meta.url).href;
const counter = new URL( "./images/counter.PNG", import.meta.url).href;
const note = new URL( "./images/note.PNG", import.meta.url).href;
const quiz = new URL( "./images/quiz.PNG", import.meta.url).href;

const Projects = () => {
    return ( 
        <div className="projects">
         <nav className="flex bg-slate-900 p-4">
                          <br />
                                <Link to="/" className="md:text-xl text-xl mt-2 text-slate-200 ml-4 md:ml-36 md:mr-36 font-serif">Martha Ochuko O.</Link>

                                <Link to="/about" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 ml-6 ">About</Link>

                                <Link to="/projects" className="text-xl  mt-2 text-slate-200 font-serif md:mr-10 mr-3 hidden md:block">Projects</Link>

                                <Link to="/resume" className="text-xl   mt-2 text-slate-200 font-serif md:mr-10 mr-3">Resume</Link>

                                <Link to="/contact" className="text-xl text-slate-200 mt-2 font-serif md:mr-10 mr-3">Contact</Link>  
                        </nav>   
            
           <main className="px-16 py-6 md:col-span-3">
            <h1 className="text-4xl md:text-6xl text-slate-200 font-serif text-center md:mt-20 mt-10 ">Projects</h1>

           <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-3 gap-10 md:h-20 h-16">

        <div className=" border card border-slate-900 rounded-lg hover:shadow-lg">
           <img src={pic} alt="examination" className="w-auto md:h-72 rounded-t-lg object-cover" />
         
            <div className="m-4 text-center  font-serif  text-white">
                <span className="font-bold text-xl "> Altschool React Examination </span>
            <span className="block  text-lg">A simple React website that implements Router, Nested Routes, Context Api...
            </span>
            <span className="text-lg text-gray-300">React</span>
            <div className="m-6">
            <a href="https://altschool-react-examination.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Altschool_React_Examination" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
           <img src={pic2} alt="recipe" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-white">
                <span className="font-bold text-xl "> Nigho Food Recipes </span>
            <span className="block  text-lg">A simple website that contains different food Recipes.
            </span>
            <span className="text-sm text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">Tailwindcss</button>
            </span>
            <div className="m-6">
            <a href="https://nighofoods.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/nighofoods_webpage" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic3} alt="excuse-app" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-white">
                <span className="font-bold text-xl "> An Excuse App </span>
            <span className="block  text-lg">A simple webpage that uses an API to fetch excuses
            for different occasions. 
            </span>
            <span className="text-sm text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://excuse-app-01.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Excuse-App" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic4} alt="to-do-list" className="w-full h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-white">
                <span className="font-bold text-xl ">  To Do List App </span>
            <span className="block  text-lg">A simple webpage that allows users input different tasks for the day.
            </span>
            <span className="text-sm text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://task-app-list.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/to-do-list" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
            
        </div>


        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
            <img src={pic5} alt="my-portfolio" className="w-full md:h-72 object-cover rounded-t-lg" />
            
            <div className="m-4 text-center font-serif text-white">
                 <span className="font-bold text-xl "> My Portfolio Website </span>
             <span className="block  text-lg">My Portfolio website that contains details about me <br /> and my projects so far.
             </span>
             <span className="text-sm text-gray-300 m-2">
                 <button className="m-3">React</button>
                 <button className="m-3">JavaScript</button>
                 <button className="m-3">Vite</button>
                 <button className="m-3">Tailwindcss</button>
             </span>
             <div className="m-6">
             <a href="https://martha-ochuko-osika.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
             <a href="https://github.com/Mataoseeker/Martha-Ochuko-Osika" className="md:m-6 m-2 md:text-xl">GitHub</a>
             </div>
             </div>  
            </div>
        
            <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
            <img src={pic6} alt="sign in" className="w-full md:h-72 object-cover rounded-t-lg" />
            
            <div className="m-4 text-center font-serif text-white">
                 <span className="font-bold text-xl "> Sign In / Sign Up Page </span>
             <span className="block  text-lg">  
             </span>
             <span className="text-sm text-gray-300 m-2">
                 <button className="m-3">HTML</button>
                 <button className="m-3">CSS</button>
                 <button className="m-3">JavaScript</button>
             </span>
             <div className="m-6">
             <a href="https://login-signupp-page.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
             <a href="https://github.com/Mataoseeker/Weekly-coding-challenge-1.git" className="md:m-6 m-2 md:text-xl">GitHub</a>
             </div>
             </div>  
            </div>

            <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
           <img src={counter} alt="recipe" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-white">
                <span className="font-bold text-xl "> Counter App </span>
            <span className="block  text-lg">A simple counter App that increments,
decrements, resets and you can also set a value
for the counter.
            </span>
            <span className="text-sm text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">Vue</button>
                
            </span>
            <div className="m-6">
            <a href="https://martha-counter-app.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/vue-counter-exam" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
        </div>
        
        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
           <img src={note} alt="recipe" className="w-full md:h-72 object-cover  rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-white">
                <span className="font-bold text-xl "> Note App </span>
            <span className="block  text-lg">A simple Note App that takes account of things to do
            </span>
            <span className="text-sm text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">Vue</button>
                
            </span>
            <div className="m-6">
            <a href="https://pen-notes.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Note-App" className="md:m-6 m-2 md:text-xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
            <img src={quiz} alt="recipe" className="w-full md:h-72 object-cover  rounded-t-lg" />
            
            <div className="m-4 text-center font-serif text-white">
                 <span className="font-bold text-xl "> Quiz App </span>
             <span className="block  text-lg">A simple Quiz App that asks questions about me and displays the score at the end. It also indicates whether you are right or wrong after each answer chosen.
             </span>
             <span className="text-sm text-gray-300 m-2">
                 <button className="m-3">HTML</button>
                 <button className="m-3">CSS</button>
                 <button className="m-3">Vue</button>
                 
             </span>
             <div className="m-6">
             <a href="https://martha-quiz-app.netlify.app/" className="md:m-6 m-2 md:text-xl">Live Link</a>
             <a href="https://github.com/Mataoseeker/Quiz-App" className="md:m-6 m-2 md:text-xl">GitHub</a>
             </div>
             </div>
             
         </div>
 

        </div>
           </main>

                                    {/* <Link to="/resume">
                                        <div className="flex justify-center">
                                            <div className="flex mt-14">
                                                <p className="text-2xl text-slate-300">Resume</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                                    </Link> */}

        </div>
     );
}
 
export default Projects;