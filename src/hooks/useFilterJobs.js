import { useState, useRef } from 'react'
import data from '../mocks/data.json'

export function useFilter () {
  const [filters, setFilters] = useState({ role: '', level: '', tools: '', lang: '' })
  const previusFilters = useRef(filters)
  previusFilters.current = filters

  const filterJobs = () => {
    return data.filter((item) => {
      return (
        (filters.level ? item.level.includes(filters.level) : true) &&
        (filters.lang ? item.languages.includes(filters.lang) : true) &&
        (filters.role ? item.role.includes(filters.role) : true) &&
        (filters.tools ? item.tools.includes(filters.tools) : true)
      )
    })
  }
  //   console.log(previusFilters.current)
  const updatedRole = ({ role }) => {
    setFilters({ role, level: previusFilters.current.level, tools: previusFilters.current.tools, lang: previusFilters.current.lang })
  }

  const updateLevel = ({ level }) => {
    setFilters({ role: previusFilters.current.role, level, tools: previusFilters.current.tools, lang: previusFilters.current.lang })
  }

  return { filterJobs, filters, setFilters, updatedRole, updateLevel }
}
