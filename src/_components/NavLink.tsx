"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  target: string;
  content: string;
}
export function NavLink({ target, content }: NavLinkProps) {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <Link
        href={target}
        style={
          path.split("/")[1] === target.replace("/", "")
            ? { fontWeight: "bold", color: "#68b7dd" }
            : { fontWeight: "normal" }
        }
      >
        {content}
      </Link>
    </>
  );
}
