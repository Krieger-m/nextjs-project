import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

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
          <NavLink target="/" content="Home"></NavLink>
          <span> | </span>
          <NavLink target="/blog" content="Blog"></NavLink>
          <span> | </span>
          <NavLink target="/technologies" content="Tech"></NavLink>
          <span> | </span>
          <NavLink target="/authors" content="Authors"></NavLink>
          <span> | </span>
          <NavLink target="/about" content="About"></NavLink>
        </div>
      </div>
      <div style={{height: 2, width: '100%', backgroundColor: 'white'}}/>
    </>
  );
};
