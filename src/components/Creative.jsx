import React, { useState } from "react";

const AIInput = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting prompt:", prompt);

        if (!prompt.trim()) {
            console.log("Prompt is empty");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            console.log("Raw response:", response);

            let data;
            try {
                data = await response.json();
                console.log("Parsed JSON:", data);
            } catch (err) {
                console.error("Failed to parse JSON:", err);
                setError("Server returned invalid JSON");
                return;
            }

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
                <div className="mt-4 p-3 bg-gray-100 rounded-md whitespace-pre-wrap">
                    {result}
                </div>
            )}
            <pre className="mt-4 text-sm bg-yellow-100 p-2">
                Debug result: {JSON.stringify(result)}
            </pre>
        </div>
    );
};

export default AIInput;