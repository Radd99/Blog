import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1
          style={{
            fontSize: "2rem",
            marginTop: "2rem",
            marginBottom: 0,
            textAlign: "center",
          }}
        >
          About{" "}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#777",
            marginTop: "0.2rem",
            textAlign: "center",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          Hey there, you can read this if you wanna know about me or this blog
        </p>
        <div
          style={{
            width: "85%",
            margin: "auto",
            marginTop: "2.5rem",
            fontSize: "1rem",
            marginBottom: "3rem",
          }}
        >
          <p>
            Hello, I am Sriram Goparaju, a self-taught full-stack developer. I
            am based in Hyderabad, India and built this blog mainly for two
            reasons.
          </p>
          <p>
            I wanted to challenge myself to build and maintain a blog which will
            help me improve my development skills and get better. As I mentioned
            earlier I am a self taught programmer and for a developer like me,
            projects like these help a lot in the learning process. This is the
            first reason.
          </p>
          <p>
            Secondly, I am a beginner level competitive programmer and love to
            learn new and interesting algorithms. I have tried to find a blog on
            the internet which can help beginners in learning basic algorithms
            and problem solving techniques which play an integral role for the
            success of any competitive programmer. Hence, I am trying to help
            other programmers learn basic algorithms and start on their journey
            of competitive programming. I will try to post explanations for most
            of the algorithms that I come across.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default about
