import fs from "node:fs";
import sql from "better-sqlite3";

import slugify from "slugify";
import xss from "xss";
import path from "node:path";

const db = sql("technologies-test.db");

export interface TechProps {
  slug: string;
  title: string;
  image: any;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function getTech(): Promise<TechProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.prepare("SELECT * FROM technologies").all() as TechProps[];
}

export async function getSpecificTech(slug: string): Promise<TechProps> {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare("SELECT * FROM technologies WHERE slug = ?")
    .get(slug) as TechProps;
}

export async function saveTech(tech: TechProps) {
  tech.slug = slugify(tech.title, { lower: true });
  tech.instructions = xss(tech.instructions);

  const extension = tech.image.name.split(".").pop();
  const fileName = `${tech.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await tech.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed!");
    }
  });

  tech.image = `/images/${fileName}`;

  // Save metadata in DB
  db.prepare(`
    INSERT INTO technologies 
     (slug, title, image, summary, instructions, creator, creator_email) 
     VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `).run(tech);
}


/*
  - template data haskell entry for the share page
{
  title: 'Haskell',
  slug: 'haskell',
  image: '/images/haskell.png',
  summary:
    'A purely functional programming language with strong static typing and lazy evaluation, widely used in academia and industry for reliable, concise code.',
  instructions: `
    1. Install Haskell:
       Download and install the Glasgow Haskell Compiler (GHC) and Stack tool.

    2. Learn syntax:
       Practice with functions, pattern matching, and type declarations.

    3. Explore functional concepts:
       Understand immutability, higher-order functions, and monads.

    4. Build projects:
       Use Stack or Cabal to create and manage Haskell applications.
  `,
  creator: 'Simon Peyton Jones',
  creator_email: 'simonpj@example.com',
},

*/