import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import qs from "qs";
import { getResponse } from "@/data/getResponse";
import { RichText } from "@/_components/RichText";
import { Quote } from "@/_components/Quote";
import { SlideShow } from "@/_components/SlideShow";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Individual Blog Page",
};

interface IndividualBlogPageProps{
  params: Promise<{ slug: string }>;
}

const individualBlogQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        populate: "*",
      },
      cover: {
        populate: "*",

      },
    },
  });

export default async function IndividualBlogPage({
  params,
}: IndividualBlogPageProps) {
  console.log(": executing IndividualBlogPage ...");
  
  const resJson = await getResponse(
    "http://localhost:1337",
    "/api/articles?",
    `${individualBlogQuery((await params).slug)}`
  );
  
  // console.log('resJson: ')
  // console.log(resJson.data[0])
  
  // console.log('media-block: ')
  // console.log(resJson.data[0].cover.url)

  console.log(resJson.data[0].blocks[4].files)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{resJson.data[0].title}</h1>
          <br />
          <Image
            src={`http://localhost:1337${resJson.data[0].cover.url}`}
            alt={resJson.data[0].cover.alternativeText}
            width={600}
            height={370}
            priority
          />
          <br />
          <p>{resJson.data[0].description}</p>
          <br/>
          <RichText body={resJson.data[0].blocks[0].body}/>
          <br/>
          <Quote title={resJson.data[0].blocks[1].title} body={resJson.data[0].blocks[1].body}/>
          <br/>
          <RichText body={resJson.data[0].blocks[3].body}/>
          <br/>
          <SlideShow images={resJson.data[0].blocks[4].files}/>
        </div>
      </main>
    </div>
  );
}
