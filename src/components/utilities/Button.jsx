import { cnMerge } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const buttonVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-slate-900"
            },
            size: {
                default: "h-10 px-4 py-2"
            }
        },
        defaultVariants: "default",
        size: "default"
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
                href ? <Link href={href} className={cnMerge({ className, variant, size })}>{children}</Link> : <button className={cnMerge({ className, variant, size })}>{children}</button>
            }
        </>
    )
}

export default Button;