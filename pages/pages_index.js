import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState({ header: "", description: "" });

  useEffect(() => {
    // جلب البيانات من ملف JSON
    fetch("/data/content.json")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h1>{content.header}</h1>
      <p>{content.description}</p>
    </div>
  );
}