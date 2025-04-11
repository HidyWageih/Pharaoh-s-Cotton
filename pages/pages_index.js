import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [content, setContent] = useState({ header: "", description: "" });

  useEffect(() => {
    fetch("/api/get-content")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch(console.error);
  }, []);

  return (
    <div className="marble-bg min-h-screen p-8">
      <Head>
        <title>Pharaoh's Cotton | الفخامة المصرية</title>
        <meta name="description" content="ملاءات سرير فاخرة من القطن المصري" />
      </Head>

      <main className="container mx-auto">
        <h1 className="gold-text text-4xl font-bold mb-6 text-center">
          {content.header || "مرحباً بكم في موقع Pharaoh's Cotton"}
        </h1>
        
        <p className="text-gray-300 text-xl max-w-2xl mx-auto text-center leading-relaxed">
          {content.description || "اكتشف ملاءات السرير الفاخرة المصنوعة من القطن المصري."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {['وادي الملوك', 'الأهرامات', 'المعابد الفرعونية'].map((collection) => (
            <div 
              key={collection}
              className="bg-dark-500 p-6 rounded-lg gold-border hover:shadow-gold transition-all"
            >
              <h3 className="gold-text text-2xl font-semibold mb-3">{collection}</h3>
              <p className="text-gray-400">مجموعة حصرية مستوحاة من التراث المصري</p>
              <button className="mt-4 px-4 py-2 bg-dark-900 gold-text gold-border rounded hover:bg-opacity-50 transition">
                استكشف المجموعة
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
