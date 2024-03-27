import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const textColorMap: { [key: string]: string } = {
  googleBlue: 'text-googleBlue',
  googleRed: 'text-googleRed',
  googleYellow: 'text-googleYellow',
  googleGreen: 'text-googleGreen',
};
export const bgColorMap: { [key: string]: string } = {
  googleBlue: 'bg-googleBlue',
  googleRed: 'bg-googleRed',
  googleYellow: 'bg-googleYellow',
  googleGreen: 'bg-googleGreen',
};
export const borderColorMap: { [key: string]: string } = {
  googleBlue: 'border-googleBlue',
  googleRed: 'border-googleRed',
  googleYellow: 'border-googleYellow',
  googleGreen: 'border-googleGreen',
};
export const randomTextGoogleColor = () => {
  let color = [
    'text-google-blue',
    'text-google-red',
    'text-google-green',
    'text-google-yellow'
  ]
  return (color[Math.floor(Math.random() * color.length)])
}