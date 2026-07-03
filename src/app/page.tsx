import ImageUpload from "@/components/ImageUpload";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center">
          Exterior AI
        </h1>

        <p className="text-center text-gray-500 mt-2">
          AIで外構を診断する
        </p>

        <ImageUpload />
      </div>
    </main>
  );
}