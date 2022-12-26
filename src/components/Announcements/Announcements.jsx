import { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { PortableText } from "@portabletext/react";

const Announcements = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "announcement"]{
       title,
       body 
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div className=" space-y-4 mt-4 pb-14">
      {posts.map((post) => (
        <div class="lg:w-2/5  w-11/12 md:w-3/4 m-auto  p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#e1bc29]">
              {post.title}
            </h5>
          </a>
          <div className="text-white prose">
            <PortableText value={post.body} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
