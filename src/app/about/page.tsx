import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import qs from "qs";
import { Quote } from "@/_components/Quote";
import { RichText } from "@/_components/RichText";
import { getResponse } from "@/data/getResponse";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "About Page",
};

/*
/api/about?populate[media][fields][0]=url&populate[media][fields][1]=alternativeText
*/

const aboutQuery = qs.stringify({
  populate: {
    blocks: {
      populate: "*",
    },
    // populate: "*",
  },
});



export default async function AboutPage() {
  console.log(": executing AboutPage ...");

  const resJson = await getResponse(
    "localhost:1337",
    "api/about",
    aboutQuery
  );
  const data = resJson.data;


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
          <h1>About</h1>
          <br />
          <Image
            src={`http://localhost:1337${data.blocks[0].file.url}`}
            alt={data.blocks[0].file.alternativeText}
            width={270}
            height={400}
            priority
          />
          <br />
          <Quote {...data.blocks[1]}/>
          <RichText {...data.blocks[2]}/>
          {/* <h3>{data.title}</h3> */}
          <br />
          <Image
            src={`http://localhost:1337${data.blocks[3].file.url}`}
            alt={data.blocks[3].file.alternativeText}
            width={950}
            height={450}
          ></Image>
        </div>
      </main>
    </div>
  );
}
