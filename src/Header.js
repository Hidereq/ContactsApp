import React, { Component } from "react";
import Modal from "./Modal";
import "./App.css";

class Header extends Component {
   render() {
      return (
         <table className="container">
            <tbody>
               <tr className="nav nav-tabs" style={{ width: "1120px" }}>
                  <td className="nav item" style={{ padding: "0 10px" }}>
                     <img
                        className="img-rounded"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                        width="50"
                        height="50"
                        alt="Logo"
                     />
                     <span className="font-weight-bold" style={{ lineHeight: "50px", marginLeft: "5px" }}>
                        Contacts List
                     </span>
                  </td>
                  <td className="nav-item">
                     <div style={{ lineHeight: "50px", padding: "0 10px", borderLeft: "1px solid rgba(0,0,0,.125)", borderRight: "1px solid rgba(0,0,0,.125)" }}>
                        <Modal />
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}

export default Header;
