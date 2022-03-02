import { useEffect, useState, useCallback } from "react";
import loginGuard from "./loginGuard";
import Question from "./Question";

const fetchQuestion = () => {
    const question = fetch("/api/test").then((res) => {
        return res.json();
    });
    return question;
};

const postAnswer = (answerIndex) => {
    return fetch("/api/test", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ answerIndex }),
    }).then((res) => {
        return res.ok;
    });
};

const EnglishTest = () => {
    const [question, setQuestion] = useState({
        question: "loading",
        answers: ["loading", "loading", "loading", "loading"],
    });
    const [activeIndex, setActiveIndex] = useState(-1);
    const [result, setResult] = useState(null);

    const getCurrentQuestion = useCallback(() => {
        fetchQuestion().then((data) => {
            if (typeof data.good !== "undefined") {
                setResult(data.good);
            } else {
                setQuestion({ question: data.text, answers: data.answers });
            }
        });
    }, []);

    useEffect(() => {
        getCurrentQuestion();
    }, [getCurrentQuestion]);

    const onSelectAnswer = (index) => {
        setActiveIndex(index);
    };
    const onSubmitAnswer = () => {
        if (activeIndex === -1) {
            return;
        }
        postAnswer(activeIndex).then(() => {
            setActiveIndex(-1);
            getCurrentQuestion();
        });
    };
    if (result !== null) {
        return <h1>Good answers: {result}</h1>;
    }
    return (
        <div>
            <Question
                {...question}
                activeIndex={activeIndex}
                onSelectAnswer={onSelectAnswer}
                onSubmitAnswer={onSubmitAnswer}
            />
        </div>
    );
};

export default loginGuard(EnglishTest);
