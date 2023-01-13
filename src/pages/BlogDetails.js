import Menu from "../components/Menu";
import Main from "../components/Main";
import Footer from "../components/Footer";
import client from "../sanity";
import imageUrlBuilder from '@sanity/image-url'
import { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";

const builder = imageUrlBuilder(client)


const BlogDetails = () => {

    const [posts, setPosts] = useState([])
    const [image, setImage] = useState('')
    const {slug} = useParams()

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(()=>{
        const query = `*[slug.current=='${slug}']{_id, _createdAt, cover, title, slug, body}`

        client.fetch(query).then((data) => {
            setPosts(data[0])
            setImage(urlFor(data[0].cover.asset._ref))
        })
    }, [])

    return (
        <>
        {/* Menu Section */}
        <Menu />

        {/* Blog Section */}
        <div className="max-w-screen-xl mx-auto">

            <main className="mt-10">
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
                <div className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))'}}></div>
                {posts != [] && 
                <img alt="" src={image} className="absolute left-0 top-0 w-full h-full z-0 object-cover" style={{height: '100%'}} />}
                <div className="p-4 absolute bottom-0 left-0 z-20">
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight" style={{color: 'white'}}>
                    {posts.title}
                </h2>
                <div className="flex mt-3">
                    {/* <img src="https://randomuser.me/api/portraits/men/97.jpg" alt=""
                    className="h-10 w-10 rounded-full mr-2 object-cover" style={{height: '40px', width: '40px'}} /> */}
                    <div>
                    <p className="font-semibold text-gray-400 text-xs"> {moment(posts._createdAt).format("Do MMM YYYY")}</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                <p className="pb-6">
                    {posts.body}
                </p>
            </div>

            <DiscussionEmbed
                shortname='nuco'
                config={
                    {
                        url: window.location.href,
                        identifier: posts._id,
                        title: posts.title,
                    }
                }
            />
            </main>
        </div>
        {/* <Blog /> */}

        {/* Footer Section */}
        <Footer />
        </>
  );
};

export default BlogDetails;
