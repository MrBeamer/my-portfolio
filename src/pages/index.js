import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A hand is holding a Boxed Water Is Better package underwater"
        src="https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"
      />
    </Layout>
  );
}

export const Head = () => (
  <>
    <Seo title={"Home"}></Seo>
    <meta name="description" content="Hello World" />
  </>
);
