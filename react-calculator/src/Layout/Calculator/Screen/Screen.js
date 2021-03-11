import ComputationScreen from "./ComputationScreen/ComputationScreen";
import ResultScreen from "./ResultScreen/ResultScreen";

const Screen = (props) => {
    return (
        <div className="screen">
            <ResultScreen>{props.result}</ResultScreen>
            <ComputationScreen>{props.equation}</ComputationScreen>
        </div>
    )
}

export default Screen;