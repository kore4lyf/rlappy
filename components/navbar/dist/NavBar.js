"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var NavMenuMobile_1 = require("./NavMenuMobile");
var link_1 = require("next/link");
var image_1 = require("next/image");
var rlappy_logo_svg_1 = require("@/public/rlappy-logo.svg");
var NavMenuDesktop_1 = require("./NavMenuDesktop");
var NavAuthSection_1 = require("./NavAuthSection");
var NavBar = function () {
    return (react_1["default"].createElement("div", { className: "border-b-4 border-base-300" },
        react_1["default"].createElement("div", { className: "navbar auto-width bg-base-100 py-4 border-base-100" },
            react_1["default"].createElement("div", { className: "navbar-start " },
                react_1["default"].createElement("div", { className: "dropdown" },
                    react_1["default"].createElement("div", { tabIndex: 0, role: "button", className: "btn btn-ghost lg:hidden" },
                        react_1["default"].createElement(fa6_1.FaBars, { className: "w-5 h-5" })),
                    react_1["default"].createElement(NavMenuMobile_1["default"], null)),
                react_1["default"].createElement(link_1["default"], { href: "/", className: "w-10 h-10 p-2 btn btn-ghost" },
                    react_1["default"].createElement(image_1["default"], { src: rlappy_logo_svg_1["default"], alt: "Rlappy Logo" }))),
            react_1["default"].createElement(NavMenuDesktop_1["default"], null),
            react_1["default"].createElement(NavAuthSection_1["default"], null))));
};
exports["default"] = NavBar;
