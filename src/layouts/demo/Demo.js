import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Form submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <main className="container">
      <div>
        <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
          <label>
            <h3>Question 1.</h3>
            How many people were living or staying in this house, apartment, or mobile home on April 1, 2020?
          </label>
          <div>
            <input
              name="householdMembers"
              type="number"
              value={this.state.householdMembers}
              onChange={this.handleChange} />
          </div>
          <label>
            <h3>Question 2.</h3>
            Were there any additional people staying here April 1, 2020 that you did not include in Question 1?
          </label>
          <div>
            <input
              name="q1Confirmation"
              type="checkbox"
              className="pure-checkbox"
              checked={this.state.householdMembersConfirmation}
              onChange={this.handleChange} /> Yes
          </div>
          <label>
            <h3>Question 3.</h3>
            Is this house, apartment, or mobile home: owned with mortgage, owned without mortgage, rented, occupied without rent?
          </label>
          <div>
            <select
              name="ownership"
              value={this.state.ownership}
              onChange={this.handleChange}>
              <option value="0"></option>
              <option value="1">Owned with mortgage</option>
              <option value="2">Owned without mortgage</option>
              <option value="3">Rented</option>
              <option value="4">Occupied without rent</option>
            </select>
          </div>
          <section>
            <label>
              <h3>Question 4.</h3>
              Please provide information for each person living here. Start with a person here who owns or rents this house, apartment, or mobile home. If the owner or renter lives somewhere else, start with any adult living here. This will be Person 1.
            </label>
            <br />
            <label>
              What is Person 1's name?
            </label>
            <div>
              <input
                name="p1Name"
                type="text"
                value={this.state.p1Name}
                onChange={this.handleChange} />
            </div>
            <label>
              What is Person 1's sex?
            </label>
            <div>
              <input
                name="p1Sex"
                type="text"
                value={this.state.p1Sex}
                onChange={this.handleChange} />
            </div>
            <label>
              What is Person 1's age and Date of Birth?
            </label>
            <div>
              <input
                name="p1Name"
                type="text"
                value={this.state.p1Name}
                onChange={this.handleChange} />
            </div>
            <label>
              Is Person 1 of Hispanic, Latino or Spanish origin?
            </label>
            <div>
              <input
                name="p1Name"
                type="text"
                value={this.state.p1Name}
                onChange={this.handleChange} />
            </div>
            <label>
              What is Person 1's race?
            </label>
            <div>
              <input
                name="p1Name"
                type="text"
                value={this.state.p1Name}
                onChange={this.handleChange} />
            </div>
            <label>
              Does Person 1 sometimes live or stay somewhere else?
            </label>
            <div>
              <input
                name="p1Name"
                type="text"
                value={this.state.p1Name}
                onChange={this.handleChange} />
            </div>
          </section>
          <button
            type="submit"
            className="pure-button pure-button-primary"
            value="Submit">
            Review & Submit
          </button>
        </form>
      </div>
      </main>
    );
  }
}
