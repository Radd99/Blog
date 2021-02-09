import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1
        style={{
          fontSize: "1.8rem",
          margin: "0rem 2rem 2rem",
        }}
      >
        About{" "}
      </h1>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 2rem",
        }}
      >
        Hello, I am Sriram Goparaju, a self-taught full-stack developer. I am
        based in Hyderabad, India and built this blog mainly for two reasons.
      </p>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 2rem",
        }}
      >
        I wanted to challenge myself to build and maintain a blog which will
        help me improve my development skills and get better. As I mentioned
        earlier I am a self taught programmer and for a developer like me,
        projects like these help a lot in the learning process. This is the
        first reason.
      </p>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 2rem",
        }}
      >
        Secondly, I am a beginner level competitive programmer and love to learn
        new and interesting algorithms. I have tried to find a blog on the
        internet which can help beginners in learning basic algorithms and
        problem solving techniques which play an integral role for the success
        of any competitive programmer. Hence, I am trying to help other
        programmers learn basic algorithms and start on their journey of
        competitive programming. I will try to post explanations for most of the
        algorithms that I come across.
      </p>
    </Layout>
  )
}

export default about
