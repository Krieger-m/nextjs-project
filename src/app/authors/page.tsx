import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { getResponse } from "@/data/getResponse";
import qs from "qs";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Community Page",
};

const authorsQuery = qs.stringify({
  populate: {
    avatar: {
      populate: "*",
    },
  },
});

export default async function AuthorsPage() {
  console.log(": executing Authors ...");

  const resJson = await getResponse(
    "localhost:1337",
    "api/authors",
    authorsQuery
  );
  const data = resJson.data;
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
          <h1>Authors Page</h1>
          <br />
          <Image
            src="/assets/Inspirational-image.png"
            alt="professional-image"
            width={270}
            height={400}
            priority
            />
          <br />
          <p>the authors ...</p>
          <br />
          {data.map((item: any, index: number) => (
            <div key={index} style={{margin:40}}>
              <h2>{item.name}</h2>
              <br />
              <Image 
                src={`http://localhost:1337${item.avatar.formats.small.url}`}
                alt={item.avatar.alternativeText}
                width={446}
                height={500}
                loading="lazy"
                style={{width:'auto', height:'auto'}}
              />
              <br />
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
