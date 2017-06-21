/**
 * Created by pnaika on 5/23/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CoursesListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CoursesListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CoursesListRow;
