import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};


export default function TechnologiesPage() {
  console.log(": executing Technologies/share ...");

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
          <h1>Technologies/share Page</h1>
          <br />
          <p>share the tech ...</p>
        </div>
      </main>
    </div>
  );
}
