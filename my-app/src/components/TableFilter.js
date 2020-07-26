import React from "react";

function TableFilter(props) {
  function handleInputChange(event) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log(`[handleInputChange] name(${name}) value(${value})`);

    // calling the parent updateFilter so the 'filter' property will be changed at the App level, adn then
    // propagated down
    props.updateFilter(value);
  }

  return (
    <div class="mb-3 row">
      <label for="name" class="col-sm-2 col-form-label">
        Name Search
      </label>
      <div class="col-sm-10">
        <input
          onChange={handleInputChange}
          type="text"
          class="form-control"
          id="name"
          value={props.filter}
        />
      </div>
    </div>
  );
}

export default TableFilter;
