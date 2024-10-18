import Contact from "./Contact";
import Skills from "./Skills";

export default function Grid() {
  return (
    <div className="relative text-white grid sm:grid-cols-2 gap-4 p-4 sm:p-14">
      <div className="flex flex-col justify-center rounded-3xl row-span-2 sm:col-span-2 lg:col-span-1 p-4 sm:p-14 bg-pattern bg-no-repeat bg-center border border-white/[0.1]">
        <div className="text-lg lg:text-3xl font-semibold text-lg p-4 flex justify-center">
          <h2 className="text-purple items-center">Who am I?</h2>
        </div>
        <div className="space-y-4 min-h-60">
          <p>I'm Percy, and I love building things that live on the internet! 
            I am a self-taught Front End Software Engineer with an education in Mathematics and Education, and a passion for building dynamic and user-friendly web applications and intuitive solutions. 
            I enjoy working on challenging projects that push me to learn and grow, whether it is collaborating with teams or building solutions independently. 
            If you are looking for a developer who is passionate, adaptable, and skilled in building efficient, scalable applications, feel free to check out my portfolio or reach out to me directly!</p>
        </div>
      </div>

      <div className="rounded-3xl bg-pattern bg-no-repeat bg-center lg:col-span-1 border border-white/[0.1] bg-darkBlue p-10">
        <Skills />
      </div>

      <div className="bg-pattern bg-no-repeat bg-center rounded-3xl border border-white/[0.1] py-28">
        <div className="flex flex-col items-center space-y-2 font-bold text-lg lg:text-3xl">
          <h2 className="text-purple">Connect with me!</h2>
          <Contact />
        </div>
      </div>

    </div>
  )
}