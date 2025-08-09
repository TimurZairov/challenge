import { background } from "../../assets/images";
import { LoginForm, Profile } from "../../features";



export function MainPage() {

  return (
    <section className='relative bg-gradient-to-l from-custom-light-bg to-custom-dark-bg inset-0 bg-cover bg-center h-screen w-full'>
      <img src={ background } alt="#" className='absolute bg-cover bg-center h-screen w-full'/>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <LoginForm/> */}
          <Profile/>
        </div>
    </section>
  )
}
