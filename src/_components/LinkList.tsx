import Link from "next/link";

interface LinkListProps {
  linkCount: number;
}

export function LinkList({ linkCount }: LinkListProps) {
  
  const arr: number[] = [...Array(linkCount)].map((_, i) => i + 1);

  return (
    <div
      style={{
        width: "500",
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
      }}
    >
      {[...arr].map((num, index) => (
        <Link key={index} href={`/blog/${String(num)}`}>
          {`Blog ${num}`}
        </Link>
      ))}
    </div>
  );
}
