import React, { createRef, Component } from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends Component {
  nameRef = createRef();
  vesselRef = createRef();
  weaponRef = createRef();
  descRef = createRef();
  yearRef = createRef();

  createPirate = event => {
    event.preventDefault();
    const pirate = {
      name: this.nameRef.current.value,
      vessel: this.vesselRef.current.value,
      weapon: this.weaponRef.current.value,
      desc: this.descRef.current.value,
      year: this.yearRef.current.value
    };
    this.props.addPirate(pirate);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input
          type="text"
          name="name"
          placeholder="Pirate name"
          ref={this.nameRef}
        />
        <input
          type="text"
          name="vessel"
          placeholder="Pirate vessel"
          ref={this.vesselRef}
        />
        <input
          type="text"
          name="weapon"
          placeholder="Pirate weapon"
          ref={this.weaponRef}
        />
        <input
          type="text"
          name="desc"
          placeholder="description"
          ref={this.descRef}
        />
        <input
          type="number"
          name="year"
          placeholder="enter year"
          ref={this.yearRef}
        />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
