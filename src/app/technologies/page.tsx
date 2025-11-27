import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { LinkList } from "@/_components/LinkList";
import { getTech } from "@/data/tech";
import { NavLink } from "@/_components/NavLink";
import { TechCards } from "@/_components/TechCards";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Tecnologies Page",
};

async function TechLoading() {
  const tech = await getTech();
  return <TechCards data={tech} />;
}

export default async function TechnologiesPage() {
  console.log(": executing Technologies ...");

  // const techData = await getTech();
  // console.log(...techData);

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
          <h1>Technologies Page</h1>
          <br />
          <Image
            src="/assets/Professional-img.png"
            alt="professional-image"
            width={270}
            height={400}
            // fill
            priority
          />
          <br />
          <p>choose your favorite tech and take a look ...</p>
          <br />
          {/* <TechCards data={techData}/> */}
          <Suspense
              fallback={
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 40,
                        animation: "pulse 1.0s infinite",
                      }}
                    >
                      <h1>loading tech ...</h1>
                      <style>
                        {`
                              @keyframes pulse {
                                0% {
                                  transform: scale(1);
                                  opacity: 1;
                                }
                                50% {
                                  transform: scale(1.05);
                                  opacity: 0.7;
                                }
                                100% {
                                  transform: scale(1);
                                  opacity: 1;
                                }
                              }
                            `}
                      </style>
                    </div>
                  </>
              }
          >
            <TechLoading />
          </Suspense>
          <br />
          <Link href="/technologies/share">
            👆🏻 click here to share your own ...
          </Link>
        </div>
      </main>
    </div>
  );
}
