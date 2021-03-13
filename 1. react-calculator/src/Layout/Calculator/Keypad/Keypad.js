import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../../Components/Button/Button";

const Keypad = (props) => {
    return (
        <section className="keypad">
            <KeypadRow>
                <Button onButtonPressed={props.onButtonPressed}>C</Button>
                <Button onButtonPressed={props.onButtonPressed}>&larr;</Button>
                <Button onButtonPressed={props.onButtonPressed}>%</Button>
                <Button onButtonPressed={props.onButtonPressed}>/</Button>
            </KeypadRow>
            
            <KeypadRow>
                <Button onButtonPressed={props.onButtonPressed}>7</Button>
                <Button onButtonPressed={props.onButtonPressed}>8</Button>
                <Button onButtonPressed={props.onButtonPressed}>9</Button>
                <Button onButtonPressed={props.onButtonPressed}>*</Button>
            </KeypadRow>
            
            <KeypadRow>
                <Button onButtonPressed={props.onButtonPressed}>4</Button>
                <Button onButtonPressed={props.onButtonPressed}>5</Button>
                <Button onButtonPressed={props.onButtonPressed}>6</Button>
                <Button onButtonPressed={props.onButtonPressed}>-</Button>
            </KeypadRow>
            
            <KeypadRow>
                <Button onButtonPressed={props.onButtonPressed}>1</Button>
                <Button onButtonPressed={props.onButtonPressed}>2</Button>
                <Button onButtonPressed={props.onButtonPressed}>3</Button>
                <Button onButtonPressed={props.onButtonPressed}>+</Button>
            </KeypadRow>

            <KeypadRow>
                <Button onButtonPressed={props.onButtonPressed}>0</Button>
                <Button onButtonPressed={props.onButtonPressed}>.</Button>
                <Button onButtonPressed={props.onButtonPressed}>=</Button>
            </KeypadRow>
        </section>
    )
} 

export default Keypad;