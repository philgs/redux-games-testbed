import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const Counter = function( props ) {
    return (
        <div>
            <p>Counter value: { props.value }</p>
            <p><button onClick={ props.handleClick }>+</button></p>
        </div>
    );
};

Counter.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

const mapStateToProps = function( state ) {
    return {
        id: state.getIn( ['counters', 0, 'id' ] ),
        value: state.getIn( ['counters', 0, 'value' ] )
    }
};

const mapDispatchToProps = function( dispatch ) {
    return {
        handleClick: function() {
            dispatch( actions.increment() );
        }
    }
};

const CounterContainer = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default CounterContainer;
