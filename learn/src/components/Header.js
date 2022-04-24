import Button  from "./Button"
//import PropTypes from 'prop-types'
const Header = ({onAdd,title,showAdd}) => {
  
    return (
      <header className = 'header'>
        <h1>{title}</h1> 
        <Button  onClick = {onAdd} color = {showAdd ? 'red' : 'green'} text =  {showAdd ? 'Close' : 'Add'}  />
      </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header
  