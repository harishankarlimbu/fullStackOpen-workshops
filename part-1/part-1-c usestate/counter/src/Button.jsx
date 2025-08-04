function Button({label,callFunc}){
    return (
<button onClick={callFunc }> {label} </button>
    )
}
export default Button;