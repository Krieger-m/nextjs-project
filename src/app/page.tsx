import Image from "next/image";
import styles from "./styles/page.module.css";
import { Metadata } from "next";
import { FeaturedContent } from "../_components/FeaturedContent";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Home Page",
};

export default function HomePage() {

  console.log(': executing HomePage ...');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FeaturedContent />
      </main>
    </div>
  );
}
