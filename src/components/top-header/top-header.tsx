import { Link } from "react-router-dom";
import { icons } from "../../utils/icons";

const { IoFlashOutline, IoIosArrowDown } = icons;

const TopHeader = () => {
  return (
    <div className="border border-b-1">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col gap-2 md:flex-row py-3">
          <div className="w-full md:w-1/2">
            <ul className="flex flex-wrap items-center gap-5 justify-center md:justify-start">
              <li className="text-sm font-light">
                <Link to="">About Us</Link>
              </li>
              <li className="text-sm font-light">
                <Link to="">FAQs</Link>
              </li>
              <li className="text-sm font-light">
                <Link to="">Help & Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="flex flex-wrap items-center gap-5 justify-center md:justify-end">
              <li className="flex items-center gap-1 text-sm font-light text-[#d4394b]">
                <IoFlashOutline />
                <Link to="">Flash sale 20% off</Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-1 text-sm font-light"
                >
                  <span>EngLish</span>
                  <IoIosArrowDown />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center gap-1 text-sm font-light"
                >
                  <span>USD</span>
                  <IoIosArrowDown />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
