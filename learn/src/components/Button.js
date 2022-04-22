
const Button = ({color,text}) => {
var c = 0
const onClick = (e) => {
    //c++
    console.log(e)
    console.log(c)
}
  return (
    <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
  )
}
Button.defaultProps = {
    color: 'steelblue',
}

export default Button
