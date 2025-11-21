import Image from "next/image";
import styles from "./styles/page.module.css";

export default function HomePage() {

  console.log(': executing HomePage ...');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <div style={{display:'flex',flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
            <Image
              src="/full-stack-logo.png"
              alt="full stack logo"
              width={400}
              height={400}
              priority
              
            />
            <h1>Welcome!</h1>
            <br/>
            <p>let's get started</p> 
          </div>       
      </main>
    </div>
  );
}
