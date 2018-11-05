import React from "react";
import Form from "./Form/Form";

class UserView extends React.Component {
    render() {
        const {

            setName,
            setSurname,
            setWeight,
            setHeight,

            name,
            surname,
            height,
            weight,

            addUser,
            shouldDisableSubmit

        } = this.props

        return (
            <React.Fragment>
                <Form

                    OnInputChangeName={setName}
                    OnInputChangeSurname={setSurname}
                    OnInputChangeWeight={setWeight}
                    OnInputChangeHight={setHeight}

                    inputValueName={name}
                    inputValueSurname={surname}
                    inputValueWeight={weight}
                    inputValueHight={height}

                    onSubmit={addUser}
                    shouldDisableSubmit={shouldDisableSubmit}

                />

            </React.Fragment>
        )
    }
}

export default UserView
