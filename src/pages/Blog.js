import Menu from "../components/Menu";
import Main from "../components/Main";
import Footer from "../components/Footer";
import client from "../sanity";
import imageUrlBuilder from '@sanity/image-url'
import { useEffect, useState } from "react";
import moment from "moment";

const IMG_URL = 'https://osb35udj.sanity.io/';
const builder = imageUrlBuilder(client)


const BlogPage = () => {

    const [posts, setPosts] = useState([])

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(()=>{
        const query = "*[_type=='post']{_id, _createdAt, cover, title, slug}"

        client.fetch(query).then((data) => {
            setPosts(data)
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
                <div className="inline-flex mt-6 rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                &larr; Previous
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Next &rarr;
                </button>
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
