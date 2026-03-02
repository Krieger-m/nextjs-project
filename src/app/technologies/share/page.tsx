// "use client";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { ShareComponent } from "@/_components/ShareComponent";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};

export default function ShareTechPage() {
  console.log(": executing Technologies/share ...");


  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <ShareComponent/>
      </main>
    </div>
  );
}
