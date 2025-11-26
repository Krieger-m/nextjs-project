import sql from "better-sqlite3";

const db = sql("technologies-test.db");

interface TechProps {
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function getTech():Promise<TechProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.prepare("SELECT * FROM technologies").all() as TechProps[];
}

export async function getSpecificTech(slug: string):Promise<TechProps> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM technologies WHERE slug = ?").get(slug) as TechProps;
}

export async function saveTech(tech:TechProps){
  
}