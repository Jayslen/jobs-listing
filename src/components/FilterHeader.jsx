import { useRef } from 'react'
import ilustration from '../assets/images/bg-header-desktop.svg'
import { IconX } from '@tabler/icons-react'
function LabelsTags ({ text, eraseElm }) {
  const textRef = useRef()
  const removeItem = () => {
    eraseElm({ value: textRef.current.textContent })
  }
  return (
    <div className='p-0 md:p-1 flex'>
      <span
        ref={textRef}
        className='bg-[#edf6f3] text-[#5dadae] font-bold p-1 md:p-2 cursor-pointer rounded-l-sm'
      >
        {text}
      </span>
      <span className='bg-[#609f9e] rounded-r-sm p-1 cursor-pointer hover:bg-[#293938] transition-colors md:px-3 md:py-2' onClick={removeItem}><IconX color='white' stroke={3} width={18} /></span>
    </div>
  )
}

// function to add and remove the label of the filter, also update the state
export function FilterHeader ({ filtersLabel, updateFilters }) {
  const labelsValue = Object.entries(filtersLabel)

  // remove levelTag or rol
  const erase = ({ value }) => {
    const index = labelsValue.findIndex((elm) => {
      return elm.includes(value)
    })
    labelsValue[index][1] = ''
    updateFilters(Object.fromEntries(labelsValue))
  }

  // help function to remove tags
  const removeToolsLang = ({ arrIndex, value }) => {
    const index = labelsValue[arrIndex][1]?.findIndex((elm) => {
      return elm.includes(value)
    })
    labelsValue[arrIndex][1]?.splice(index)
    updateFilters(Object.fromEntries(labelsValue))
  }

  // remove languageTag or tool
  const remove = ({ value }) => {
    if (labelsValue[3][1]?.includes(value)) {
      removeToolsLang({ arrIndex: 3, value })
    } else if (labelsValue[2][1]?.includes(value)) {
      removeToolsLang({ arrIndex: 2, value })
    }
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
    <>
    <header
      className='h-52 bg-[#458586] px-3'
      style={{
        backgroundImage: `url(${ilustration})`,
        backgroundSize: 'cover'
      }}

    ></header>
      {Object.values(filtersLabel).join('')
        ? (
          <div className='max-w-2xl mx-3 bg-white relative -top-5 flex items-center gap-8 px-4 py-2 rounded-sm md:mx-auto'>
            <div className='flex flex-wrap grow gap-1'>
              {labelsValue.slice(0, 2).map((content, index) => {
                {
                  return content[1] !== ''
                    ? (
                      <LabelsTags text={content[1]} key={index} eraseElm={erase} />
                      )
                    : null
                }
              })}

              {/* tools tags */}
              {labelsValue[3][1]?.map((item, index) => {
                return (
                  <LabelsTags text={item} key={index} eraseElm={remove} />
                )
              })}
              {/* languages tool */}
              {labelsValue[2][1]?.map((item, index) => {
                return (
                  <LabelsTags text={item} key={index} eraseElm={remove} />
                )
              })}
            </div>
            <p className='cursor-pointer font-medium hover:text-[#609f9e] hover:underline' onClick={clearFilters}>Clear</p>
          </div>
          )
        : null}
  </>
  )
}
