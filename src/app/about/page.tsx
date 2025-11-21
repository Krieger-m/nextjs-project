import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  console.log("executing...");

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
