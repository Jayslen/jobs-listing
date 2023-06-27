import { FilterHeader } from './components/FilterHeader'
import { JobsList } from './components/JobsLabel'
import { useFilter } from './hooks/useFilterJobs'

function App () {
  const { filterJobs, filters, setFilters, methods } = useFilter()
  return (
    <>
      <main className=' w-full font-Spartan'>
        <FilterHeader filtersLabel={filters} updateFilters={setFilters} />
        <section className='grid place-content-center'>
          <JobsList data={filterJobs()} methods={methods} />
        </section>
      </main>
    </>
  )
}

export default App
