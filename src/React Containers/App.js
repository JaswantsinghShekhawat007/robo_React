import React from 'react';
import { connect } from 'react-redux';
import CardList from '../React Components/CardList';
import SearchBox from '../React Components/SearchBox';
import './App.css';
import ErrorBoundary from '../React Components/ErrorBoundary';
import Scroll from '../React Components/Scroll';

import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField : state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch( requestRobots() )
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange,robots, isPending } = this.props ;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? 
            <div className='tc'> <h1>Loading....</h1> </div> :
            (   <div className='tc'>
                    <h1 className='f1'>Really!!! My Friends Are Robots</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
