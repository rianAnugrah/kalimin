import { deleteAllCookies, getCookie } from "helpers/utils";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Icon, Nav, Navbar, Sidebar, Sidenav } from "rsuite";

export default function Navigation() {
  const [expand, setExpand] = React.useState(true);
  const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: "#34c3ff",
    color: " #fff",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };

  const token = getCookie("ACCESS_TOKEN");
  return (
    <Sidebar
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        boxShadow: "1px 0px #d1d1d1",
      }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon
              icon="steam-square"
              size="lg"
              style={{ verticalAlign: 0 }}
            />
            <span style={{ marginLeft: 12 }}> Kalimin</span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          {token ? (
            <Nav>
              <Link
                to={{
                  pathname: "/",
                  state: { header: "Dashboard" },
                }}
              >
                <Nav.Item active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
              </Link>
              <Link to="/inbox">
                <Nav.Item icon={<Icon icon="envelope" />}>Mail</Nav.Item>
              </Link>
              <Link to="/player">
                <Nav.Item icon={<Icon icon="group" />}>Player</Nav.Item>
              </Link>
              <Link to="/event">
                <Nav.Item icon={<Icon icon="calendar" />}>Event</Nav.Item>
              </Link>
              <Link to="/quest">
                <Nav.Item icon={<Icon icon="check-square-o" />}>Quest</Nav.Item>
              </Link>
              <Link to="/unit">
                <Nav.Item icon={<Icon icon="peoples" />}>Unit</Nav.Item>
              </Link>
              <Link to="/items">
                <Nav.Item icon={<Icon icon="retention" />}>Items</Nav.Item>
              </Link>
              <Link to="/skill">
                <Nav.Item icon={<Icon icon="fire" />}>Skill</Nav.Item>
              </Link>
              <Link to="/effect">
                <Nav.Item icon={<Icon icon="snowflake-o" />}>Effect</Nav.Item>
              </Link>

              {/* <Dropdown
                eventKey="3"
                trigger="hover"
                title="Player"
                icon={<Icon icon="group" />}
                placement="rightStart"
              >
                <Link to="/player">
                  <Dropdown.Item eventKey="3-1">All player</Dropdown.Item>
                </Link>
                <Dropdown.Item eventKey="3-2">Online Player</Dropdown.Item>
              </Dropdown> */}
            </Nav>
          ) : (
            <Nav>
              <Link to="/login">
                <Nav.Item eventKey="3" icon={<Icon icon="envelope" />}>
                  Login
                </Nav.Item>
              </Link>
            </Nav>
          )}
        </Sidenav.Body>
      </Sidenav>
      <div style={{ flexGrow: 1, display: "flex" }}>&nbsp;</div>
      <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </Sidebar>
  );
}

const NavToggle = ({ expand, onChange }) => {
  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: "56px",
    textAlign: "center",
  };
  const history = useHistory();

  const handleLogout = () => {
    deleteAllCookies();
    history.push("/login");
  };
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={(children) => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
