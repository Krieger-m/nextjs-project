import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { LinkList } from "@/_components/LinkList";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};

export default function TechnologiesPage() {
  console.log(": executing Technologies ...");

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
          <h1>Technologies Page</h1>
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
          <br />
        <LinkList name="Technologies" linkCount={5}/>
         
        </div>
      </main>
    </div>
  );
}
