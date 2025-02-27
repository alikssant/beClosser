import React, { useState, useRef } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export function MainCreate(props) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPage, setCurrentPage] = useState("upload"); // "upload", "success", or "data"
  const [parsedData, setParsedData] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.name.endsWith(".csv")) {
        setFile(droppedFile);
      } else {
        alert("Please upload a CSV file");
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.name.endsWith(".csv")) {
        setFile(selectedFile);
      } else {
        alert("Please upload a CSV file");
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    // Here you would typically send the file to your server
    console.log("Processing file:", file);

    // Simulate parsing CSV data (in a real app, you would actually parse the file)
    const mockData = [
      {
        id: 1,
        name: "Eve Carter",
        address: "Jongno-gu, Seoul, South Korea",
        Branch: "Gwanghwamun Branch",
      },
      {
        id: 2,
        name: "Henry Miller",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "City Hall Branch",
      },
      {
        id: 3,
        name: "John Doe",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "City Hall Branch",
      },
      {
        id: 4,
        name: "Emily Davis",
        address: "Yongsan-gu, Seoul, South Korea",
        Branch: "Itaewon Branch",
      },
      {
        id: 5,
        name: "Michael Wilson",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "City Hall Branch",
      },
      {
        id: 6,
        name: "Bob Park",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "City Hall Branch",
      },
      {
        id: 7,
        name: "Liam Walker",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "City Hall Branch",
      },
      {
        id: 8,
        name: "Charlie Choi",
        address: "Gangnam-gu, Seoul, South Korea",
        Branch: "Ehwa Branch",
      },
    ];

    setParsedData(mockData);

    // Navigate to success page
    setTimeout(() => {
      setCurrentPage("success");
    }, 1000);
  };

  const handleViewData = () => {
    setCurrentPage("data");
  };

  const handleUploadAnother = () => {
    setFile(null);
    setCurrentPage("upload");
  };

  // Render the file upload screen
  const renderUploadScreen = () => (
    <div className={styles.uploadContainer}>
      <h1 className={styles.uploadTitle}>Put your HR file here</h1>

      <div
        className={`${styles.uploadArea} ${isDragging ? styles.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {file ? (
          <div className={styles.fileInfo}>
            <p className={styles.fileName}>{file.name}</p>
            <p className={styles.fileSize}>
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        ) : (
          <>
            <div className={styles.uploadArrow}>↓</div>
            <p className={styles.uploadText}>
              Drag and drop your CSV file here
            </p>
            <p className={styles.uploadSubtext}>or click to browse</p>
          </>
        )}
        <input
          type="file"
          className={styles.fileInput}
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {file && (
        <button className={styles.uploadButton} onClick={handleUpload}>
          Upload File
        </button>
      )}
    </div>
  );

  // Render the success page after upload
  const renderSuccessPage = () => (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <h1 className={styles.successTitle}>Upload Successful!</h1>
        <p className={styles.successMessage}>
          Your HR data has been uploaded successfully.
        </p>
        <div className={styles.fileDetails}>
          <h2 className={styles.detailsTitle}>File Details</h2>
          <p className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Filename:</span> {file.name}
          </p>
          <p className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Size:</span>{" "}
            {(file.size / 1024).toFixed(2)} KB
          </p>
          <p className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Date Uploaded:</span>{" "}
            {new Date().toLocaleString()}
          </p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.viewDataButton} onClick={handleViewData}>
            <Link to="/note/:noteId">View data</Link>
          </button>
          <button
            className={styles.uploadAnotherButton}
            onClick={handleUploadAnother}
          >
            Upload Another File
          </button>
        </div>
      </div>
    </div>
  );

  // Render the data view page
  const renderDataViewPage = () => (
    <div className={styles.dataViewContainer}>
      <div className={styles.dataViewHeader}>
        <h1 className={styles.dataViewTitle}>HR Data Overview</h1>
        <p className={styles.dataViewSubtitle}>
          Viewing data from <span className={styles.filename}>{file.name}</span>
        </p>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              {Object.keys(parsedData[0]).map((header) => (
                <th key={header} className={styles.tableHeader}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className={styles.tableCell}>
                    {typeof value === "number" && !Number.isInteger(value)
                      ? value.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : value.toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.dataActionButtons}>
        <button
          className={styles.backButton}
          onClick={() => setCurrentPage("success")}
        >
          Back
        </button>
        <button
          className={styles.uploadAnotherButton}
          onClick={handleUploadAnother}
        >
          Upload Another File
        </button>
      </div>
    </div>
  );

  // Conditional rendering based on current page
  switch (currentPage) {
    case "upload":
      return renderUploadScreen();
    case "success":
      return renderSuccessPage();
    case "data":
      return renderDataViewPage();
    default:
      return renderUploadScreen();
  }
}
