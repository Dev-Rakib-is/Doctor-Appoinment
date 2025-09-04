import{services} from"../../data/services"
import { Stethoscope, Calendar, BriefcaseMedical } from "lucide-react";


const Service = () => {
  const iconmap = {
    stethoscope:<Stethoscope/>,
    calendar:<Calendar/>,
    briefcase:<BriefcaseMedical/>

  }
  return (
    <section className="py-20 w-full ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black dark:text-white">Service</h2>
        <div className="flex flex-col md:flex-row mt-8 md:justify-between ">
          {
            services.map((item)=>(
              <div className="border p-2 border-black/40 dark:border-white rounded-2xl w-[320px]" key={item.id}>
              <img src={item.image} alt="Service Image" className="object-cover  rounded-[8px] hover:scale-105 transition-all duration-300"/>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-lg text-black font-semibold dark:text-white pt-2">{item.title}</p>
                  <span className="dark:text-white">{iconmap[item.icon]}</span>
                </div>
                <p className="text-black dark:text-white">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Service