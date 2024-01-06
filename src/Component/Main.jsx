import "./Main.css";
import { useState } from "react";
import SearchBar from "./Search";
import CoursesList from "./Courses";
export default function Main() {

    const [courseList, setCourseList] = useState([])


  return (
    <>
      <h1>CourseSearcher</h1>

      <main>
        <SearchBar setCourseList={setCourseList} Searchstyle="searchbar" />
        <hr />
        <div>
          <CoursesList courses={courseList}/>
        </div>
      </main>
    </>
  );
}
