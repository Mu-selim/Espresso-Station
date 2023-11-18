import propTypes from "prop-types";
import { CartIcon } from "../icons/cartIcon";
import { NavArrowIcon } from "../icons/navArrowIcon";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BurgerMenu } from "./burgerMenu";
import { HashLink } from "react-router-hash-link";

export const ProductsSideMenu = ({ sideObj }) => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });
  const [isOpened, setIsOpened] = useState(false);

  const handleListSelection = (listTitle) =>
    sideObj.setProductObjectKey(listTitle);

  return (
    <aside className="h-fit whitespace-nowrap rounded-xl border-2 border-coffee-light ml:w-fit">
      <header className="flex items-center justify-between gap-2 rounded-t-lg border-b-2 border-b-coffee-light bg-coffee-light px-8 py-4 ml:justify-center">
        <header className="flex items-center gap-2">
          <CartIcon className="h-8 w-8" fillColor="#353535" />
          <h2 className="text-xl font-bold" style={{ letterSpacing: "0" }}>
            {products.headerTitle}
          </h2>
        </header>
        <BurgerMenu
          onClick={() => setIsOpened(!isOpened)}
          isOpened={isOpened}
          className="flex h-5 cursor-pointer select-none flex-col items-end justify-between ml:hidden"
        />
      </header>
      <ul
        className={`flex flex-col gap-4 overflow-hidden px-8 ${
          isOpened ? "" : "h-0 ml:h-auto"
        }`}
      >
        <li className="pt-4">
          <div>
            <h3
              className="flex cursor-pointer items-center gap-1 font-bold"
              onClick={sideObj.toggleDropDown1}
            >
              {products.menuOptions[0].mainTitle}
              <NavArrowIcon
                className={`inline-block h-5 w-5 ${
                  sideObj.dropDown1 ? "rotate-180" : ""
                }`}
              />
            </h3>
            <ul
              className={`flex flex-col gap-1 overflow-hidden ${
                sideObj.dropDown1 ? "" : "h-0"
              }`}
            >
              <li className="mt-2 cursor-pointer">
                <HashLink
                  to={"/#product-view"}
                  onClick={() => handleListSelection("equipmentCommercial")}
                >
                  {products.menuOptions[0].dropDownOption[0]}
                </HashLink>
              </li>
              <li className="cursor-pointer">
                <HashLink
                  to={"/#product-view"}
                  onClick={() => handleListSelection("equipmentHome")}
                >
                  {products.menuOptions[0].dropDownOption[1]}
                </HashLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h3
              className="flex cursor-pointer items-center gap-1 font-bold"
              onClick={sideObj.toggleDropDown2}
            >
              {products.menuOptions[1].mainTitle}
              <NavArrowIcon
                className={`inline-block h-5 w-5 ${
                  sideObj.dropDown2 ? "rotate-180" : ""
                }`}
              />
            </h3>
            <ul
              className={`flex flex-col gap-1 overflow-hidden ${
                sideObj.dropDown2 ? "" : "h-0"
              }`}
            >
              <li className="mt-2 cursor-pointer">
                <HashLink
                  to={"/#product-view"}
                  onClick={() => handleListSelection("grindersCommercial")}
                >
                  {products.menuOptions[1].dropDownOption[0]}
                </HashLink>
              </li>
              <li className="cursor-pointer">
                <HashLink
                  to={"/#product-view"}
                  onClick={() => handleListSelection("grindersHome")}
                >
                  {products.menuOptions[1].dropDownOption[1]}
                </HashLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="cursor-pointer font-bold">
          <HashLink
            to={"/#product-view"}
            onClick={() => handleListSelection("automaticBrewing")}
          >
            {products.menuOptions[2].mainTitle}
          </HashLink>
        </li>
        <li className="cursor-pointer font-bold">
          <HashLink
            to={"/#product-view"}
            onClick={() => handleListSelection("waterDesalination")}
          >
            {products.menuOptions[3].mainTitle}
          </HashLink>
        </li>
        <li className="cursor-pointer font-bold">
          <HashLink
            to={"/#product-view"}
            onClick={() => handleListSelection("iceMakers")}
          >
            {products.menuOptions[4].mainTitle}
          </HashLink>{" "}
        </li>
        <li className="pb cursor-pointer font-bold">
          <HashLink
            to={"/#product-view"}
            onClick={() => handleListSelection("ovens")}
          >
            {products.menuOptions[5].mainTitle}
          </HashLink>{" "}
        </li>
        <li className="cursor-pointer pb-6 font-bold">
          <HashLink
            to={"/#product-view"}
            onClick={() => handleListSelection("barEquipments")}
          >
            {products.menuOptions[6].mainTitle}
          </HashLink>
        </li>
      </ul>
    </aside>
  );
};

ProductsSideMenu.propTypes = {
  sideObj: propTypes.object.isRequired,
};
