import React from 'react'
import './Table.css'

export const Table = ({Date, Time, Location, Destination, Price, Status}) => {
    return (
        <React.Fragment>
          <div className="table-container">
              {/* <h1 className="heading"></h1> */}
              <table className="table">
                    <thead>
                      <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Location</th>
                          <th>Destination</th>
                          <th>Price</th>
                          <th>Status</th>
                        </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td data-label = "Date">{Date}</td>
                          <td data-label = "Time">{Time}</td>
                          <td data-label = "Location">{Location}</td>
                          <td data-label = "Destination">{Destination}</td>
                          <td data-label = "Price">{Price}</td>
                          <td data-label = "Status"><span className="text_open">{Status}</span></td>
                      </tr>
                      <tr>
                          <td data-label = "Date">{Date}</td>
                          <td data-label = "Time">{Time}</td>
                          <td data-label = "Location">{Location}</td>
                          <td data-label = "Destination">{Destination}</td>
                          <td data-label = "Price">{Price}</td>
                          <td data-label = "Status"><span className="text_open">{Status}</span></td>
                      </tr>
                      <tr>
                          <td data-label = "Date">1 Jan 2021</td>
                          <td data-label = "Time">09:00 - 13:00</td>
                          <td data-label = "Location">Lagos</td>
                          <td data-label = "Destination">Sokoto</td>
                          <td data-label = "Price">5000</td>
                          <td data-label = "Status"><span className="text_open">Pending</span></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </React.Fragment>
    )
}
