import React, {useState} from 'react';
import Counter from "./counter";

const Counters = () => {
    const initialState = [
        {value: 0, id: 1, name: "Ложка"},
        {value: 0, id: 2, name: "Вилка"},
        {value: 0, id: 3, name: "Тарелка"},
        {value: 0, id: 4, name: "Стартовый набор минималиста"},
        {value: 0, id: 5, name: "Ненужные вещи"},
    ]
    const [counters, setCounters] = useState(initialState);
    const handleReset = () => {
        return setCounters(initialState);
    }

    const handleDelete = (counterId) => {
        const newCounters = counters;
        return setCounters(newCounters.filter(counter => counter.id !== counterId));
    }


    const handleIncrement = (counterId) => {
        const newCounters = counters.map(counter => {
            if(counter.id === counterId) {
                return {...counter, value: counter.value += 1};
            }
            return counter;
        })

        setCounters(newCounters);
    }
    const handleDecrement = (counterId) => {
        const newCounter = counters.map(counter => {
            if(counter.id === counterId) {
                if(counter.value <= 0) {
                    return counter
                }
                return {...counter, value: counter.value -= 1};
            }
            return counter;
        })
        setCounters(newCounter);
    }

    return (
        <div>
            <button className={"btn btn-primary btn-sm m-2"} onClick={() => handleReset()}>Сброс</button>
            {counters.map(counter => (
                <Counter key={counter.id} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement}{...counter}/>
            ))}
        </div>
    );
};

export default Counters;