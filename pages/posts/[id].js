import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return { props: { postData } };
}

export async function getStaticPath(){
    const paths = getAllPostsIds();
    return {paths, fallback: false}
}

export default function Post({postData}){
    return (
        <Layout>
            {postData.title}
            <br></br>
            {postData.id}
            <br></br>
            {postData.date}
        </Layout>
    )
}