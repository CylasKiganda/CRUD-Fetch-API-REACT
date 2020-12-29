import React from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        name: "",
        surname: "",
        phoneNumber:""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }




  
  getLists() {
    this.setState({ loading: true }, () => {
      fetch("https://5fe757ae010a6700178037e0.mockapi.io/api/crud/users")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var name = this.state.singledata.name;
    var surname = this.state.singledata.surname;
    var phoneNumber = this.state.singledata.phoneNumber;
    if (event.target.name === "name") name = event.target.value;
    else if (event.target.name === "surname") surname = event.target.value;
    else  phoneNumber = event.target.value;


   // else phoneNumber = event.target.value;

    this.setState({
      singledata: {
        name: name,
        surname: surname,
        phoneNumber:phoneNumber
      }
    });
  }

  createList() {
    fetch("https://5fe757ae010a6700178037e0.mockapi.io/api/crud/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
        name: "",
        surname: "",
        phoneNumber:""
        }
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          name: "...",
        surname: "...",
        phoneNumber:"..."
        }
      },
      () => {
        fetch("https://5fe757ae010a6700178037e0.mockapi.io/api/crud/users/" + id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                name: result.name,
                
                surname: result.surname ? result.surname : "",
                phoneNumber: result.phoneNumber
              }
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("https://5fe757ae010a6700178037e0.mockapi.io/api/crud/users/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
            surname: "",
            phoneNumber:""
          }
        });
        this.getLists();
      });
  }

  deleteList(event, id) {
    fetch("https://5fe757ae010a6700178037e0.mockapi.io/api/crud/users/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
        surname: "",
        phoneNumber:""
          }
        });
        this.getLists();
      });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container" style={{marginTop:'5%'}}>
        <span className="title-bar">
          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
  componentDidMount() {
    this.getLists();
    //this.timer = setInterval(() => this.getLists(), 1000);
}
}

export default App;
