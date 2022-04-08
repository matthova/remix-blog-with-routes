import createMetaData from "~/createMetaData";

export const meta = createMetaData({
  description: "Blog posts number two",
  keywords: ["awesome", "blog post two"],
  title: "Blog post two",
  image: "https://placekitten.com/500/500",
  publishDate: new Date("2022-01-02"),
});

export default function BlogPostTwo() {
  return <div>This is Blog Post Number Two</div>;
}
