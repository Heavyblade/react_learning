import React, {PropType} from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import PropTypes from 'prop-types';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {course: {title: ""}};

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave   = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return(<div key={index}>{course.title}</div>);
  }

  render() {
    return(
      <div>
        <h1>This is courses page</h1>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h1>Add Courses</h1>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }

}

CoursePage.propTypes = {
  courses:  PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => { dispatch(courseActions.createCourse(course)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
