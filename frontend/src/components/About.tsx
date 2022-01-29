import Credits from "./Credits"

function About() {
  return (
    <>
      <h1>
        <span>Spelling Bee Solver</span>
        <Credits />
      </h1>
      <p className='instructions'>
        Use this tool to un-scramble letters in words.
        Add the required letter in the <span>yellow</span> space.
        Note that each character must be unique.
        Returned words displayed as a yellow <span>pill</span> use all letters provided.
      </p>
    </>
  )
}

export default About;