import React from "react";
import CVPage from './pages/CV';
import backgroundImage from "./assets/background.jpg";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* الخلفية الثابتة خلف كل شيء */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* طبقة تمويه فوق الخلفية فقط */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -9,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      />

      {/* محتوى السيرة الذاتية */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <CVPage />
      </div>
    </div>
  );
}

export default App;
