"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

export function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState(undefined);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.length ? event.target.files[0] : null;
    if (!file) {
        setPickedImage(undefined);
        return
    };
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as any);
    };

    fileReader.readAsDataURL(file);
  }

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePick(event: any) {
    imageInput.current?.click();
  }

  return (
    <>
      <div style={{ display: "none" }}>
        <label htmlFor={name}>{label}</label>
        <div>
          <input
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
        </div>
      </div>
      <div>
        {!pickedImage && <p>No image picked yet</p>}
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="Image selected by the user"
            height={100}
            width={150}
          />
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={handlePick}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Pick an Image
        </button>
      </div>
    </>
  );
}
