import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Individual Tech Page",
};


export default function IndividualBlogPage() {
  console.log(": executing IndividualTechPage ...");

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
          <h1>Individual Tech Page</h1>
          <br />
          <Image
            src="/assets/Professional-img.png"
            alt="professional-image"
            width={270}
            height={400}
            priority
          />
          <br />
          <p>the tech ...</p>
        </div>
      </main>
    </div>
  );
}
