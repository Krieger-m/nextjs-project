'use server';

import { saveTech, TechProps } from "./tech";

export async function shareTech(formData: FormData) {
    "use server";

    const tech = {
      // id: formData.get('id'),
      // slug: formData.get('slug'),
      title: formData.get("title"),
      image: formData.get("image"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      creator: formData.get("creator"),
      creator_email: formData.get("creator_email"),
    };
    console.log("tech:");
    console.log(tech);
    await saveTech(tech as TechProps)
  }