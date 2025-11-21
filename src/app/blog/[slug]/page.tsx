import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Individual Blog Page",
};


export default function IndividualBlogPage() {
  console.log(": executing IndividualBlogPage ...");

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
          <h1>Individual Blog Page</h1>
          <br />
          <p>the post ...</p>
        </div>
      </main>
    </div>
  );
}
