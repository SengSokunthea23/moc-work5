import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import style from "./navbar.module.scss";

export const NavBar = () => {

  return (
    <>
      <div className="container">
          <Tabs
            defaultActiveKey="profile"
          >
            <Tab eventKey="Tariff" title="Tariff">
              Tab content for Home
            </Tab>
            <Tab eventKey="Rules of Origin" title="Rules of Origin" >
              Tab content for Profile
            </Tab>
            <Tab eventKey="Non-Tariff Measures" title="Non-Tariff Measures" >
              Tab content for Longer Tab
            </Tab>
          </Tabs>
      </div>
    </>
  );
};