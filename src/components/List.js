import React from "react";

const List = ({ data }) => {
  return (
    <div className="m-5 sm:mx-30">
      <div className="flex justify-center items-center my-5 mt-10 text-3xl font-semibold">
        #IndiaFightsCorona COVID-19
      </div>
      <div className="overflow-x-auto h-96 rounded-lg shadow-xl">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <td>state</td>
              <th>confirmed</th>
              <th>recovered</th>
              <th>deaths</th>
              <th>active</th>
              <th>lastupdatedtime</th>
            </tr>
          </thead>
          <tbody>
            {data.map((curElem, index) => {
              return (
                <tr key={index}>
                  <td className="">{curElem.state}</td>
                  <td>{curElem.confirmed}</td>
                  <td>{curElem.recovered}</td>
                  <td>{curElem.deaths}</td>
                  <td>{curElem.active}</td>
                  <td>{curElem.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>state</td>
              <th>confirmed</th>
              <th>recovered</th>
              <th>deaths</th>
              <th>active</th>
              <th>lastupdatedtime</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default List;
