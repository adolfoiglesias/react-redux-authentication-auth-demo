import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { courseActions } from '../actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.findAll();
    }

    render() {
        const { user, course } = this.props;
        return (
            <div className="col-md-9 col-md-offset-3">
                <h3>Hi {user.name}!</h3>
                <p>You're logged in with React & JWT!!</p>
                <h3>Courses form Api:</h3>
                {course.error && <span className="text-danger">ERROR: {course.msg}</span>}
                {course.courses &&
                    <ul>
                        {course.courses.map((c, index) =>
                            <li key={c.id}>
                                {c.code + ' ' + c.name}
                            </li>
                        )}
                    </ul>
                }
               
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { course, authentication } = state;
    const { user } = authentication;

    console.log("course" + course)
    return {
        user,
        course
    };
}

const {findAll} = courseActions;
const connectedHomePage = connect(mapStateToProps, {findAll})(HomePage);
export { connectedHomePage as HomePage };