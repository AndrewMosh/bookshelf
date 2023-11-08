import googleBook from "../../assets/googleBook.png";
import React from "react";
export const Logo = () => {
  return (
    <div className="logo">
      <a style={{ textDecoration: "none" }} href="/">
        <img src={googleBook} alt="googleBook" />
        <span
          style={{
            color: "#1a73e8",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "1.5rem",
            cursor: "pointer",
            fontStyle: "italic",
          }}
        >
          Book
        </span>
      </a>
    </div>
  );
};
