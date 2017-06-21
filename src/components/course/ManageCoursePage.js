import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../action/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;

    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourses(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course Saved');
    this.context.router.push('/courses')
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={this.props.authors}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors : PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if(course) { return course[0] }
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps : ',ownProps);
  console.log('state : ',state);

  const courseId = ownProps.params.id;

  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    catagory: ''
  };

  if(courseId && state.courses.length) {
    course = getCourseById(state.courses, courseId)
  }

  const authorsFormatttedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormatttedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
