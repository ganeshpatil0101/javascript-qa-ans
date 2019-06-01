import React from 'react'
import Layout from '../components/Layout'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            Javascript Questions Answers
          </p>
          <h2>
          <Link to="docs/javascript/basic-que">Javascript</Link> | 
          <Link to="docs/Angular/basic-que"> Angular</Link> | 
          <Link to="docs/Typescript/basic"> Typescript</Link> | 
          <Link to="docs/Html5/basic-que"> HTML5</Link> | 
           CSS3 </h2>
          <br/>
          {/* <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Get Started</Button>
          </Link> */}
          
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage