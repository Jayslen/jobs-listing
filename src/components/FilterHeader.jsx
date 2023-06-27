import ilustration from '../assets/images/bg-header-desktop.svg'
function LabelsTags ({ text, eraseElm }) {
  return (
    <div className='p-1'>
      <span
        className='bg-[#edf6f3] text-[#5dadae] font-bold px-2 py-2 cursor-pointer'
        onClick={eraseElm}
      >
        {text}
      </span>
      <span />
    </div>
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

  // clear all the labels
  const clearFilters = () => {
    labelsValue.slice(0, 2).forEach((elm) => {
      elm[1] = ''
    })
    labelsValue.slice(2).forEach((elm) => {
      elm[1] = []
    })

    updateFilters(Object.fromEntries(labelsValue))
  }
  return (
    <header
      className='h-52 bg-[#458586] mb-10'
      style={{
        backgroundImage: `url(${ilustration})`,
        backgroundSize: 'cover'
      }}

    >
      {Object.values(filtersLabel).join('')
        ? (
          <div className='max-w-xl bg-white relative top-44 m-auto flex items-center gap-2 px-2 py-2'>
            {labelsValue.slice(0, 2).map((content, index) => {
              {
                return content[1] !== ''
                  ? (
                    <LabelsTags text={content[1]} key={index} eraseElm={erase} />
                    )
                  : null
              }
            })}
            {labelsValue[3][1]?.map((item, index) => {
              return (
                <LabelsTags text={item} key={index} />
              )
            })}
            {labelsValue[2][1]?.map((item, index) => {
              return (
                <LabelsTags text={item} key={index} />
              )
            })}
            <p className='absolute right-5 cursor-pointer' onClick={clearFilters}>Clear</p>

          </div>
          )
        : null}
    </header>
  )
}
