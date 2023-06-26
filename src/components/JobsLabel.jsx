// function ToolsLi ({text}) {
//     return (
        
//     )
// }


function JobsLabel({job}) {
    return (
        <li className='w-full flex justify-between items-center bg-white shadow-2xl rounded-xl px-2 py-5'>

        <article className='flex items-center gap-2'>

          <img src={job.logo} alt={job.company + 'logo'} className='w-20 h-20'/>
          <header className='flex flex-col gap-1'>
            <div className='flex items-center gap-1.5 [&>span]:text-sm [&>span]:px-3 [&>span]:py-[1px] [&>span]:rounded-full [&>span]:text-white [&>span]:font-bold'>
              <h3 className='text-[#5dadae] font-bold'>{job.company}</h3>
              {job.new ? <span className='bg-[#58a5a3]'>New!</span> : null}
              {job.featured ? <span className='bg-[#2b3a37]'>Feature</span> : null}
            </div>

            <h2 className='text-xl font-bold'>{job.position}</h2>

            <ul className='flex gap-2 [&>li]:text-gray-400'>
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </header>
        </article>

        <article>
          <ul className='flex'>
            <li className='px-3 py-2 bg-[#c0d9d9] text-[#5dadae] rounded-md font-semibold'>{job.role}</li>
            <li>{job.level}</li>
            {job.languages?.map((lang, index) => {
              return (
                <li key={index}>{lang}</li>
                )
            })}
            {job.tools?.map((tool) => {
              return (
                <li>{tool}</li>
              )
            })}


          </ul>
        </article>

      </li>
    )
}

export function JobsList({data}) {
    return (
        <ul>
            <JobsLabel jobs={data}/>
        </ul>
    )
}