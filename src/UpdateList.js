import React from 'react';
//import './styles.css'

function UpdateList(props) {
    const modalIdentifier = 'update'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getList(e,props.elementId)}>Update</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="" aria-hidden="" >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{backgroundColor:'whitesmoke',color:'rgb(88 87 87)'}}
>
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Update List</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body" >
                            <input type="text"
                                placeholder="name"
                                name="name"
                                value={props.singledata.name}
                                onChange={props.handleChange}>

                            </input>
                            <br></br>

                            <input type="text"
                                placeholder="surname"
                                name="surname"
                                value={props.singledata.surname}
                                onChange={props.handleChange}>
                            </input>
                            <br></br>

                            <input type="number"
                                placeholder="phoneNumber"
                                name="phoneNumber"
                                value={props.singledata.phoneNumber}
                                onChange={props.handleChange}>
                            </input>
                        </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.updateList(event,props.elementId)}>Update</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default UpdateList;