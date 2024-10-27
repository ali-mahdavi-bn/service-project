import Link from "next/link"
import { combineClasses, transformPath } from "../../utils/utils"

interface iLinkTo { 
    href: string, 
    passHref?: boolean, 
    newTab?: boolean, 
    children?: any, 
    external?: boolean, 
    className?: string 
}

const LinkTo = ({ href, passHref = true, newTab = false, external = false, children, className }: iLinkTo) => {
    return (
        <>
            {
                newTab || external ?
                    <Link href={transformPath(href)} className={className} target="_blank" rel="noopener noreferrer">
                        {children}
                    </Link> :
                    <Link className={combineClasses('cursor-pointer hover:text-blue-500', className)} href={transformPath(href)} passHref={passHref}>
                        {/*<div >*/}
                            {children}
                        {/*</div>*/}
                    </Link>
            }
        </>
    )
}

export default LinkTo