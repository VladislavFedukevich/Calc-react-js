import React from "react";
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

export default connect(mapStateToProps)(History);
