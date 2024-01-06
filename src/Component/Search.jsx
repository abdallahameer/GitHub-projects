export default function SearchBar({ searchstyle, setCourseList }) {
  function addcourse(event) {
    event.preventDefault()
    const course = event.target.elements.course.value;
    console.log(course);
    setCourseList(prev => [...prev, course])

  }

  return (
    <form onSubmit={addcourse}>
      <input id="course" className={searchstyle} type="text" placeholder="SearchForCourses" />
      <button type="submit">Add a new course</button>
    </form>
  );
}
