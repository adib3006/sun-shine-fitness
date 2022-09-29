import React from 'react';
import './Questions.css';

const Question = () => {
    return (
        <div>
            <h1 className='q-title'>Question-Answer Section</h1>
            <hr className='hr'/>
            <div className='box'>
                <h2>How does React works?</h2>
                <p>React is the most popular JavaScript library in present time. It is used to make interactive UI without much of a trouble. React creates a virtual DOM to keep track of the changes and instead of reloading the full page it just reloads that specific part which is changes. It uses some powerful hooks to update the states and many more. JSX is used to write html part and babel compiler translates those into more machine readable format.</p>
            </div>
            <div className='box'>
                <h2>Props vs States?</h2>
                <p>Props are lie properties for a component. State is more like a local variable which is only accessible inside that component on which it is declared. On the other hand props give the power to pass some properties as well as functions, even the states, from parent componenet to child. States can be updated based on their necessity but props are not editable.</p>
            </div>
            <div className='box'>
                <h2>What works do useEffect does without data load?</h2>
                <p>Data fetching is not the only work that useEffect does. useEffect performs side effects in functional components. It runs by default after first render and every update. It can also manually manipulate DOM and set up subscriptions. It has a dependency list. One can tell useEffect when it needs to re-render through dependencies.</p>
            </div>
        </div>
    );
};

export default Question;