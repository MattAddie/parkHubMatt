import React, { useState, useEffect } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/reserve/getAll")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Define a custom getRowId function
  const getRowId = (row) => row._id;

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "customerName", headerName: "User", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={getRowId} // Specify the custom getRowId function
      />
    </div>
  );
}
