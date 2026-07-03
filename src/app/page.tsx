"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center">
          Exterior AI
        </h1>

        <p className="text-center text-gray-500 mt-2">
          AIで外構を診断する
        </p>

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
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              🤖 AI診断する
            </button>
          </>
        )}

      </div>
    </main>
  );
}