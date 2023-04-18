import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Item, List, Title, Wrapper } from "./styled";

const History = ({ history }) => {
    return (
        <Wrapper>
            <Title>History:</Title>
            <List>
                {history.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))}
            </List>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    history: state.history,
});

History.propTypes = {
    history: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(History);
