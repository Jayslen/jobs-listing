export function JobsLabelTools ({ job, methods }) {
  const roleUpdate = (event) => {
    methods.role(event.target.textContent)
  }

  const levelUpdate = (event) => {
    methods.level(event.target.textContent)
  }
  return (
    <article>
      <ul className='flex gap-2'>
        <li className='toolsLi' onClick={roleUpdate}>{job.role}</li>
        <li className='toolsLi' onClick={levelUpdate}>{job.level}</li>
        {/* <ToolsLi text={job.level} /> */}
        {/* {job.languages?.map((lang, index) => {
          return (
            <ToolsLi text={lang} key={index} />
          )
        })}
        {job.tools?.map((tool, index) => {
          return (
            <ToolsLi text={tool} key={index} />
          )
        })} */}
      </ul>
    </article>
  )
}
