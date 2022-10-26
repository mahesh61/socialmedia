import React, { useState } from "react";
import NavBar from "../../../Components/NavBar";
import Header from "../../../Components/Header/Header";
import SearchItems from "../../../Components/searchItems/SearchItems";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns/esm";
import { DateRange } from "react-date-range";

function List() {
  const list = 4;
  const location = useLocation();
  console.log(location);
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <NavBar />
      <Header type={list} />
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="ListTittle">Search</h1>
            <div className="sItem">
              <label className="Destination">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="sItem">
              <label className="CheckIn">Check-In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  className="calander"
                  onChange={(item) => {
                    setDate([item.selection]);
                  }}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="sItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="optionItem">
                  <span className="optionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="optionInput" />
                </div>

                <div className="optionItem">
                  <span className="optionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="optionInput" />
                </div>

                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <input type="number" min={1} className="optionInput" />
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <input type="number" min={0} className="optionInput" />
                </div>

                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <input type="number" min={1} className="optionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="ListResult">
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
