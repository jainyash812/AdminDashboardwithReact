import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData.js";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserList() {
  const [data, setData] = useState(userRows);
  function deleteRow(id) {
    setTimeout(() => {
      setData(data.filter((items) => items.id !== id));
    });
  }
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "username",
      headerName: "Username",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListUserImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      }
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 150
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 265
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => deleteRow(params.row.id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
