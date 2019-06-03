import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class CourseAdminPage extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                            Course Administration
                            </div>
                        </div>
                    </div>
                </div>
                  
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(CourseAdminPage);