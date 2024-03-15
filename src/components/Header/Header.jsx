import React, { useState } from "react";
import { FaBed, FaCalendar, FaCar, FaDollyFlatbed } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdFlight, MdOutlineLocalTaxi } from "react-icons/md";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import "./header.css";

const Header = () => {



  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <MdFlight />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FaCar />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FaDollyFlatbed />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <MdOutlineLocalTaxi />
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="headerTitle">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
          <button className="headerBtn">Sign in / Register</button>
           <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FaCalendar className="headerIcon" />
               <spen className ="headerSearchText">date to date</spen>
              </div>
              <div className="headerSearchItem">
                <FaPerson className="headerIcon" />
                <spen className ="headerSearchText">2 adults 2 Children 1 room </spen>
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">
                  Search
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
