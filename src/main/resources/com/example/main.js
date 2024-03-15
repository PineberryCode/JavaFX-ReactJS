const {useState, useEffect} = React;

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function Tick() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId)
    }, []);
    
    return (
        <div className="container p-5">
            <h6 style={{color: '#fff'}}> It is {time}</h6>
        </div>
    );

}

function Counter() {
    const [current, setCurrent] = useState(0);
    
    function increment() { 
        if (current >= 0) {
            document.getElementById('btn-d').disabled = false;
        }
        setCurrent(current+1); 
    }

    function decrease() { 
        if (current > 0) {
            setCurrent(current-1);
        } else {
            document.getElementById('btn-d').disabled = true;
        }
    }

    return (
        <div className="container justify-content-center pt-5">
            <h3 style={{color: '#fff'}} >{current}</h3>
            <CompoBtn 
            id="btn-d"
            type="button"
            className="btn btn-danger me-5"
            onClick={decrease}
            text="Decrease"
            />
            <CompoBtn 
            id="btn-i"
            type="button"
            className="btn btn-success"
            onClick={increment}
            text="Increment"
            />
        </div>
    );
}

const CompoBtn = ({
    id,
    type,
    className,
    onClick,
    text
}) => {
    return (
        <button
        id={id}
        type={type}
        className={className}
        onClick={onClick}
        style={{fontWeight: 'bold'}}
        >
        {text}
        </button>
    );
}

root.render(
    <>
        <Counter />
        <Tick />
    </>
);