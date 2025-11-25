'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideShowProps {
  images: any[];
}

export function SlideShow({ images }: SlideShowProps) {

    
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex((prevIndex)=> prevIndex < images.length-1 ? prevIndex+1 : 0);
        }, 5000);
        return ()=> clearInterval(interval);
    }, []);

    console.log(currentImageIndex)
  
    return (
    <>
        {/* {images.map((image:any, index)=>(
            <Image
                key={index}
                src={`http://localhost:1337${image.url}`}
                alt={image.alternativeText}
                width={640}
                height={400}

            />
        ))} */}
        <Image
            src={`http://localhost:1337${images[currentImageIndex].url}`}
            alt={images[currentImageIndex].alternativeText}
            width={640}
            height={400}

        />
        <div>

        </div>
    </>
  );
}
