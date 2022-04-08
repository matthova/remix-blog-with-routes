interface MetaData {
  description: string;
  keywords: string[];
  author?: string;
  title: string;
  image: string;
  twitterCard?: string;
  twitterImageWidth?: string;
  twitterImageHeight?: string;
  publishDate?: Date;
}

export interface MetaDataReturnValue {
  description: string;
  "og:description": string;
  "twitter:description": string;
  keywords: string;
  author: string;
  title: string;
  "og:title": string;
  "og:image": string;
  "twitter:title": string;
  "twitter:card": string;
  "twitter:image:width": string;
  "twitter:image:height": string;
  "twitter:image": string;
  publishDate?: string;
}

const createMetaData = ({
  description,
  keywords,
  author,
  title,
  image,
  twitterCard,
  twitterImageWidth,
  twitterImageHeight,
  publishDate,
}: MetaData): MetaDataReturnValue => {
  return {
    description: description,
    "og:description": description,
    "twitter:description": description,
    keywords: keywords.join(", "),
    author: author ?? "The Hovas",
    title,
    "og:title": title,
    "og:image": image,
    "twitter:title": title,
    "twitter:card": twitterCard ?? "summary_large_image",
    "twitter:image:width": twitterImageWidth ?? "1200",
    "twitter:image:height": twitterImageHeight ?? "630",
    "twitter:image": image,
    ...(publishDate ? { publishDate: publishDate.toISOString() } : {}),
  };
};

export default createMetaData;
