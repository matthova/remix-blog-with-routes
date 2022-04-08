import createMetaData from "~/createMetaData";

export const meta = createMetaData({
  description: "Blog posts number three",
  keywords: ["awesome", "blog post three"],
  title: "Blog post three",
  image: "https://placekitten.com/600/600",
  publishDate: new Date("2022-01-03"),
});

export default function BlogPostThree() {
  return <div>This is Blog Post Number Three</div>;
}
