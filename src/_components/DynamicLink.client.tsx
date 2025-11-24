"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DynamicLinkTestProps {
  content: string;
  link: string;
}

export function DynamicLink({ 
    content, 
    link,
}: DynamicLinkTestProps) {
  const path = usePathname();

  return (
    <>
      <Link href={`${path}/${link}`}>{content}</Link>
    </>
  );
}
