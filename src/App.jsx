import './App.css'
import NavBar from './components/NavBar'
import Social from './components/Social'
import AvatarMundev from '/src/assets/mudevux-avatar.svg'


function App() {

  const socialLinks= [
    { title: "Twitter", path: "https://twitter.com/MundevUx" },
    { title: "Linkedin", path: "https://www.linkedin.com/in/cacuitiva/" },
    { title: "Github", path: "https://github.com/mundevux"}
  ]
    return (
    <>
      <NavBar />
      <section className="grid grid-cols-2 place-items-center mt-6 lg:mt-12">
        <div className=" col-span-2 lg:col-span-1">
          <img src={AvatarMundev} className='w-[1024px] lg:-mt-10' ></img>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className='pb-6 text-center lg:text-start'>
              <h1 className="text-2xl md:text-4xl font-semibold text-secondary">Hi 👋! I&apos;m Camilo</h1>
              <p className="text-4xl md:text-6xl font-bold text-primary">Junior<br></br>Web Developer<br></br>& UX/UI Designer</p>
            </div>
            <div className='flex justify-center lg:justify-start'>
              { socialLinks.map((link, index) => (
                <Social key={index} url={link.path} label={link.title} />
              )) }
            </div>
          </div>
      </section>  

    </>
  )
}

export default App
