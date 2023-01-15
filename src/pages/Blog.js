import Menu from "../components/Menu";
import Main from "../components/Main";
import Footer from "../components/Footer";
import client from "../sanity";
import imageUrlBuilder from '@sanity/image-url'
import { useEffect, useState } from "react";
import moment from "moment";
import Pagination from "react-sanity-pagination";

const IMG_URL = 'https://osb35udj.sanity.io/';
const builder = imageUrlBuilder(client)

const itemsToSend = [];
const BlogPage = () => {

    const postsPerPage = 10;
    const [posts, setPosts] = useState([])

    function urlFor(source) {
        return builder.image(source)
    }


    const action = (page, range, items) => {
        console.log(page, range, items);
        // Update State
        setPosts(items);
      };

    useEffect(()=>{
        const query = "*[_type=='post'] | order(_createdAt) {_id, _createdAt, cover, title, slug}"

        client.fetch(query).then((data) => {
            // setPosts(data)
            itemsToSend.push(...data)
            console.log(data)
        })
    }, [])

    return (
        <>
        {/* Menu Section */}
        <Menu />

        {/* Blog Section */}
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto bg-white">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                        {posts.map((item)=>
                            <div key={item._id} className="lg:flex">
                                <a href={'/blog/'+item.slug.current}>
                                    <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={urlFor(item.cover.asset._ref)} alt="" />
                                </a>

                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href={'/blog/'+item.slug.current} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        {item.title}
                                    </a>
                                    
                                    <span className="text-sm text-gray-500 dark:text-gray-300">{moment(item._createdAt).format("Do MMM YYYY")}</span>
                                </div>
                            </div>
                        )}
                    </div>

                {/* Pagination */}
                    <div className="mt-4">
                        <Pagination
                            nextButton={true}
                            prevButton={true}
                            nextButtonLabel={"➡️"}
                            prevButtonLabel={"⬅️"}
                            items={itemsToSend}
                            action={action}
                            postsPerPage={postsPerPage}
                            className="inline-flex mt-6 rounded-md shadow-sm" 
                        />
                    </div>
                </div>


            </section>
        {/* <Blog /> */}

        {/* Footer Section */}
        <Footer />
        </>
  );
};

export default BlogPage;
