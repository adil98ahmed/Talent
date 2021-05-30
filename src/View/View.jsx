import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/SideBar/sideBar";
import DashBoard from "../components/MainDashBoard/DashBoard";
import "./ViewStyle.css";
import MenuIcon from "@material-ui/icons/Menu";
import $ from "jquery";
function View() {
  useEffect(() => {
    $("#menueIcon").on('click',function(){
      var w = $('#sideBar').css('width');
      if(w=="0px"){
        $('#sideBar').css('width',"100%")
        $('#dashBoard').addClass('col-lg-9');
        $('#dashBoard').removeClass('col-lg-12');
        
        console.log('dsjdns')
      }
      else{
        $('#sideBar').css('width',"0")
        $('#dashBoard').addClass('col-lg-9')
        $('#dashBoard').addClass('col-lg-12')
        
      }
      console.log(w);
    });
  }, []);
  return (
    <div className="cont row no-gutters bg-light">
      <div id="menueIcon">
        <MenuIcon></MenuIcon>
      </div>
      <div id="sideBar" className="sideBarView col-lg-3 fixed-top ">
        <div className="sideBarContainer"></div>
        <SideBar></SideBar>
      </div>

      <div className="col-lg-3"></div>
      <div id="dashBoard" className="dashBoardView col-lg-9  no-gutters  ">
        <DashBoard></DashBoard>
      </div>
    </div>
  );
}

export default View;
