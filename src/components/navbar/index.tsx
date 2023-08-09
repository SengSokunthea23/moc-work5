import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from './navbar.module.scss';
import { useState } from "react";
import { Button } from "react-bootstrap";

export const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

  const buttonClassName = isClicked ? styles.clickedButton : '';
  return (
    // <>
    //   <div className="container">
    //       <Tabs
    //         defaultActiveKey="profile"
    //         className={styles.thealove}
    //       >
    //         <Tab eventKey="Tariff" title="Tariff">
    //           Tab content for Home
    //         </Tab>
    //         <Tab eventKey="Rules of Origin" title="Rules of Origin">
    //           Tab content for Profile
    //         </Tab>
    //         <Tab eventKey="Non-Tariff Measures" title="Non-Tariff Measures">
    //           Tab content for Longer Tab
    //         </Tab>
    //       </Tabs>
    //   </div>
    // </>
    <Button className={buttonClassName} onClick={handleClick}>
      Custom Button
    </Button>
  );
};
