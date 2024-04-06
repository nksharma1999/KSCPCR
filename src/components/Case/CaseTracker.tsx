const CaseTracker = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className={"card "} style={{ padding: "10px" }}>
        <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div style={{height:'1px',width:'100%',margin:'5px 0px', background:'gray'}}></div>
        <div style={{width:'100%', overflow:'auto'}}>
          <table className="table table-striped table-hover table-bordered">
            <thead style={{ background: "#6c5ea5", color: "white" }}>
              <tr>
                <th scope="col">Child's Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Case ID</th>
                <th scope="col">Case Title</th>
                <th scope="col">Case Type</th>
                <th scope="col">Case Status</th>
                <th scope="col">Next Hearing Date</th>
                <th scope="col">Case Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn">
                    <i className="fa-solid fa-info"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn">
                    <i className="fa-solid fa-info"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn">
                    <i className="fa-solid fa-info"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaseTracker;
