import { JobListHeader } from './JobsLabelHeader'
import { JobsLabelTools } from './JobsLabelTools'

// Job Label LI Elm.
function JobsLabel ({ job, methods }) {
  return (
    <li className='w-full flex justify-between items-center bg-white shadow-2xl rounded-md px-2 py-5'>
      <article className='flex items-center gap-2'>
        <img src={job.logo} alt={job.company + 'logo'} className='w-16 h-16' />
        <JobListHeader job={job} />
      </article>
      <JobsLabelTools job={job} methods={methods} />
    </li>
  )
}

export function JobsList ({ data, methods }) {
  return (
    <ul className='flex flex-col gap-5 max-w-3xl'>
      {data?.map((jobs) => {
        return (
          <JobsLabel key={jobs.id} job={jobs} methods={methods} />
        )
      })}
    </ul>
  )
}
