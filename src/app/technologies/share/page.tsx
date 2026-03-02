// "use client";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { ImagePicker } from "@/_components/ImagePicker";
import { shareTech } from "@/data/actions";
import { TechFormSubmitButton } from "@/_components/TechFormSubmitButton";
import { useActionState } from "react";
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
