import React from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

function Lists(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td  style={{paddingLeft:'3%'}}>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.surname}</td>
            <td>{element.phoneNumber}</td>
            <td style={{display:'flex'}}> <div><UpdateList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                updateList={props.updateList}
                handleChange={props.handleChange}></UpdateList></div>
                <div style={{paddingLeft:'1%'}}>
            
                <DeleteList 
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                deleteList={props.deleteList}></DeleteList></div>
            </td>
        </tr>)
    });
    return(
      
      /*----------------*/
      <div className="container">
        <div className="table-wrapper">
            <div className="table-title">

               
            </div>
            <table className=" location table table-striped table-hover results" style={{backgroundColor:'grey',color:'whitesmoke'}} id="location">
                <thead>
                    <tr>
                        <span>fjjsahjhajkhjds</span>
                    </tr>
                    <tr>
      
                        <th style={{paddingLeft:'3%'}}>Id</th>
                        <th>Name</th>
                        <th>surname</th>
      
                        <th>phoneNumber</th>
                        <th >  islemler</th>
                    </tr>
                </thead>
                {rows}
                <tbody>
                    
                   
     
                </tbody>
            </table>
   <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>100</b> entries</div>
                <ul className="pagination">
                    <li className="page-item"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" class="page-link">1</a></li>
                    <li className="page-item"><a href="#" class="page-link">2</a></li>
                    <li className="page-item active"><a href="#" class="page-link">3</a></li>
                    <li className="page-item"><a href="#" class="page-link">4</a></li>
                    <li className="page-item"><a href="#" class="page-link">5</a></li>
                    <li className="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Lists;