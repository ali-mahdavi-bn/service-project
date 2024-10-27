import { BiChevronDown } from "react-icons/bi";
import { combineClasses, getCategories } from "../../utils/utils";
import LinkTo from "../LinkTo";
import {iNavLinkChildren} from "../../shared/interfaces";

interface INavCatergoryDD {
  openDD: boolean;
  setOpenDD: any;
  children?: iNavLinkChildren[];
  label: string;
  floating?: boolean;
}

const NavCatergoryDD = ({
  openDD,
  setOpenDD,
  label,
  children,
  floating = false,
}: INavCatergoryDD) => {
  const CATEGORIES = getCategories();
  return (
    <>
      <div className={"relative"}>
        <div
          className={combineClasses(
            "flex items-center cursor-pointer",
            floating ? "mx-2" : "justify-between"
          )}
          onClick={() => setOpenDD(!openDD)}
        >
          <p className="my-0">{label}</p>
          <BiChevronDown className="text-[20px]" />
        </div>
        <div
          className={combineClasses(
            "overflow-auto opacity-0 shadow-lg transition-all duration-100 ease-in",
            floating
              ? "absolute w-[180px] z-20 top-[30px] right-2 rounded-[8px] shadow-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-0"
              : "relative",
            openDD ? "h-auto opacity-100" : "h-0 border-0"
          )}
        >
          {/*<LinkTo href={"/blog"} passHref className="block text-sm py-2 px-2">*/}
          {/*  <span onClick={() => setOpenDD(!openDD)}>All Articles</span>*/}
          {/*</LinkTo>*/}
          {children && children.map((each) => (
            <LinkTo
              href={"/" + each.path}
              key={each.path}
              passHref
              className="block text-sm py-2 px-2 text-right"
            >
              <span
                style={{ textTransform: "capitalize" }}
                onClick={() => setOpenDD(!openDD)}
              >
                {each.label}
              </span>
            </LinkTo>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavCatergoryDD;
