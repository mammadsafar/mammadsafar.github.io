import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div><span className="font-bold">Mohammad Safarzadeh</span> ,</div>
                <div className="font-normal ml-1"><span className="text-pink-600 font-bold">Backend Developer!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a 2<sup>rd</sup> year <span className=" font-medium">computer Science student</span> pursuing my Bachelor Degree from <a href="https://www.birjand.ac.ir/" rel="noreferrer" target="_blank">Birjand Uni, southern Khorasan</a>. And I was in a <a href="https://maktabsharif.ir/" rel="noreferrer" target="_blank">Maktab Sharif</a> programming boot camp for 6 months</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time searching on the Web, Game or watching movies.</li>
                <li className=" mt-3 list-star"> And I also have interest in Python & Network!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Maktab Sahrif Programming Boot Camp 
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021</div>
                    <div className=" text-sm md:text-base">Learning coding and searching</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Computer Engineering<sup>Bachelor Degree</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2023</div>
                    <div className=" text-sm md:text-base">Programming, And university courses</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    const myStyle = {
        "padding-right": "60px",

      };
    return (
        
        <>

            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">back-end development, Node.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Databases</div>
            </div>

            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/3">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="vivek node.js" className="m-1" />

                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="vivek c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="vivek python" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="vivek HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="vivek SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/3">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2" >

                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="vivek jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="vivek Bootstrap css" className="m-1 rounded-pill border_mmd"/>
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/3">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" loading="lazy" alt="vivek git" className="m-1 border_mmd" />

                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <b> Skills</b>  
                </li>
                
                <ul className=" ">

                <li className=" " style={{"display": "flex"}}>
                    <p><b class="padding_mmd"style={{ "color": "rgb(0, 128, 0)"}}>Node.js:</b></p>
                    <p> Modular Programming, npm, template engine, EJS, HTTP Server, Session-based authentication<br></br>
                        Modules: Mongoose, Morgan, Multe, Express-generator<br></br> ExpressJS: Building web applicacions and
                        RESTful APIs</p>
                </li>

                <li className=" " style={{"display": "flex"}}>
                    <p><b class="padding_mmd"style={{ "color": "rgb(255, 251, 40)"}}>Javascript:</b></p>
                    <p> Functional Programming, DOM, AJAX, JQuery, ES6 </p>
                </li>
                <li className=" " style={{"display": "flex"}}>
                    <p><b class="padding_mmd"style={{ "color": "rgb(253, 88, 11)"}}>HTML5, CSS:</b></p>
                    <p> Floating, Grid Layout, Responsive Design, Flexbox, Bootstrap4-5, Preprocessor, Sass
                    </p>
                </li>

                <p><b class="padding_mmd"style={{ "color": "rgb(72, 224, 3"}}>other skills:</b></p>

                <li className="flex_mmd ">
                <li className=" flex_mmd">
                    <p><b class="padding_mmd"style={{ "color": "rgb(0, 128, 79)"}}>Database:</b></p>
                    <p> SQL, NoSQL, ERD, MySQL, MongoDB</p>
                </li>
                <li className=" flex_mmd">
                    <p><b class="padding_mmd"style={{ "color": "rgb(207, 211, 8)"}}>Linux:</b></p>
                    <p>Package, permission,user and file management, Process monitoring. Basic network configuration, Shell
                        scripting. Encryption methods, SSH </p>
                </li>
                <li className=" flex_mmd">
                    <p><b class="padding_mmd"style={{ "color": "rgb(36, 231, 222)"}}>Network:</b></p>
                    <p> TCP-IP Model, HTTP Protocol</p>
                </li>
                <li className=" flex_mmd">
                    <p><b class="padding_mmd"style={{ "color": "rgb(18, 115, 194)"}}>CI/CD:</b></p>
                    <p> Docker</p>
                </li>

                </li>
                <li className=" flex_mmd">
                    <p><b class="padding_mmd"style={{ "color": "rgb(247, 140, 0)"}}>Tools:</b></p>
                    <p> Postman, MySQL Workbench, Wireshark, Robo 3T</p>
                </li>
                </ul>
            </ul>
            
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Blog",
            date: "May 2021",
            link: "https://github.com/Mammadsafar/Weblog",
            description: [
                "A weblog for read and write article.",
            ],
            domains: ["Node.js","express","multer","bcrypt", "mongoose", "ejs" ,"javascript","bootstrap","jquery"]
        },
        {
            name: "online shopping",
            date: "Jan 2021",
            link: "https://github.com/Mammadsafar/store",
            description: [
                "you can edit this project.",
            ],
            domains: ["Node.js","express", "ejs" ,"javascript","bootstrap","jquery"]
        },
        {
            name: "Todo List",
            date: "May 2021",
            link: "https://github.com/Mammadsafar/todoList",
            description: [
                "You can write your task and done or trash that.",
            ],
            domains: ["Node.js","express","bcrypt", "mongoose", "ejs" ,"javascript","bootstrap","jquery"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "Node.js": "green-600",
        "express": "blue-500",
        "bcrypt": "yellow-400",
        "mongoose": "green-400",
        "ejs": "green-500",
        "bootstrap": "purple-500",
        "jquery": "blue-600",

    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Mohammad-Safarzadeh-Resume.pdf" title="Mohammad Safarzadeh patel resume" frameBorder="0"></iframe>
    )
}