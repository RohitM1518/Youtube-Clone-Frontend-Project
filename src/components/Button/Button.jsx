import React from 'react'

const Button = ({text,style, imgPath, imgWidth=25, imgHeight=25}) => {
  return (
    <>
    <div className='flex gap-2 border border-white justify-center py-2 hover:bg-slate-600'>
    {imgPath && <img src={imgPath} alt="" height={imgHeight} width={imgWidth} className='' />}
    <button className={`${style} ` }>{text}</button>
    </div>
    </>
  )
}

export default Button