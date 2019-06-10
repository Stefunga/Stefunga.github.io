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
    <p>Welcome to your new Gatsby site.</p>
    <h1 id="Education">Education</h1>
    <p>Welcome to your new Gatsby site.</p>
    <h1 id="Projects">Projects</h1>
    <h4>Chess game, AI player built with MinMax Algorithm (Java)<a href="https://github.com/Stefunga/ChessAI" class="fa fa-github fa-2x"></a></h4>
    <p>Now go build something great.</p>
    <h4>Fractal Generator (Java)<a href="https://github.com/Stefunga/ChessAI" class="fa fa-github fa-2x"></a></h4>
    <h4>Employee side database interface (Python)<a href="https://github.com/mike67hull/Paints-R-Us" class="fa fa-github fa-2x"></a></h4>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
