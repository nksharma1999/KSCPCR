import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddNewCaseForm = () => {
  const [pageNumber, setPageNumber] = useState<number>();
  const [progressWidth, setFormCompletePer] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNextBtn = () => {
    if (pageNumber) {
      setPageNumber(pageNumber + 1);
      navigate(`/case/new-case/${pageNumber + 1}`);
    }
  };
  const handlePrevBtn = () => {
    if (pageNumber && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      navigate(`/case/new-case/${pageNumber - 1}`);
    }
  };
  useEffect(() => {
    if (pageNumber) setFormCompletePer((pageNumber / 8) * 100);
  }, [pageNumber]);
  useEffect(() => {
    if (id === undefined) {
      setPageNumber(1);
    } else {
      setPageNumber(Number(id));
    }
  }, [id]);
  return (
    <>
      <div
        className="progress"
        style={{
          margin: "5px 0px",
          height: "2px",
          position: "sticky",
          top: 0,
          zIndex: "200",
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressWidth}%` }} // Set the width dynamically using style attribute
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      {(Number(pageNumber) === 1 || pageNumber === undefined) && (
        <div>
          <h3>Child Information</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Child's Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Age</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput3">Date of Birth</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect0"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Gender ---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label htmlFor="floatingSelect0">Gender</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput5"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput5">Guradian / Caretaker</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput6"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput6">Educational Background</label>
                </div>
              </div>
              <div className=" col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput7">Address </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select State ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">State</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect2"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select City ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect2">City</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Taluk ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect3">Taluk</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Village ---</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelect3">Village</label>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 2 && (
        <div>
          <h3>Case Details</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Case ID</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Case Title</label>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect0"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Case Type ---</option>
                    <option value="Child Protection">Child Protection</option>
                    <option value="Child Custody">Child Custody</option>
                    <option value="Child Labour">Child Labour</option>
                    <option value="Child Abuse">Child Abuse</option>
                  </select>
                  <label htmlFor="floatingSelect0">Case Type</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect01"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Case Priority ---</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <label htmlFor="floatingSelect01">Case Priority</label>
                </div>
              </div>

              <div className=" col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput7">Case Description </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput6"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput6">Court Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput7"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput7">Jurisdiction</label>
                </div>
              </div>
              <div className=" col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect3"
                    aria-label="Floating label select example"
                  >
                    <option value="select">--- Select Case Status ---</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <label htmlFor="floatingSelect3">Case Status</label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 3 && (
        <div>
          <h3>Legal Representation</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Lawyer</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Petitioner</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput3">Respondent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput4">
                    Legal Aid Details (if appl)
                  </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 4 && (
        <div>
          <h3>Child Protection Measures</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Protection Orders</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Placement Orders</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput3">Restraining Ordera</label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 5 && (
        <div>
          <h3>Evidence and Documentation</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Medical Reports</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Witness Statements</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput42"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput42">Police Reports</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput3">
                    Photographs or Evidence
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput4"> Child's Testimony </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput5"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput5"> School Records </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 6 && (
        <div>
          <h3>Case Management</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Case Timeline</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Next Hearing Date</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput42"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput42">Next Steps and Action</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput3">Task Assignment</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput4"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput4">Case Notes & Updates </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 7 && (
        <div>
          <h3>Court Orders & Judgements</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Court Orders</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Judgements</label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Save</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextBtn}>
                  <i
                    className="fa-solid fa-angles-right"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Number(pageNumber) === 8 && (
        <div>
          <h3>Monitoring and Follow-up</h3>
          <div className={"card "} style={{ padding: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Post case Monitoring</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput2">Follow-up Action </label>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <button
                  className="btn"
                  onClick={handlePrevBtn}
                  disabled={pageNumber === 1}
                >
                  <i
                    className="fa-solid fa-angles-left"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
              </div>
              <div>
                <button className="btn btn-primary"> Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewCaseForm;
