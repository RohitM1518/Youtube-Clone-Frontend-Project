import React from 'react'

const Button = ({text,style, imgPath, imgWidth=25, imgHeight=25,fullStyle='',type="submit"}) => {
  return (
    <>
    <div className={`flex gap-2 border border-white justify-center p-1 hover:bg-custom-gray-1 shrink rounded-sm ${fullStyle}`}>
    {imgPath && <img src={imgPath} alt="" height={imgHeight} width={imgWidth} className='' />}
    <button className={`${style} flex`} type={type}>{text}</button>
    </div>
    </>
  )
}

export default Button