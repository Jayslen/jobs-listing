import { useState, useRef } from 'react'
import data from '../mocks/data.json'

export function useFilter () {
  const [filters, setFilters] = useState({ role: '', level: '', tools: [], lang: [] })
  const previusFilters = useRef(filters)
  previusFilters.current = filters

  const filterJobs = () => {
    return data.filter((item) => {
      return (
        (filters.level ? item.level.includes(filters.level) : true) &&
        (filters.role ? item.role.includes(filters.role) : true) &&
        (filters.lang !== []
          ? filters.lang.every((langs) => {
            return item.languages.includes(langs)
          })
          : true) &&
        (filters.tools !== []
          ? filters.tools.every((tool) => {
            return item.tools.includes(tool)
          })
          : true)
      )
    })
  }
  const methods = {
    role: ({ role }) => {
      setFilters({ role, level: previusFilters.current.level, tools: previusFilters.current.tools, lang: previusFilters.current.lang })
      filterJobs()
    },
    level: ({ level }) => {
      setFilters({ role: previusFilters.current.role, level, tools: previusFilters.current.tools, lang: previusFilters.current.lang })
      filterJobs()
    },
    languages: ({ lang }) => {
      if (lang === previusFilters.current.lang[previusFilters.current.lang.length - 1]) return
      const newLang = previusFilters.current.lang
      newLang.push(lang)
      setFilters({ role: previusFilters.current.role, level: previusFilters.current.level, tools: previusFilters.current.tools, lang: newLang })
      filterJobs()
    },
    tools: ({ tools }) => {
      if (tools === previusFilters.current.tools[previusFilters.current.tools.length - 1]) return
      const newTools = previusFilters.current.tools
      newTools.push(tools)
      setFilters({ role: previusFilters.current.role, level: previusFilters.current.level, tools: newTools, lang: previusFilters.current.lang })
      filterJobs()
    }
  }

  return { filterJobs, filters, setFilters, methods }
}
