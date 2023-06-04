import React, { useState, useEffect } from "react";
import './filter.css'



function Filter(props) {

    function onFilterValueChanged(event) {
        props.onFilterValueSelected(event.target.value);
    }
    return (
        <div data-testid="filter" className="filter-area">
            <select className="isAvailable" onChange={onFilterValueChanged}>
                <option value="all">All Restaurants</option>
                <option value="fastfood">Fast Food</option>
                <option value="pakistani">Pakistani</option>
                <option value="chinese">Chinese</option>
                <option value="italian">Italian</option>
                <option value="deserts">Deserts</option>

            </select>
        </div>
    )
}

export default Filter;