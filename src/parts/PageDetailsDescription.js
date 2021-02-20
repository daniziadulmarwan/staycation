import React from "react";
import reactHtmlParser from "react-html-parser";

export default function PageDetailsDescription({ data }) {
  return (
    <main>
      <h4>About The Place</h4>
      {reactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="38"
                src={feature.imageUrl}
                alt={feature.name}
                className="d-block mb-2"
              />
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
