const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({ parts }) => {
  parts.map((part) =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
    </>
  )
}

export default Course
