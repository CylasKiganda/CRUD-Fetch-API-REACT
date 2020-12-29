import React from "react";
//import { MDBCol, MDBIcon } from "mdbreact";


function CreateList(props) {
  return (
    <React.Fragment>
      <div style={{display:'flex'}}>
        <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#myModal">

        <i className="material-icons">&#xE147;</i>
      </button>
      <div className="input-group" style={{display: 'flex'}}>
        <input type="text" className="search form-control" placeholder="Search..."></input>
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            <i className="fa fa-search" style={{color: 'aliceblue'}}></i>
          </button>
        </div>
      </div>
      </div>

      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New User
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="name"
                name="name"
                value={props.singledata.name}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="surname"
                name="surname"
                value={props.singledata.surname}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="number"
                placeholder="phoneNumber"
                name="phoneNumber"
                value={props.singledata.phoneNumber}
                onChange={props.handleChange}
              />
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createList}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateList;
