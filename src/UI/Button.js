import React from 'react'

class Button extends React.Component {
    render() {
        const { onClick, disabled} = this.props

        return (
            <button
                className="btn"
                type="button"
                onClick={onClick}
               // disabled={disabled}
                >
                {this.props.children}
            </button>
        )
    }
}

export default Button