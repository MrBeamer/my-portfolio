import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import Seo from "../../components/seo";

function Blog({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        excerpt
        id
      }
    }
  }
`;

export default Blog;

export const Head = () => (
  <>
    <Seo title="My Blog Posts"></Seo>
    <meta name="description" content="Hello World" />
  </>
);
