const Button = (props) => {
    return (
        <button onClick={props.onButtonPressed}>{props.children}</button>
    )
}

export default Button;