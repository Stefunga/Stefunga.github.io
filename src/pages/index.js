import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <SEO title="Home" />
    <h1 id="About">About</h1>
    <h4>
    <h6><p>Recent Computer Science graduate eager to begin my career in the exciting field of software development. Well versed in C.S. fundamentals and Object Oriented Programming. First place Winner at SUNY New Paltz Computer Science Senior Expo for presentation of workflow optimization internship project. Strongest programming languages include Java and Python, both of which I have proven experience in with both projects and internship. Experience in IT setting as Helpdesk consultant. </p>
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
    <h4>Fractal Generator (Java)<a href="https://github.com/Stefunga/ChessAI" class="fa fa-github fa"></a>
    <h6>Project to generate and display different fractal patterns. Program allows the user to select different types and display progressivly deepening fractals. The program includes a button to increase and decrease fractal depth.</h6>
    </h4>
    <h4>Employee side database interface (Python)<a href="https://github.com/mike67hull/Paints-R-Us" class="fa fa-github fa"></a>
    <h6>Program written in Python programming language. Utilizes SQLite to allow employees to manipulate database. Program includes invoice creation, order submission, searches, and custom queries.</h6>
    </h4>
    <h1 id="Experience">Experience</h1>
    <h4>Full Stack Software Development Intern
    <h6>Internship at local direct mailing company. Me and two other interns were tasked with
    creating a python application to be used by managers and warehouse employees.
    The software functions as a task management program that allows the admin to track length of
    tasks and give employees easier access to what they need to work on. Program was built using Python, MySQL. and Kivy. Final project won first place at SUNY New Paltz Computer Science Senior Expo</h6>
    </h4>
    <h4>Helpdesk Technician
    <h6>•	Imaged both Macintosh and Windows computers for mass deployment across the campus.
•	Worked within a small team to resolve larger issues that required planning and problem solving.
•	Wrote tickets for the campus IT ticketing system, resolved and closed issues.
    </h6>
    </h4>
  </Layout>
)

export default IndexPage
