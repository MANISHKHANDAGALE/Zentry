import React from 'react'

const Button = ({title,id,lefticon,righticon,containerclass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-default overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerclass}`}>
       {lefticon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {righticon}
    </button>
  )
}

export default Button