const Question = (props) => {
    // console.log(props.answers);
    return (
        <>
            <h1>{props.question}</h1>
            <ul>
                {props.answers.map((answer, i) => {
                    return props.activeIndex === i ? (
                        <li
                            style={{ color: "blue" }}
                            key={i}
                            onClick={() => {
                                props.onSelectAnswer(i);
                            }}
                        >
                            {answer}
                        </li>
                    ) : (
                        <li
                            key={i}
                            onClick={() => {
                                props.onSelectAnswer(i);
                            }}
                        >
                            {answer}
                        </li>
                    );
                })}
            </ul>
            <button onClick={props.onSubmitAnswer}>Send</button>
        </>
    );
};

export default Question;
