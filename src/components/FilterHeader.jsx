import ilustration from '../assets/images/bg-header-desktop.svg'

export function FilterHeader () {
  return (
    <header className='h-32 bg-[#458586]' style={{ backgroundImage: `url(${ilustration})`, backgroundSize: 'cover' }}>
      <div className='w-3/4 h-10 bg-white relative top-24 m-auto' />
    </header>

  )
}
