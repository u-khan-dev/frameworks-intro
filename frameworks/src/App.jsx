import './App.css';
import Header from './Header';

const App = () => {
    return (
        <>
            <Header />
            <div id="container">
                <h1 className="main-header"> Hello, World! </h1>
                <p id="first-paragraph"> This is a React application. </p>
            </div>
        </>
    );
};

export default App;
