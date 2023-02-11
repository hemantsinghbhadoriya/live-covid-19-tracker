import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container my-5">
        <h1 class="text-center">Live COVID-19 Corona Virus Tracker</h1>

        <div className="row row-cols-1 row-cols-md-3 g-3 my-3">
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-primary">
                <h5 className="card-title">Country</h5>
                <h2 className="card-text">India</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-success">
                <h5 className="card-title">Active</h5>
                <h2 className="card-text">{data.active}</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-warning">
                <h5 className="card-title">Confirmed</h5>
                <h2 className="card-text">{data.confirmed}</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-danger">
                <h5 className="card-title">Deaths</h5>
                <h2 className="card-text">{data.deaths}</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-warning">
                <h5 className="card-title">Delta Confirmed</h5>
                <h2 className="card-text">{data.deltaconfirmed}</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body btn btn-outline-danger">
                <h5 className="card-title">Delta Deaths</h5>
                <h2 className="card-text">{data.deltadeaths}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
