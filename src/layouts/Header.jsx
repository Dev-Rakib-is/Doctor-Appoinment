import Darkmode from "../components/ui/Darkmode"

const Header = () => {
  return (
    <header className=''>
        <div className="flex justify-between px-4 items-center">
            {/* logo  */}
            <div className=" py-6 ">
                <h5 className="text-green-700 font-bold text-2xl">Health care</h5>
                <p className="text-[10px] tracking-[1px]">Doctor Appointment</p>
            </div>
            <div className="">
                <Darkmode/>
            </div>
        </div>
    </header>
  )
}

export default Header