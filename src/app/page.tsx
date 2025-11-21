import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  console.log('executing...');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Image
            src="/full-stack-logo.png"
            alt="full stack logo"
            width={200}
            height={200}
            priority
            
          />
        </div>
        
      </main>
    </div>
  );
}
