import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import SearchInput, { createFilter } from "react-search-input";

const SearchBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const dataSource = props;
  const [searchTerm, setSearchTerm] = useState("");
  const KEYS_TO_FILTERS = ["name"];

  const filteredLatinName = dataSource.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );
  return (
    <>
      <section className="hero pt-3">
        <div id="hero-body">
          <h1 id="title-search"></h1>
          <div className="title-writer">
            <h2></h2>
          </div>
          <div className="px-5">
            <div className="control has-icons-left is-expanded flex-grow-1">
              <SearchInput
                className="search-input"
                onChange={e => {
                  setSearchTerm(e);
                }}
              />
              {searchTerm !== "" && (
                <div className="search-result">
                  {filteredLatinName.map((name, index) => {
                    return (
                      <div
                        className="hide d-flex justify-content-start"
                        key={index}
                      >
                        {/* <img className="img-fluid" src={company.image} alt="" />
                        <Link key={index} to={`/companies/${company.id}`}>
                          <div className="from ml-2 font-weight-bold">
                            {company.latinName}
                          </div>
                        </Link> */}
                        {name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
