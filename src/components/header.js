// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// -> Css in JS | SYLE für <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     color: '#010101',
//     backgroundColor: '#f2f2f2'
// }

export default Header