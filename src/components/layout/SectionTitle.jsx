import React from 'react'

const SectionTitle = ({ title, text }) => {
    return (
        <div>
            <h1 className='text-[80px] leading-[85px]'>
                {title}
            </h1>
            {
                text && (<p>{text}</p>)
            }
        </div>
    )
}

export default SectionTitle