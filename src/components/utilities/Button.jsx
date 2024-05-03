import { cnMerge } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-x-4 whitespace-nowrap rounded-full font-bold",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-white/90"
            },
            size: {
                default: "sm:h-[60px] h-[48px] sm:px-[30px] px-[24px] sm:py-4 py-3 text-[18px]",
                sm: "h-[50px] px-[26px] py-[10px] text-[18px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

const Button = ({
    className,
    variant,
    size,
    children,
    href
}) => {
    return (
        <>
            {
                href
                    ? <Link href={href} className={cnMerge(buttonVariants({ className, variant, size }))}>{children}</Link>
                    : <button className={cnMerge(buttonVariants({ className, variant, size }))}>{children}</button>
            }
        </>
    )
}

export default Button;