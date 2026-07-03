"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <>
      <label className="block mt-8 cursor-pointer">
        <div className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-center transition">
          📷 写真を選択
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImage}
        />
      </label>

      {image && (
        <>
          <img
            src={image}
            alt="preview"
            className="mt-6 rounded-xl"
          />

          <button
            onClick={() => {
             setLoading(true);

              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
           >
            {loading ? "診断中..." : "🤖 AI診断する"}
          </button>
        </>
      )}
    </>
  );
}