import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { DynamicLink } from "@/_components/DynamicLink.client";
import { getSpecificTech } from "@/data/tech";
import { RichText } from "@/_components/RichText";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const technology = await getSpecificTech((await params).slug);

  if (!technology) return notFound();

  return {
    title: technology.title,
    description: technology.summary,
  };
}

export default async function IndividualTechPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(": executing IndividualTechPage ...");

  const technology = await getSpecificTech((await params).slug);
  // console.log((await params).slug);
  // console.log(technology);

  if (!technology) return notFound();

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
          <h1>{technology.title}</h1>
          <br />
          <div
            style={{
              width: 600,
              backgroundImage: `url(${technology.image})`,
              backgroundSize: "cover", // makes it fill the div
              backgroundPosition: "center", // centers the image
              backgroundRepeat: "no-repeat", // prevents tiling
              height: 350,
            }}
          ></div>
          <br />
          <p>
            Made by{" "}
            <a href={`mailto:${technology.creator_email}`}>
              {technology.creator}
            </a>
          </p>
          <br />
          <p>{technology.summary}</p>
          <br />
          <br />
          <br />
          <h2>Instructions</h2>
          <RichText body={technology.instructions} />

          <Link href="/technologies/share">
            👆🏻 click here to share your own ...
          </Link>
          <br />
        </div>
      </main>
    </div>
  );
}
