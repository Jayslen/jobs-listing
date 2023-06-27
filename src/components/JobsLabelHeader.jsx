export function JobListHeader ({ job }) {
  return (
    <header className='flex flex-col gap-1'>
      <div className='flex items-center gap-1.5 [&>span]:text-sm [&>span]:px-3 [&>span]:py-[1px] [&>span]:rounded-full [&>span]:text-white [&>span]:font-bold'>
        <h3 className='text-[#5dadae] font-bold'>{job.company}</h3>
        {job.new ? <span className='bg-[#58a5a3]'>New!</span> : null}
        {job.featured ? <span className='bg-[#2b3a37]'>Feature</span> : null}
      </div>

      <h2 className='text-lg font-bold transition-colors hover:text-[#5dadae] cursor-pointer'>{job.position}</h2>

      <ul className='flex gap-2 [&>li]:text-gray-400'>
        <li>{job.postedAt}</li>
        <li>{job.contract}</li>
        <li>{job.location}</li>
      </ul>
    </header>
  )
}
