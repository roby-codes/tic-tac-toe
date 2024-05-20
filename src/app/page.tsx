"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [text, setText] = useState("post loading");
  const [id, setId] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://dummyjson.com/products/${id}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setText(data.description);
      });

    return () => controller.abort("");
  }, [id]);

  return (
    <main>
      <section className="min-h-[100dvh] flex justify-center items-center">
        <div className="container flex flex-col items-center gap-4">
          <p>{text}</p>
          <button
            className="bg-black hover:bg-black/50 text-white p-2"
            onClick={() => setId((id) => id + 1)}
          >
            change post
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
