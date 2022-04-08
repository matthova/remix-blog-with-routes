import { Link, useLoaderData } from "@remix-run/react";

interface LoaderData {
  blogPosts: string[];
}
export const loader = (): LoaderData => {
  return {
    // This should be an array of all files inside of the directory `~/app/routes/blog`
    // Ideally, we could also import data from those files
    // What's the preferred way to get this list of blog posts?
    blogPosts: ["blog-post-one", "blog-post-two", "blog-post-three"],
  };
};

export default function BlogIndex() {
  const { blogPosts } = useLoaderData<LoaderData>();

  return (
    <div>
      <div>Here are all the blog posts:</div>
      {blogPosts.map((blogPost) => (
        <div key={blogPost}>
          <Link to={`/blog/${blogPost}`}>{blogPost}</Link>
        </div>
      ))}
    </div>
  );
}
