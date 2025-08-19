import React, { useState } from "react";
import LoadingDots from "../components/LoadingDots";

const AiCreative = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("https://kreative-ai-backend.onrender.com/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log("Response from live backend:", data);

      if (response.ok) {
        setResult(data.result || "No result returned");
      } else {
        setError(data.error || "Server error");
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      setError("Unable to reach server");
    } finally {
      setLoading(false);
    }
  };

  return (


    <div id="creative" className="max-w-xl mx-auto p-4">
      <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 mt-20 md:mt-30 lg:mt-40">
            Unlock Your Web Ideas
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Let our <span className="text-purple-500">AI Wizard</span> generate brand names, web addresses, colour paletes and anything else, <span className="text-blue-500 font-medium animate-pulse">just ask!</span>
          </p>
        </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type something creative..."
          className="p-3 border rounded-md resize-none bg-white/90 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 placeholder-gray-400"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className=" text-white py-2 cursor-pointer rounded bg-gradient-to-r from-purple-800 to-purple-800 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          {loading ? <LoadingDots /> : "✨ Generate Idea"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {result && (
        <textarea
          value={result}
          readOnly
          className="bg-purple-50 mt-4 w-full p-3 border rounded-md bg-gray-100 resize-none text-black"
          rows={6}
        />
      )}
    </div>
 
  );
};

export default AiCreative;