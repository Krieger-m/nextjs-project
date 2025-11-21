import Link from "next/link";

interface LinkListProps {
  name:string;
  linkCount: number;
}

export function LinkList({ linkCount, name }: LinkListProps) {
  
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
        <Link key={index} href={`/${(name.toLowerCase())}/post-${String(num)}`}>
          {`${name} ${num}`}
        </Link>
      ))}
    </div>
  );
}
