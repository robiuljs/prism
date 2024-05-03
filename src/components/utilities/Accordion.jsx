import { Collapse } from 'react-collapse';
import { FaMinus, FaPlus } from "react-icons/fa6";

const Accordion = ({ open, toggle, data }) => {
    const { title, description } = data;
    return (
        <div className='rounded-3xl overflow-hidden p-[1px]'>

            <div className='rounded-3xl p-6 relative w-full h-full'>
                <div className='accordion-bg absolute inset-0 blur-[100px]'></div>
                <img className={`absolute right-0 top-0 opacity-${open ? '100' : '0'} transition-opacity duration-200 ease-in-out`} src="/assets/image/accordion-layer-1.svg" alt="" />

                <div className='relative z-10'>
                    <div
                        className='flex items-start lg:items-center justify-between cursor-pointer'
                        onClick={toggle}
                    >
                        <div className='flex flex-col lg:flex-row lg:items-end gap-1 md:gap-2 lg:gap-8'>
                            <h2 className='accordion-title text-white'>
                                {title}
                            </h2>
                        </div>
                        <div className='text-white'>
                            {open ? (
                                <FaMinus className='accordion-icon accordion-icon-collapsed' />
                            ) : (
                                <FaPlus className='accordion-icon' />
                            )}
                        </div>
                    </div>

                    <Collapse isOpened={open}>
                        <div className='max-w-[750px] accordion-description text-sm sm:text-base text-lightgray pt-5'>
                            <p className='text-base md:text-lg 2xl:text-xl'>{description}</p>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Accordion;