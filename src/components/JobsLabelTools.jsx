export function JobsLabelTools ({ job, methods }) {
  const roleUpdate = (event) => {
    methods.role({ role: event.target.textContent })
  }
  const levelUpdate = (event) => {
    methods.level({ level: event.target.textContent })
  }
  const languagesUpdate = (event) => {
    methods.languages({ lang: event.target.textContent })
  }
  const toolsUpdate = (event) => {
    methods.tools({ tools: event.target.textContent })
  }

  return (
    <article>
      <ul className='flex flex-wrap gap-2'>
        <li className='toolsLi' onClick={roleUpdate}>{job.role}</li>
        <li className='toolsLi' onClick={levelUpdate}>{job.level}</li>
        {job.languages?.map((lang, index) => {
          return (
            <li className='toolsLi' key={index} onClick={languagesUpdate}>{lang}</li>
          )
        })}
        {job.tools?.map((tool, index) => {
          return (
            <li className='toolsLi' key={index} onClick={toolsUpdate}>{tool}</li>
          )
        })}
      </ul>
    </article>
  )
}
