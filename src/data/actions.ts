"use server";

import { redirect } from "next/navigation";
import { saveTech, TechProps } from "./tech";
import { revalidatePath } from "next/cache";

type State = { message: string };


function isInvalidInput(text: FormDataEntryValue | null) {
  return !text || String(text).trim() === "";
}
export async function shareTech(
  prevState: State | undefined,
  formData: FormData
): Promise<State | undefined> {
  const tech = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

      // validating inputs and returning error message if not valid
  if (
    !tech.title ||
    !tech.summary ||
    !tech.instructions ||
    !tech.creator ||
    !tech.creator_email ||
    !String(tech.creator_email).includes("@")
  ) {
    return { message: "Invalid input!" };
  }

  await saveTech(tech as TechProps);
    // revalidation in production mode cause pages are only built once (at build-time) and then cached
  revalidatePath('/technologies', 'layout');  
  redirect("/technologies");
}
