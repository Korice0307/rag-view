import React, { useState } from 'react';
import "./index.css"
const ExpandableTable = () => {
  // State to manage selected main title
  const [selectedMainTitle, setSelectedMainTitle] = useState(null);

  // State to manage expanded sub-titles
  const [expandedSubTables, setExpandedSubTables] = useState({});

  // Example data
  const data = {
    title301: ["title301-1", "title301-2", "title301-3", "title301-4", "title301-5"],
    title302: ["title302-1", "title302-2", "title302-3"],
  };

  // Mock table content
  const tableContent = {
    "title301-1": ["Row1", "Row2", "Row3"],
    "title301-2": ["RowA", "RowB"],
    "title302-1": ["Item1", "Item2"],
  };

  // Handle main title selection
  const handleMainTitleChange = (event) => {
    setSelectedMainTitle(event.target.value);
    setExpandedSubTables({}); // Reset expanded sub-tables
  };

  // Toggle sub-table visibility
  const toggleSubTable = (subTitle) => {
    setExpandedSubTables((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  return (
    <div>
      {/* Dropdown for Main Titles */}
      <select onChange={handleMainTitleChange}>
        <option value="">Select Title</option>
        {Object.keys(data).map((mainTitle) => (
          <option key={mainTitle} value={mainTitle}>
            {mainTitle}
          </option>
        ))}
      </select>

      {/* Sub-Titles and Expandable Tables */}
      {selectedMainTitle && (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedMainTitle}</h3>
          <ul>
            {data[selectedMainTitle].map((subTitle) => (
              <li key={subTitle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  onClick={() => toggleSubTable(subTitle)}
                >
                  {subTitle}
                  <span>{expandedSubTables[subTitle] ? "▲" : "▼"}</span>
                </div>

                {/* Table Content */}
                {expandedSubTables[subTitle] && (
                  <table style={{ marginTop: "10px", width: "100%", border: "1px solid #ccc" }}>
                    <thead>
                      <tr>
                        <th>Row</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableContent[subTitle]?.map((row, index) => (
                        <tr key={index}>
                          <td>{row}</td>
                        </tr>
                      )) || (
                        <tr>
                          <td>No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExpandableTable;
