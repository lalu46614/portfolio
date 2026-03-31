// Reading.tsx

import React from 'react';
import './Reading.css';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    emoji: "📚",
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    emoji: "💰",
    description: "An eye-opener on wealth, assets, and financial literacy.",
  }
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title"></h2>
      <p className="reading-intro"></p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <div className="book-emoji">{book.emoji}</div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
