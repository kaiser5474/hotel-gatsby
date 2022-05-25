import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Helmet from "react-helmet";
import "./layout.css"
import { createGlobalStyle } from "styled-components";
import UseSeo from '../hooks/use-seo';

const layout = props => {

  const seo = UseSeo();
  const {siteName, fallbackSeo: {description, title}} = seo;
  //console.log(seo);
  const GlobalStyle = createGlobalStyle`
  body {
      //background-color: red;
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: black
  }
`
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
      </Helmet>
      {/* <GlobalStyle> */}
        <Header />
        {props.children}
        <Footer title={title}/>
      {/* </GlobalStyle> */}
    </>
  )
}

export default layout
