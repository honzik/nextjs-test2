import { Client } from "../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Layout from "../../components/Layout";

import resolver from "../../sm-resolver.js";

const Page = (props) => (
  <Layout menu={props.menu}>
    <SliceZone {...props} resolver={resolver} />
  </Layout>
)

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'page',
  apiParams({ params }) {
    return {
      uid: params.uid,
      lang: params.lang
    }
  },
  notFound: true
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  formatPath: (prismicDocument) => {    
    return {
      params: {
        uid: prismicDocument.uid,
        lang: prismicDocument.lang
      }
    }
  }  
});

export default Page;
