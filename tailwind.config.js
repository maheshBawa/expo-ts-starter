/** @type {import('tailwindcss').Config} */
export const content = [
    "./App.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
];
export const presets = [require("nativewind/preset")];
export const theme = {
    extend: {},
};
export const plugins = [];
