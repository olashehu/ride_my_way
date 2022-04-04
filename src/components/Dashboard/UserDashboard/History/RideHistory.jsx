/** @format */

import moment from "moment";

import UsersSidebarNav from "../UserNavigation/UserSecondaryNav/UsersSidebarNav";
import "../../../../tablecomponent/Table.css";
import Pagination from "../../../Pagination2/Pagination";

const RideHistory = ({
  currentPost,
  showingUntil,
  showingFrom,
  totalResults,
  totalPagesNum,
  currentPage,
  onButtonClick,
}) => {
  return (
    <UsersSidebarNav>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Driver-id</th>
              <th>Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPost.map((offer, index) => {
              return (
                <tr key={index}>
                  <td data-label="S/N">{offer.id}</td>
                  <td data-label="Driver-id">{offer.driverId}</td>
                  <td data-label="Date">{moment(offer.createdAt).format("LLL")}</td>
                  <td data-label="Location">{offer.location}</td>
                  <td data-label="Destination">{offer.destination}</td>
                  <td data-label="Price">{offer.price}</td>
                  <td data-label="Status">
                    <span className="text_open">{offer.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          showingUntil={showingUntil}
          showingFrom={showingFrom}
          totalResults={totalResults}
          totalPagesNum={totalPagesNum}
          currentPage={currentPage}
          onButtonClick={onButtonClick}
        />
      </div>
    </UsersSidebarNav>
  );
};

export default RideHistory;
