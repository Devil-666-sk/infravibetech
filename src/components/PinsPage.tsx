"use client";
import { useState, useEffect } from "react";

export default function PinsPage() {
  const [pins, setPins] = useState<string[]>([]); // <- explicitly typed
  const [page, setPage] = useState(0);
  const limit = 10000; // 10,000 per page

  useEffect(() => {
    const generatePins = () => {
      const tempPins: string[] = [];
      const start = page * limit;
      const end = Math.min(start + limit, 1000000);

      for (let i = start; i < end; i++) {
        tempPins.push(i.toString().padStart(6, "0"));
      }
      setPins(tempPins);
    };

    generatePins();
  }, [page]);

  return (
    <div style={{ padding: 20 }}>
      <h1>6 Digit PIN Generator (0 - 9)</h1>
      <p>Showing {limit} PINs per page</p>

      <div style={{ margin: "20px 0" }}>
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          style={{ padding: 10, marginRight: 10 }}
        >
          Previous
        </button>

        <button
          disabled={(page + 1) * limit >= 1000000}
          onClick={() => setPage(page + 1)}
          style={{ padding: 10 }}
        >
          Next
        </button>

        <p>Page: {page + 1}</p>
      </div>

      <div
        style={{
          height: "500px",
          overflow: "auto",
          border: "1px solid #ccc",
          padding: 10,
        }}
      >
        {pins.map((pin, index) => (
          <div key={index}>{pin}</div>
        ))}
      </div>
    </div>
  );
}
