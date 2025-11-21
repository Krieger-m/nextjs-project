import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Community Page",
};


export default function TechnologiesPage() {
  console.log(": executing Community ...");

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
          <h1>Community Page</h1>
          <br />
          <Image
            src="/assets/Inspirational-image.png"
            alt="professional-image"
            width={270}
            height={400}
            priority
          />
          <br />
          <p>the community ...</p>
        </div>
      </main>
    </div>
  );
}
