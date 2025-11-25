'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps{
    target: string;
    content: string;
}
export function NavLink({target,content}: NavLinkProps){
    const path = usePathname();
    return(

        <>
            <Link href={target} style={path.startsWith(target) ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>{content}</Link>
        </>
    );
}