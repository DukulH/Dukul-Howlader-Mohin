import React from "react";
import "./TopProductsTable.css";
import CircleIcon from '@mui/icons-material/Circle';
import { fontSize } from "@mui/system";

export default function TopProductsTable() {
  return (
    <div className="TopProductsTable">
        <h4>Top Selling Products</h4>
        <p className="mb-4"><small>Best selling products in Styleist</small></p>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col"><small style={{color:"#e8ecf8"}}><CircleIcon fontSize="8"/></small></th>
            <th scope="col"><small style={{color:"#b3b8cf"}}>Product Name</small></th>
            <th scope="col"><small style={{color:"#b3b8cf"}}>Category Name</small></th>
            <th scope="col"><small style={{color:"#b3b8cf"}}>Price</small></th>
            <th scope="col"><small style={{color:"#b3b8cf"}}>Total Earning</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><small style={{color:"#e8ecf8"}}><CircleIcon fontSize="10"/></small></th>
            <td style={{color:"#2D3353"}}>Mark</td>
            <td style={{color:"#2D3353"}}>Otto</td>
            <td>
                <div style={{height:'28px', width:'80px', backgroundColor:'#fff0e4', borderRadius:'20px'}}>
                    <strong><p style={{textAlign:"center", padding:'4px',fontSize:'14px', color:"#fe6a03"}}>$1500</p></strong>
                </div>
            </td>
            <td>
                <div style={{height:'28px', width:'80px', backgroundColor:'#ebf9ff', borderRadius:'20px'}}>
                    <strong><p style={{textAlign:"center", padding:'4px',fontSize:'14px', color:"#25c0fd"}}>$1500</p></strong>
                </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
