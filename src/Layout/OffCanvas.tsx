import { NavLink } from "react-router-dom";

export const OffCanvas = () => {
  const baseUrl = window.location.origin;
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        // padding: 10,
        backgroundColor: "#666699",
        backgroundBlendMode: "overlay",
        overflow: "hidden",
        overflowY: "auto",
        // backgroundImage:
        // "url(https://img.freepik.com/free-photo/abstract-design-background-smooth-flowing-lines_1048-14640.jpg?w=826&t=st=1709389253~exp=1709389853~hmac=82738dc4ab4819cb46399b3ba6e44868b90e1f5b2117172c9fecd74c81a1297e)",
      }}
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <img
          style={{ width: "100px", mixBlendMode: "color-burn",marginLeft:'45px' }}
          // src="http://simpro.co.in/wp-content/uploads/2022/06/simpro-logo1-1.png"
          src={baseUrl + "/logo2.jpeg"}
          alt="Logo"
        />
        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
      </div>
      <div className="offcanvas-body" style={{ padding: 0 }}>
      <div className="sidebar">
        <div
          className="accordion"
          id="accordionExample"
          // style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="adminHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#adminHeader-Collapse"
                aria-expanded="true"
                aria-controls="adminHeader-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-user-tie"
                  style={{ marginRight: "10px" }}
                ></i>
                Case Details
              </button>
            </h2>
            <div
              id="adminHeader-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="adminHeader"
              // data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ padding: "0px", background: "darkcyan" }}
              >
                <NavLink className="nav-link sidebarNavLink" to={"case/new-case"}>
                  {/* <i className="fa-solid fa-user-plus sidebarIcon"></i> */}
                  Add New Case
                </NavLink>
                {/* <NavLink className="nav-link sidebarNavLink" to={"admin/role"}>
                  Role
                </NavLink> */}
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"case/case-tracker"}
                >
                  {/* <i className="fa-solid fa-user-shield sidebarIcon"></i> */}
                  Case Tracker
                </NavLink>
               
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="masterDataHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#masterData-collapse"
                aria-expanded="true"
                aria-controls="masterData-collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-table"
                  style={{ marginRight: "10px" }}
                ></i>
                Master Data
              </button>
            </h2>
            <div
              id="masterData-collapse"
              className="accordion-collapse collapse"
              aria-labelledby="masterDataHeader"
              // data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ padding: "0px", background: "darkcyan" }}
              >
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/State"}
                >
                  {/* <i className="fa-regular fa-calendar-days sidebarIcon"></i> */}
                  State
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/District"}
                >
                  {/* <i className="fa-solid fa-building-columns sidebarIcon"></i> */}
                  District
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/City"}
                >
                  {/* <i className="fa-regular fa-calendar-days sidebarIcon"></i> */}
                  City
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/Taluk"}
                >
                  {/* <i className="fa-regular fa-calendar-days sidebarIcon"></i> */}
                  Taluk
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/Village"}
                >
                  {/* <i className="fa-regular fa-calendar-days sidebarIcon"></i> */}
                  Village
                </NavLink>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      </div>
    </div>
  );
};
