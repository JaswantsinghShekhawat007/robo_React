import React from 'react';
import CardList from '../React Components/CardList';
import SearchBox from '../React Components/SearchBox';
import './App.css';
import ErrorBoundary from '../React Components/ErrorBoundary';
import Scroll from '../React Components/Scroll';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{ 
           return response.json(); 
        })
        .then(users => {
            return this.setState({robots: users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        
        return !robots.length ?
            <div className='tc'> <h1>Loading....</h1> </div> :
            (   <div className='tc'>
                    <h1 className='f1'>Really!!! My Friends Are Robo</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;