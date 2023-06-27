import { JobListHeader } from './JobsLabelHeader'
import { JobsLabelTools } from './JobsLabelTools'

// Job Label LI Elm.
function JobsLabel ({ job, methods }) {
  return (
    <li className={`w-full flex flex-col bg-white shadow-2xl rounded-md px-2 py-4 pt-8 relative md:flex-row md:items-center md:justify-between md:pt-4 ${job.featured ? 'border-l-4 border-l-[#458586]' : null}`}>
      <article className='flex items-center gap-2'>
        <img src={job.logo} alt={job.company + 'logo'} className='w-12 h-12 absolute -top-5 md:static md:w-16 md:h-16' />
        <JobListHeader job={job} />
      </article>
      <JobsLabelTools job={job} methods={methods} />
    </li>
  )
}

export function JobsList ({ data, methods }) {
  return (
    <ul className='flex flex-col gap-5 md:max-w-3xl'>
      {data?.map((jobs) => {
        return (
          <JobsLabel key={jobs.id} job={jobs} methods={methods} />
        )
      })}
    </ul>
  )
}

// w-[768px]
