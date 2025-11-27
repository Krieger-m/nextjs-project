"use client";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import { ImagePicker } from "@/_components/ImagePicker";
import { shareTech } from "@/data/actions";
import { TechFormSubmitButton } from "@/_components/TechFormSubmitButton";
import { useActionState } from "react";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};

export default function ShareTechPage() {
  console.log(": executing Technologies/share ...");

  const [state, formAction] = useActionState(shareTech, undefined);

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
          <header
            style={{
              gap: "3rem",
              width: "90%",
              maxWidth: "75rem",
              color: "#ffffffff",
              fontSize: "1.5rem",
            }}
          >
            <h1>
              Share your <span className={styles.highlight}>favorite tech</span>
            </h1>
            <p>Or any other tech you feel needs sharing!</p>
          </header>
          <main className={styles.main}>
            <form className={styles.form} action={formAction}>
              <div className={styles.row}>
                <p>
                  <label htmlFor="creator">Creator</label>
                  <input type="text" id="creator" name="creator" required />
                </p>
                <p>
                  <label htmlFor="creator_email">Creator email</label>
                  <input
                    type="email"
                    id="creator_email"
                    name="creator_email"
                    required
                  />
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
                <ImagePicker label={"image picker"} name={"image"} />
              </div>
                  // conditionally showing error message depending on state of message
              {state?.message && (
                <h3
                  style={{
                    color: "red",
                    textAlign: "center",
                    margin: "40px auto",
                  }}
                >
                  {state?.message}
                </h3>
              )}
              <p className={styles.actions}>
                <TechFormSubmitButton />
              </p>
            </form>
          </main>
        </div>
      </main>
    </div>
  );
}
