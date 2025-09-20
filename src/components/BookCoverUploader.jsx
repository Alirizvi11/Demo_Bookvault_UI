import { useState } from "react";

export default function BookCoverUploader() {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");

  const handlePreview = () => {
    if (!coverUrl.trim()) return;
    setPreview(coverUrl);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !coverUrl.trim()) {
      setStatus("⚠️ Title and cover URL required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/update-cover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, cover_url: coverUrl }),
      });

      if (res.ok) {
        setStatus("✅ Cover updated successfully.");
        setTitle("");
        setCoverUrl("");
        setPreview("");
      } else {
        setStatus("❌ Failed to update cover.");
      }
    } catch (err) {
      setStatus("❌ Server error.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] p-6 rounded-xl shadow-md max-w-md mx-auto text-gray-800">
      <h2 className="text-xl font-bold mb-4 text-center">📘 Manual Book Cover Uploader</h2>

      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded border border-blue-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Cover Image URL"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
        className="w-full p-2 rounded border border-blue-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-4">
        <button
          onClick={handlePreview}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Preview
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Save Cover
        </button>
      </div>

      {preview && (
        <div className="mt-6 text-center">
          <img
            src={preview}
            alt="Book Cover Preview"
            className="w-40 h-60 object-cover mx-auto rounded shadow"
          />
        </div>
      )}

      {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
    </div>
  );
}
