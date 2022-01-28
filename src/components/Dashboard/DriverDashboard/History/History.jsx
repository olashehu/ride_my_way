

import moment from "moment";

import DriversNavbar from "../DriverDashboardNavigation/Secondary/DriversNavbar";
import "../../../../tablecomponent/Table.css"
import Pagination from "../../../../userdashboardPages/Pagination"

const History = ({currentPosts, postsPerPage, totalPosts, paginate}) => {
  return (
    <DriversNavbar>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>User-id</th>
              <th>Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((data, index) => {
              return (
                <tr>
                  <td data-label="S/N">{data.historyId}</td>
                  <td data-label="User-id">{data.userId}</td>
                  <td data-label="Date">{moment(data.createdAt).format("LLL")}</td>
                  <td data-label="Location">{data.location}</td>
                  <td data-label="Destination">{data.destination}</td>
                  <td data-label="Price">{data.price}</td>
                  <td data-label="Status">
                    <span className="text_open">{data.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
         <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
          />
      </div>
    </DriversNavbar>
  );
};
export default History;
