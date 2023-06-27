// Tools list elm
function ToolsLi ({ text, update }) {
  const updatedRole = (event) => {
    update({role : event.target.textContent})
  }
  return (
    <li className='px-3 py-2 bg-[#c0d9d9] text-[#5dadae] rounded-md font-semibold cursor-pointer transition-all hover:bg-[#5ea3a3] hover:text-white' onClick={update ? updatedRole : null}>{text}</li>
  )
}

export function JobsLabelTools ({ job, updateRole }) {
  return (
    <article>
      <ul className='flex gap-2'>
        <ToolsLi text={job.role} update={updateRole}/>
        <ToolsLi text={job.level} />
        {job.languages?.map((lang, index) => {
          return (
            <ToolsLi text={lang} key={index} />
          )
        })}
        {job.tools?.map((tool, index) => {
          return (
            <ToolsLi text={tool} key={index} />
          )
        })}
      </ul>
    </article>
  )
}
