import Image from "next/image";
import Link from "next/link";

export function TechCards({ data }: { data: any[] }) {
    // const data:any[] = {...techData};
  return (
    <div>
      {...data.map((item: any, index: number) => (
        <div
          key={index}
          style={{
            border: "2px solid white",
            borderRadius: 10,
            padding: 20,
            marginBottom: 40,
          }}
        >
          <Link
            href={`/technologies/${item.slug}`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              src={item.image}
              alt={`tecPic-${item.slug}`}
              width={250}
              height={150}
            />
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
