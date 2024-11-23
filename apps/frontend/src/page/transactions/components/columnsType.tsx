import React from 'react'


type ColumnsTypeProp = {
    icon?: React.ReactNode;
    title: string,
    bg:string,
    textColor: string
}
function ColumnsType({icon, title, bg,textColor}: ColumnsTypeProp ) {
  return (
    <span className={`${bg} ${textColor} py-1 px-2 rounded-full flex  items-center justify-center gap-2 w-28`}> 
    {icon}
    <h4 className='font-bold text-xs'>{title}</h4>
    </span>
  )
}

export {ColumnsType}