import { MdOutlineClose } from "react-icons/md"

export const Modal = ({ children, openModal, setOpenModal, modalInnerClass }) => {
  return (
    <div id="wrapper" onClick={(e) => e.target.id == "wrapper" && setOpenModal(false)} className={`z-50 fixed inset-0 duration-300 ${openModal ? "" : "scale-0"} flex items-center justify-center bg-[#00000079] backdrop-blur`}>
      <div className={`absolute ${modalInnerClass} w-[500px] h-[300px] bg-white p-5 rounded-md`}>
        <button className="absolute top-2 right-2" onClick={() => setOpenModal(false)}> <MdOutlineClose size={"30"}/> </button>
        {children}
      </div>
    </div>
  )
}
