 import classes from "./Navbar.module.scss";
import Link from "next/link";
import {useState} from "react";
import {combineClasses, transformImagePaths} from "../../utils/utils";
import LinkTo from "../LinkTo";
import {useTheme} from "next-themes";
import {BsFillMoonFill, BsFillShareFill, BsFillSunFill} from "react-icons/bs";
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import {iNavbar, iNavLink, iNavSocials} from "../../shared/interfaces";
import {useRouter} from "next/router";
import {LogoType, THEMES} from "../../shared/enums";
import Image from "next/image";


const SimpleNavbar = ({
                          openSearch,
                          changeTheme,
                          toggleSideMenu,
                          openSidebar = false,
                          navSetup,
                          onShareClick
                      }: iNavbar) => {
    const {navLinks, socials, logo} = navSetup;
    const [openDD, setOpenDD] = useState(false)
    const {theme, setTheme} = useTheme();
    const router = useRouter()
    return (
        <div
            className={combineClasses(classes.navbar__container, 'container flex items-center justify-between h-12', "px-2")}>


            <div className="flex items-center">
                <div className={combineClasses(classes.search_icon_wrapper, 'ml-5 dark:text-white')}
                     onClick={() => openSearch()}>
                    <button name="search-button" aria-label="search button">
                        <AiOutlineSearch className="dark:text-white text-black text-[22px]"/>
                    </button>
                </div>
                <button name="theme-switch" aria-label="theme button"
                        className={combineClasses(classes.theme_switch, "pl-3 dark:text-white text-black w-10")}
                        onClick={changeTheme}>
                    {
                        theme && theme === 'dark' ? <BsFillSunFill className="text-2xl"/> :
                            <BsFillMoonFill className="text-md "/>
                    }
                </button>

                <div className="" onClick={() => onShareClick()}>
                    <button name="share" aria-label="share page">
                        <BsFillShareFill className="dark:text-white text-black text-[16px] mt-[7px] ml-2 mr-1"/>
                    </button>
                </div>

                {
                    socials &&
                    <div className="ml-5 pt-1">
                        {
                            socials.map((each: iNavSocials, i: any) => (
                                <Link href={each.link} key={i} target="_blank" rel="noopener noreferrer"
                                      className='text-[18px] inline-block mr-4'>{each.icon}</Link>
                            ))
                        }
                    </div>
                }
                <div className='text-[14px] font-normal items-center lg:flex hidden'>
                    {
                        navLinks.map((each: iNavLink, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                    <LinkTo href={each.path} key={i} passHref
                                            className={combineClasses('rounded-full w-24 text-center mx-2 relative inline-block py-2 hover:bg-cyan-100 transition-all duration-200 ease-linear',
                                                router.asPath.includes(each.path) ? "text-blue-400" : "")}>
                                        {each.label}
                                    </LinkTo> :
                                    <Link href={each.path} key={each.path + 1} target="_blank" rel="noopener noreferrer"
                                          className={combineClasses('rounded-full d-block mx-2 flex-wrap relative inline-block py-2 hover:text-cyan-100 hover:border-blue-400  hover:border-b-2 transition-all duration-150 ease-in-out',
                                              router.asPath.includes(each.path) ? "text-blue-400" : ""
                                          )}>
                                        {each.label}
                                    </Link>
                                :
                                <NavCatergoryDD key={each.path + 1} label={each.label} openDD={openDD} children={each.children}
                                                setOpenDD={() => setOpenDD(!openDD)} floating/>
                        ))
                    }

                </div>


            </div>


              <div className="flex items-center">
                  <Link href="/" passHref>

                  {
                      logo ?
                          logo.type === LogoType.IMAGE ?
                              <Image
                                  src={theme === THEMES.DARK ? transformImagePaths(logo.logoLight) : transformImagePaths(logo.logo)}
                                  alt="WebExpe" className="cursor-pointer" width="100"/>:
                              <i className='text-[22px] font-semibold'>{logo.logo}</i>
                          : <i className='text-[22px] font-semibold'>Logo</i>
                  }
                  </Link>
                  {/*<div*/}
                  {/*    className={combineClasses(classes.mobileBurgerToggle, "mr-5", openSidebar ? classes.mobileBurgerToggle__close : ' ')}*/}
                  {/*    onClick={() => toggleSideMenu()}>*/}
                  {/*    <AiOutlineMenu className="dark:text-white text-black text-2xl"/>*/}
                  {/*</div>*/}
            </div>
        </div>
    );
};

export default SimpleNavbar;
