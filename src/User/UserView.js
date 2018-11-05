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
            showUser,
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
                    onShow={showUser}
                    shouldDisableSubmit={shouldDisableSubmit}

                />

            </React.Fragment>
        )
    }
}

export default UserView
