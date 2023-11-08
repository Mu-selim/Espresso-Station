import propTypes from "prop-types";
import { CartIcon } from "../icons/cartIcon";
import { NavArrowIcon } from "../icons/navArrowIcon";
import { useTranslation } from "react-i18next";

export const ProductsSideMenu = ({ sideObj }) => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });

  const handleListSelection = (listTitle) => sideObj.setProductList(listTitle);

  return (
    <aside className="ml:w-fit h-fit border-2 border-coffee-light rounded-xl whitespace-nowrap">
      <header className="flex justify-center items-center gap-2 py-4 px-8 border-b-2 border-b-coffee-light bg-coffee-light">
        <CartIcon className="w-8 h-8" fillColor="#353535" />
        <h2 className="font-bold text-xl">{products.headerTitle}</h2>
      </header>
      <ul className="pt-4 pb-6 px-8 flex flex-col gap-4">
        <li>
          <div>
            <h3
              className="cursor-pointer flex items-center gap-1 font-bold"
              onClick={sideObj.toggleDropDown1}
            >
              {products.menuOptions[0].mainTitle}
              <NavArrowIcon
                className={`w-5 h-5 inline-block ${
                  sideObj.dropDown1 ? "rotate-180" : ""
                }`}
              />
            </h3>
            <ul
              className={`flex flex-col gap-1 overflow-hidden ${
                sideObj.dropDown1 ? "" : "h-0"
              }`}
            >
              <li
                className="cursor-pointer mt-2"
                onClick={() => handleListSelection("equipmentCommercial")}
              >
                {products.menuOptions[0].dropDownOption[0]}
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleListSelection("equipmentHome")}
              >
                {products.menuOptions[0].dropDownOption[1]}
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h3
              className="cursor-pointer flex gap-1 items-center font-bold"
              onClick={sideObj.toggleDropDown2}
            >
              {products.menuOptions[1].mainTitle}
              <NavArrowIcon
                className={`w-5 h-5 inline-block ${
                  sideObj.dropDown2 ? "rotate-180" : ""
                }`}
              />
            </h3>
            <ul
              className={`flex flex-col gap-1 overflow-hidden ${
                sideObj.dropDown2 ? "" : "h-0"
              }`}
            >
              <li
                className="cursor-pointer mt-2"
                onClick={() => handleListSelection("grindersCommercial")}
              >
                {products.menuOptions[1].dropDownOption[0]}
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleListSelection("grindersHome")}
              >
                {products.menuOptions[1].dropDownOption[1]}
              </li>
            </ul>
          </div>
        </li>
        <li
          className="cursor-pointer font-bold"
          onClick={() => handleListSelection("automaticBrewing")}
        >
          {products.menuOptions[2].mainTitle}
        </li>
        <li
          className="cursor-pointer font-bold"
          onClick={() => handleListSelection("iceMakers")}
        >
          {products.menuOptions[3].mainTitle}
        </li>
        <li
          className="cursor-pointer font-bold"
          onClick={() => handleListSelection("ovens")}
        >
          {products.menuOptions[4].mainTitle}
        </li>
      </ul>
    </aside>
  );
};

ProductsSideMenu.propTypes = {
  sideObj: propTypes.object.isRequired,
};
