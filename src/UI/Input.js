import React from 'react'

class Input extends React.Component {
    render() {
        const { placeholder, value, onChange } = this.props

        return (
            <input
                className="input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        )
    }
}

export default Input