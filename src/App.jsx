import { FilterHeader } from './components/FilterHeader';
import { JobsList } from './components/JobsLabel';
import { useFilter } from './hooks/useFilterJobs';
import data from './mocks/data.json';

function App() {
  const {filterJobs, updatedRole } = useFilter()

  const changeRole = ({role}) => {
    updatedRole({role})
    filterJobs()
  }

  return (
    <>
    <button onClick={changeRole}>hello change role</button>
      <main className=" w-full font-Spartan">
        {/* <FilterHeader/> */}
        <section className="grid place-content-center">
          <JobsList data={filterJobs()} updateRole={changeRole}/>
        </section>
      </main>
    </>
  );
}

export default App;
