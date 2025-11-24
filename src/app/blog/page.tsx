import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { start } from "repl";
import Link from "next/link";
import { LinkList } from "@/_components/LinkList";
import { getResponse } from "@/data/getResponse";
import qs from "qs";



export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Blogs Page",
};


const blogsQuery = qs.stringify({
  populate: {
    blocks: {
      populate: "*",
    },
    populate: "*",
  },
});



export default async function BlogsPage() {
  console.log(": executing BlogsPage ...");

  const resJson = await getResponse("http://localhost:1337",
    "/api/articles?",blogsQuery)
  const data = resJson.data; 

  console.log('data: ')
  console.log(data)

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
          <h1>Blogs Page</h1>
          <br />
          <p>the posts ...</p>
          <br/>
          {data.map((entry:any, index:number)=>(
            <Link key={index} href={`/blog/${entry.slug}`}>{entry.title}</Link>
          ))}
        </div>
      </main>
    </div>
  );
}
