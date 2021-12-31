import React, { useState } from "react";
import { Dropdown, DropdownToggle, Badge } from 'reactstrap'

import { themeData } from "../data/themeData";

function ThemeToggler(props){
    const [dropdownOpen,setdropdownOpen]=useState(false);
    const handleClick=()=>{
        setdropdownOpen(!dropdownOpen);
    }

    return(
        <div className="fixed-plugin">
      <Dropdown isOpen={dropdownOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li className="header-title">SELECT THEME</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <Badge
                theme="primary"
                className={
                  props.bgColor === themeData.theme.primary ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(themeData.theme.tertiary);
                }}
              />{" "}
              <Badge
                color="info"
                className={
                  props.bgColor === ThemeColors.blue ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.blue);
                }}
              />{" "}
              <Badge
                color="info"
                className={
                  props.bgColor === ThemeColors.purple ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.purple);
                }}
              />{" "}
              <Badge
                color="info"
                className={
                  props.bgColor === ThemeColors.orange ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.orange);
                }}
              />{" "}
              <Badge
                color="success"
                className={
                  props.bgColor === ThemeColors.green ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.green);
                }}
              />{" "}
              <Badge
                color="success"
                className={
                  props.bgColor === ThemeColors.red ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.red);
                }}
              />{" "}
            </div>
          </li>
        </ul>
      </Dropdown>
    </div>
    )

}