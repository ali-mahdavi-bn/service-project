/**These are necessary imports / components for the page */
'use client'
import Image from "next/image";
import type {ImageProps} from "next/dist/shared/lib/get-img-props";

const Unoptimized = (props: ImageProps) => {
    return (
        <Image {...props} unoptimized/>
    )
}

export default Unoptimized