import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div style={{ padding: 20, backgroundColor: '#2a2a2cff' }}>
        <div style={{ display: "flex", alignItems: 'center'}}>
          <Link href={"/"}>
            <Image
              src="/full-stack-logo.png"
              alt="full stack logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          <h1>Header</h1>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
          <span> | </span>
          <Link href={"/blog"}> Blog</Link>
          <span> | </span>
          <Link href={"/technologies"}> Tech</Link>
          <span> | </span>
          <Link href={"/community"}> Community</Link>
          <span> | </span>
          <Link href={"/about"}> About</Link>
        </div>
      </div>
      <div style={{height: 2, width: '100%', backgroundColor: 'white'}}/>
    </>
  );
};
