import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // 滿高
      width: "100%", // 滿寬
      backgroundColor: "#f0f8ff", // 淺藍背景
      margin: "0", // 移除容器外的 margin
      padding: "20px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#4caf50",
    },
    buttonGroup: {
      display: "flex",
      gap: "20px",
    },
    button: {
      fontSize: "18px",
      padding: "15px 30px",
      backgroundColor: "#4caf50", // 綠色按鈕
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 按鈕陰影
      transition: "background-color 0.3s, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#45a049", // 按鈕懸停時變色
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>歡迎來到系統首頁</h1>
      <div style={styles.buttonGroup}>
        <button
          style={styles.button}
          onClick={() => navigate("/ExamplePage")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          企業和規系統
        </button>
        <button
          style={styles.button}
          onClick={() => navigate("/ExamplePage2")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          一鍵生成永續報告書
        </button>
      </div>
    </div>
  );
}

export default HomePage;
