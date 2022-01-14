interface props {
  definition: any
}

function TooltipItem({definition}: props) {
  const {date, definitions, pos, variation} = definition
  return (
    <section className="tooltip-item">
      <h3>{variation}</h3>
      <header>
        <p>Pos. {pos}</p>
        {date ? <p>Est. {date}</p> : null }
      </header>
      <ul className="definitions">
        {definitions.map((def: string, idx: number) => <li key={idx} className="definition">{def}</li> )}
      </ul>
    </section>
  )
}

export default TooltipItem;