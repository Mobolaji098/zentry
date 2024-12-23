import clsx from "clsx";

const Button = ({title,id,leftIcon,rightIcon,containerClass}) => {
    return (
       <button id={id} className={ clsx("group relative w-fit z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black", containerClass)}>
           {leftIcon}
           <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
               {title}
           </span>
           {rightIcon}
       </button>
    )
}
export default Button

