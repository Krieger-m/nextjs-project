import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { ImagePicker } from "@/_components/ImagePicker";


export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};


export default function SharePage() {
  console.log(": executing Technologies/share ...");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
      <header style={{
        gap: '3rem',
        width: '90%',
        maxWidth: '75rem',
        color: '#ffffffff',
        fontSize: '1.5rem',
      }}>
    <h1>
      Share your <span className={styles.highlight}>favorite tech</span>
    </h1>
    <p>Or any other tech you feel needs sharing!</p>
  </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <div className={styles.row}>
            <ImagePicker label={"image picker"} name={"image"}/>
          </div>
          <p className={styles.actions}>
            <button type="submit">Share Tech</button>
          </p>
        </form>
      </main>
        </div>
      </main>
    </div>
  );
}
