import React from "react";
import UserView from "./UserView";
import axios from 'axios';

class UserController extends React.Component {
    state = {
        pokemonImage: '1.gif',
        pokemonName: '',

        name: '',
        surname: '',
        height: '',
        weight: '',

        finalValue: '',
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setSurname = (e) => {
        this.setState({surname: e.target.value})
    }

    setWeight = (e) => {
        this.setState({weight: e.target.value})
    }

    setHeight = (e) => {
        this.setState({height: e.target.value})
    }


    clearAll = () => {
        this.setState({name: ''})
        this.setState({surname: ''})
        this.setState({height: ''})
        this.setState({weight: ''})
    }

    postData = () => {

        fetch('http://localhost:8080/person', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:
                JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                height: parseInt( this.state.height),
                wheight: parseFloat(this.state.weight)
            })

        })
    }

    getData = () => {
        axios.get('http://localhost:8080/person?surname=Mustermann&name=${this.state.name}&weight=60&height=160')
            .then(response => this.setState({finalValue: response.data.name}))
    }
    addUser = () => {
        this.postData();
        this.getData();
        alert("Benutzer hinzugefügt" + this.state.finalValue);
        this.clearAll();
    }

    render() {

        return (
            <UserView
                setName={this.setName}
                setSurname={this.setSurname}
                setWeight={this.setWeight}
                setHeight={this.setHeight}


                name={this.state.name}
                surname={this.state.surname}
                height={this.state.height}
                weight={this.state.weight}

                addUser={this.addUser}
                // shouldDisableSubmit={!this.state.name}
            />
        )
    }
}

export default UserController