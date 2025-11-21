import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { start } from "repl";
import Link from "next/link";
import { LinkList } from "@/_components/LinkList";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Blogs Page",
};


export default function BlogsPage() {
  console.log(": executing BlogsPage ...");

  
  

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
          <LinkList linkCount={10}/>

        </div>
      </main>
    </div>
  );
}
