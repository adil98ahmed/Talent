import { React, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccordionStyle.css";
import $ from "jquery";
import SideBarData from "./AccoedionDate";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "bootstrap/dist/css/bootstrap.min.css";
const removeActivClass = (event) => {};
function AccordionComponent() {
  const [prevClick, setPrevClick] = useState(0);
  const [firstClick, setFirstClick] = useState(false);
  useEffect(() => {
    setFirstClick(true);
    $(".toggleContainer").on("click", function (event) {
      $(this).addClass("active");
      console.log($(event.target.parentElement.classList));
      let current = $(".toggleContainer").index(this);
      console.log(current);
      let elemnts = $(".toggleContainer");
      for (var i = 0; i < elemnts.length; i++) {
        if (i != current) {
          elemnts[i].classList.remove("active");
          elemnts[i].firstChild.classList.remove("active");
        }
      }
    });
  });
  return (
    <Accordion>
      {SideBarData.map((value, index) => (
        <div>
          <div className="toggleContainer  ">
            <Accordion.Toggle
              className="toggleItem my-3  w-100"
              eventKey={value.title}
            >
              <p className="p-0 m-0 ">{value.title}</p>
              <KeyboardArrowDownIcon fontSize="large">
                {value.title}
              </KeyboardArrowDownIcon>
            </Accordion.Toggle>
          </div>

          {value.subtitles.map((subtitle) => (
            <Accordion.Collapse className="mt-2 collaps" eventKey={value.title}>
              <ul>
                <li className="pl-2" key={subtitle}>
                  {subtitle}
                </li>
              </ul>
            </Accordion.Collapse>
          ))}
        </div>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
