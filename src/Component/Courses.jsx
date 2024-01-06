export default function CoursesList({courses}){


    return(
        <ol>
            {courses.map(item => <li key={item}>{item}</li>)}
        </ol>
    )
}