import Image from "next/image";
import styles from "../styles/page.module.css";

export default function AboutPage() {
  console.log(": executing AboutPage ...");

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
          <h1>About</h1>
          <br />
          <p>the details ...</p>
        </div>
      </main>
    </div>
  );
}
