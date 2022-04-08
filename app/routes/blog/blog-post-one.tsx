import createMetaData from "~/createMetaData";

export const meta = createMetaData({
  description: "Blog posts number one",
  keywords: ["awesome", "blog post one"],
  title: "Blog post one",
  image: "https://placekitten.com/400/400",
  publishDate: new Date("2022-01-01"),
});

export default function BlogPostOne() {
  return <div>This is Blog Post Number One</div>;
}
