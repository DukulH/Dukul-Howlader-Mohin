import React, { useEffect, useState } from "react";
import "./TopProductsTable.css";
import CircleIcon from "@mui/icons-material/Circle";
import RingLoader from "react-spinners/RingLoader";

export default function TopProductsTable() {
  const [Top_Product_Data, Set_Top_Product_Data] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  //fetching top products data from database based on selling quantity
  useEffect(() => {
    setShowLoader(true);
    fetch("https://agrigate-service.onrender.com/topProductData")
      .then((response) => response.json())
      .then((data) => {
        Set_Top_Product_Data(data);
        setShowLoader(false);
      });
  }, []);
  return (
    <div className="TopProductsTable">
      <h4>Top Selling Products</h4>
      <p className="mb-4">
        <small>Best selling products in Styleist</small>
      </p>
      {showLoader ? (
        <div className="d-flex justify-content-center">
        <RingLoader
          loading={showLoader}
          aria-label="Loading Spinner"
        />
        </div>
      ) : (
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">
                <small style={{ color: "#e8ecf8" }}>
                  <CircleIcon fontSize="8" />
                </small>
              </th>
              <th scope="col">
                <small style={{ color: "#b3b8cf" }}>Product Name</small>
              </th>
              <th scope="col">
                <small style={{ color: "#b3b8cf" }}>Category Name</small>
              </th>
              <th scope="col">
                <small style={{ color: "#b3b8cf" }}>Price</small>
              </th>
              <th scope="col">
                <small style={{ color: "#b3b8cf" }}>Total Earning</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {Top_Product_Data.map((item, index) => (
              <tr key={index}>
                <th scope="row">
                  <small style={{ color: "#e8ecf8" }}>
                    <CircleIcon fontSize="10" />
                  </small>
                </th>
                <td style={{ color: "#2D3353" }}>{item.product_name}</td>
                <td style={{ color: "#2D3353" }}>{item.category_name}</td>
                <td>
                  <div
                    style={{
                      height: "28px",
                      width: "80px",
                      backgroundColor: "#fff0e4",
                      borderRadius: "20px",
                    }}
                  >
                    <strong>
                      <p
                        style={{
                          textAlign: "center",
                          padding: "4px",
                          fontSize: "14px",
                          color: "#fe6a03",
                        }}
                      >
                        ${item.product_price}
                      </p>
                    </strong>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      height: "28px",
                      width: "80px",
                      backgroundColor: "#ebf9ff",
                      borderRadius: "20px",
                    }}
                  >
                    <strong>
                      <p
                        style={{
                          textAlign: "center",
                          padding: "4px",
                          fontSize: "14px",
                          color: "#25c0fd",
                        }}
                      >
                        ${item.total_sale_price}
                      </p>
                    </strong>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
