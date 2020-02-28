import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <SEO title="Home" />
    <h1 id="About">About</h1>
    <h4>
    <h6>
    <h6>
    </h6><p>I’m Stefan a Software Developer and recent graduate of the Computer Science program at SUNY New Paltz.</p>
<p>
Most recently I was an Intern at Cornerstone Services Inc. where I built a workflow management program to be used in a mailing warehouse.
After completion me and the 2 other developers presented our project at the SUNY New Paltz Computer Science Senior Expo where we won first place
out of 15 other projects.</p>
<p>
Before Cornerstone I worked at SUNY Ulster as a Helpdesk Technician where I learned about the challenges and benefits of working in a client facing position.
</p>
<p>
Currently I am looking for a junior developer position in NYC.
 </p>
    </h6>
    </h4>
    <h1 id="Education">Education</h1>
    <h4>
    <h6>SUNY NEW PALTZ -- New Paltz, NY<br/>
    B.S. in Computer Science, May 2019<br/>
    3.5 GPA, Deans list, Graduated Cum Laude.
    </h6>
    </h4>
    <h1 id="Projects">Projects</h1>
    <h4>Chess game, AI player built with MinMax Algorithm (Java)<a href="https://github.com/Stefunga/ChessAI" class="fa fa-github fa"></a>
    <h6>This was my first attempt to build something tangible. I had been playing a lot of chess with my coworkers and was interested in the dynamics
    of decision making and strategy in chess, which ultimately led me to look into chess and game playing algorithms.</h6>
    </h4>
    <h4>Table widget for Kivy language (Python)<a href="https://github.com/Stefunga/Kivy-Table-Widget" class="fa fa-github fa"></a>
    <h6>Widget I am working on to be submited to Kivy open source library. The widget is to be used to arange list of data in a table form
    with options to change size, color and add an optional header.</h6>
    </h4>
    <h4>Fractal Generator (Java)<a href="https://github.com/Stefunga/Fractal" class="fa fa-github fa"></a>
    <h6>Project to generate and display different fractal patterns. Program allows the user to display progressivly deepening fractals. The program includes a button to increase
     and decrease fractal depth.</h6>
    </h4>
    <h4>Employee side database interface (Python)<a href="https://github.com/mike67hull/Paints-R-Us" class="fa fa-github fa"></a>
    <h6>Program written in Python programming language. Utilizes SQLite to allow employees to manipulate database. Program includes invoice creation, order submission, searches, and custom queries.</h6>
    </h4>
    <h1 id="Experience">Experience</h1>
    <h4>
    <h6></h6>
    Full Stack Software Development Intern
    <h6>
    </h6>
    <h6>Internship at local direct mailing company. Me and two other interns were tasked with
    creating a python application to be used by managers and warehouse employees.
    The software functions as a task management program that allows the admin to track length of
    tasks and give employees easier access to what they need to work on. Program was built using Python, MySQL, and Kivy. Final project won first place at SUNY
     New Paltz Computer Science Senior Expo</h6>
    </h4>
    <h4>
    <h6></h6>
    Helpdesk Technician
    <h6>
    </h6>
    <h6>Helpdesk position at local college. This role was a formal introduction to IT work and the different problems technicians have to deal with.
    My job was to take calls from faculty and students, then address their concerns or push it down the line of command if i wasn't sure of a solution.
    I gained a strong grasp of working with others to resolve issues and communicating with staff that did not understand the complexity of a problem.
    </h6>
    </h4>
  </Layout>
)

export default IndexPage
