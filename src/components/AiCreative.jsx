import React, { useState } from "react";

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
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

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
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type something creative..."
          className="p-3 border rounded-md resize-none"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {result && (
        <textarea
          value={result}
          readOnly
          className="mt-4 w-full p-3 border rounded-md bg-gray-100 resize-none text-black"
          rows={6}
        />
      )}
    </div>
  );
};

export default AiCreative;