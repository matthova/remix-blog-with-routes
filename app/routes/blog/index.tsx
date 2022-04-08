import { Link } from "@remix-run/react";
import * as blogPosts from "~/blogPosts";

const sortedBlogPosts = Object.values(blogPosts).sort((a, b) => {
  if (a.publishDate == null) {
    return 1;
  }
  if (b.publishDate == null) {
    return -1;
  }
  return new Date(a.publishDate) > new Date(b.publishDate) ? 1 : -1;
});

export default function BlogIndex() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 232px)",
          gap: 16,
        }}
      >
        {sortedBlogPosts.map((blogPost) => (
          <Link key={blogPost.slug} to={`/blog/${blogPost.slug}`}>
            <div
              style={{
                padding: 16,
                background: "#dddddd",
                width: "min-content",
              }}
            >
              <img
                alt="article-hero"
                src={blogPost["og:image"]}
                width={200}
                height={200}
              />
              <h2>{blogPost.title}</h2>
              <p>{blogPost.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
