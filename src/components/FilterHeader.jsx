import ilustration from '../assets/images/bg-header-desktop.svg'

function LabelsTags ({ text, eraseElm }) {
  return (
    <span
      className='bg-[#edf6f3] text-[#5dadae] font-bold px-2 py-1 cursor-pointer'
      onClick={eraseElm}
    >
      {text}
    </span>
  )
}

// function to add and remove the label of the filter, also update the state
export function FilterHeader ({ filtersLabel, updateFilters }) {
  const labelsValue = Object.entries(filtersLabel)
  const erase = (event) => {
    const index = labelsValue.findIndex((elm) => {
      return elm.includes(event.target.textContent)
    })
    labelsValue[index][1] = ''
    updateFilters(Object.fromEntries(labelsValue))
  }

  return (
    <header
      className='h-32 bg-[#458586] mb-10'
      style={{
        backgroundImage: `url(${ilustration})`,
        backgroundSize: 'cover'
      }}
    >
      {Object.values(filtersLabel).join('')
        ? (
          <div className='max-w-xl bg-white relative top-24 m-auto flex items-center gap-2 px-2 py-2'>
            {labelsValue.map((content, index) => {
              {
                return content[1] !== ''
                  ? (
                    <LabelsTags text={content[1]} key={index} eraseElm={erase} />
                    )
                  : null
              }
            })}
          </div>
          )
        : null}
    </header>
  )
}
