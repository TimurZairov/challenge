import { background } from '../../assets/images';
import { LoginForm } from '../../features';

export function MainPage() {
  return (
    <section className="from-custom-light-bg to-custom-dark-bg relative inset-0 h-screen w-full bg-gradient-to-l bg-cover bg-center">
      <img src={background} alt="#" className="absolute h-screen w-full bg-cover bg-center" />
      <div className="absolute inset-0 flex items-center justify-center">
        <LoginForm />
        {/* <Profile /> */}
      </div>
    </section>
  );
}
