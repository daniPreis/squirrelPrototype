import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

class Form extends React.Component {
    render() {
        const {
            OnInputChangeName,
            OnInputChangeSurname,
            OnInputChangeWeight,
            OnInputChangeHight,

            inputValueName,
            inputValueSurname,
            inputValueWeight,
            inputValueHight,

            onSubmit,
            onShow,
            shouldDisableSubmit
        } = this.props

        return (
            <form className="user-form">
                Name:
                <Input
                    type="text"
                    placeholder="Enter Name"
                    value={inputValueName}
                    onChange={OnInputChangeName}/>
                <br/>
                Surname:
                <Input
                    type="text"
                    placeholder="Enter Surame"
                    value={inputValueSurname}
                    onChange={OnInputChangeSurname}/>
                <br/>
                Weight:
                <Input
                    type="text"
                    placeholder={"Enter Weight"}
                    value={inputValueWeight}
                    onChange={OnInputChangeWeight}/>
                <br/>
                Height:
                <Input
                    type={"text"}
                    placeholder="Enter Height"
                    value={inputValueHight}
                    onChange={OnInputChangeHight}/>
                <br/>
                <Button
                    onClick={onSubmit}
                   disabled={shouldDisableSubmit}
                    >
                    Erstellen
                </Button>
                <Button
                    onClick={onShow}

                >
                    Anzeigen
                </Button>
            </form>
        )
    }
}

export default Form