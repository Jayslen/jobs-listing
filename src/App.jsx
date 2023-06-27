import { FilterHeader } from './components/FilterHeader'
import { JobsList } from './components/JobsLabel'
import { useFilter } from './hooks/useFilterJobs'

function App () {
  const { filterJobs, filters, setFilters, methods } = useFilter()
  return (
    <>
      <main className='font-Spartan'>
        <FilterHeader filtersLabel={filters} updateFilters={setFilters} />
        <section className='px-3  md:grid md:place-content-center mt-2'>
          <JobsList data={filterJobs()} methods={methods} />
        </section>
      </main>
    </>
  )
}

export default App
