// pages/index.js
import { useEffect, useState } from "react";

export default function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDownload = async (key) => {
    try {
      const response = await fetch(
        `/api/download-image?key=${encodeURIComponent(key)}`
      );
      const data = await response.json();

      if (response.ok) {
        window.location.href = data.url; // Redirect to the signed download URL
      } else {
        console.error("Error downloading image:", data.error);
      }
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/get-images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>תמונות זיכרון - סרן ישראל יודקין הי״ד</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {images.map((image) => (
          <div
            key={image.key}
            className="image-container"
            style={{ textAlign: "center" }}
          >
            <img
              src={image.url}
              alt={image.key}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <button
              className="download-button"
              onClick={() => handleDownload(image.key)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
