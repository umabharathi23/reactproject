import React, { Component } from 'react';

class Cruds extends Component {
  state = {
    data: [],
    sNo: 1,
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    isEditing: false,
    editIndex: -1,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddRow = () => {
    const row = {
      sNo: this.state.sNo,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      salary: this.state.salary,
    };

    this.setState((prevState) => ({
      data: [...prevState.data, row],
      sNo: prevState.sNo + 1,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
    }));
  };

  handleEditRow = (index) => {
    const editedData = [...this.state.data];
    editedData[index] = {
      sNo: this.state.sNo,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      salary: this.state.salary,
    };

    this.setState({
      data: editedData,
      isEditing: false,
      editIndex: -1,
      sNo: this.state.sNo + 1,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
    });
  };

  handleDeleteRow = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this row?');
    if (confirmDelete) {
      const updatedData = [...this.state.data];
      updatedData.splice(index, 1);
      this.setState({ data: updatedData });
    }
  };

  handleEditClick = (index) => {
    this.setState({
      isEditing: true,
      editIndex: index,
      sNo: this.state.data[index].sNo,
      firstName: this.state.data[index].firstName,
      lastName: this.state.data[index].lastName,
      email: this.state.data[index].email,
      salary: this.state.data[index].salary,
    });
  };

  render() {
    return (
      <div>
       

        <div>
          <input
            type="text"
            name="sNo"
            placeholder="serialNo"
            value={this.state.sNo}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={this.state.salary}
            onChange={this.handleInputChange}
          />
          {this.state.isEditing ? (
            <button style={{background:"blue",color:"white"}}onClick={() => this.handleEditRow(this.state.editIndex)}>Save Edit</button>
          ) : (
            <button  style={{background:"blue",color:"white"}} onClick={this.handleAddRow}>Add Row</button>
          )}
        </div>

        <center><table >
          <thead>
            <tr>
              <th style={{color:"red"}}>SNo</th>
              <th style={{color:"red"}}>First Name</th>
              <th style={{color:"red"}}>Last Name</th>
              <th style={{color:"red"}}>Email</th>
              <th style={{color:"red"}}>Salary</th>
              <th style={{color:"red"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row, index) => (
              <tr key={index}>
                <td>{row.sNo}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.salary}</td>
                <td>
                  <button style={{background:"blue",color:"white"}} onClick={() => this.handleEditClick(index)}>Edit</button>
                  <button style={{background:"blue",color:"white"}} onClick={() => this.handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table></center>
        
      </div>
    );
  }
}

export default Cruds;
