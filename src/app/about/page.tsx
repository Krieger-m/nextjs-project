import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import qs from "qs";

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
  },
});

async function getResponse(url: string, path: string, query: string) {
  const res = await fetch(`${url}${path}${query}`);
  const resJson = await res.json();
  return resJson;
}

export default async function AboutPage() {
  console.log(": executing AboutPage ...");

  const resJson = await getResponse(
    "http://localhost:1337",
    "/api/about?",
    aboutQuery
  );
  const data = resJson.data;

  console.log("aboutQuery: ");
  console.log(aboutQuery);
  console.log("resJson: ");
  console.log(resJson);

  console.log("data : ");
  console.log(data);

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
            src="/assets/Minimalist-image.png"
            alt="professional-image"
            width={270}
            height={400}
            priority
          />
          <br />
          <p>the details ...</p>

          {/* <h3>{data.title}</h3> */}
          <br />
          <Image
            src={`http://localhost:1337${data.blocks[2].file.url}`}
            alt={data.blocks[2].file.alternativeText}
            width={950}
            height={450}
          ></Image>
        </div>
      </main>
    </div>
  );
}
