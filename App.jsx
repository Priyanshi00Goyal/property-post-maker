import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const postRef = useRef(null);

  const [property, setProperty] = useState("4 BHK Luxury Villa");
  const [location, setLocation] = useState("Sushant Golf City, Lucknow");
  const [price, setPrice] = useState("₹2.5 Cr onwards");
  const [highlights, setHighlights] = useState(
    "3000 sq.ft • Corner Plot • Ready to Move"
  );

  const downloadPost = async () => {
    if (!postRef.current) return;

    const canvas = await html2canvas(postRef.current, {
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = "property-post.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const generatePost = () => {
    alert("✨ Your property post has been updated!");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <div className="logo">🏠</div>
          <div>
            <h1>Property Post Maker</h1>
            <p>Create professional real-estate posts instantly</p>
          </div>
        </div>

        <div className="creator">Built by Priyanshi Goyal</div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {/* Form */}
        <section className="form-card">
          <div className="section-title">
            <span>✦</span>
            <div>
              <h2>Property Details</h2>
              <p>Fill in the details to generate your post</p>
            </div>
          </div>

          <div className="input-group">
            <label>🏡 Property & Type</label>
            <input
              type="text"
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              placeholder="e.g. 4 BHK Luxury Villa"
            />
          </div>

          <div className="input-group">
            <label>📍 Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Sushant Golf City, Lucknow"
            />
          </div>

          <div className="input-group">
            <label>💰 Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. ₹2.5 Cr onwards"
            />
          </div>

          <div className="input-group">
            <label>✨ Highlights</label>
            <textarea
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
              placeholder="e.g. 3000 sq.ft • Corner Plot • Ready to Move"
              rows="4"
            />
          </div>

          <button className="generate-btn" onClick={generatePost}>
            ✨ Generate Property Post
          </button>
        </section>

        {/* Preview */}
        <section className="preview-section">
          <div className="preview-heading">
            <h2>Live Preview</h2>
            <span>Updates automatically</span>
          </div>

          <div className="property-post" ref={postRef}>
            {/* Decorative Background */}
            <div className="post-decoration decoration-one"></div>
            <div className="post-decoration decoration-two"></div>

            {/* Brand */}
            <div className="post-brand">
              <div className="post-logo">🏛</div>
              <div>
                <h3>ELITE ESTATES</h3>
                <p>Luxury • Comfort • Lifestyle</p>
              </div>
            </div>

            <div className="post-line"></div>

            {/* Property */}
            <div className="post-content">
              <span className="featured-tag">FEATURED PROPERTY</span>

              <h2>{property || "Your Property Name"}</h2>

              <div className="post-location">
                📍 {location || "Property Location"}
              </div>

              <div className="price-box">
                <span>STARTING FROM</span>
                <strong>{price || "Price on Request"}</strong>
              </div>

              <div className="highlight-box">
                <p>PROPERTY HIGHLIGHTS</p>
                <span>{highlights || "Premium Property Features"}</span>
              </div>
            </div>

            {/* Contact */}
            <div className="contact-strip">
              <span>📞 +91 98765 43210</span>
              <span>✉ eliteestates@example.com</span>
            </div>
          </div>

          <button className="download-btn" onClick={downloadPost}>
            ⬇ Download Post as PNG
          </button>
        </section>
      </main>

      <footer>
        Designed & Built by <strong>Priyanshi Goyal</strong> ✨
      </footer>
    </div>
  );
}

export default App;