import Link from 'next/link'
import styles from './svgimages.module.css'



export const MenuIcon = ({ styleClassName, handleClick})=>{

	return <svg id="mobileMenuSpawn" onClick={handleClick} className={styleClassName} height={20} width={20}  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" 
	fill={"var(--menu-icon-color)"}>
	<path  fillRule="evenodd" 
	d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
  </svg>
  
}



export const CancelIcon = ({color, styleClassName})=>{

	return <svg  className={styleClassName} xmlns="http://www.w3.org/2000/svg" height={20}
      width={20}  viewBox="0 0 50 50" >
	<path fill={color} d="M9.156 6.313L6.313 9.156 22.156 25 6.219 40.969l2.813 2.813L25 27.844l15.938 15.938 2.844-2.844L27.844 25 43.688 9.156l-2.844-2.844L25 22.156z"/>
	</svg>
}
