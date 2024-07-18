import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { NavLink, Link } from "react-router-dom"
import Cart from "./Cart"

import "iconify-icon"
import "./Style/Navbar.css"

function Navbar() {
	const { user, isLoggedIn, disconnect, cart } = useContext(AuthContext)
	const [showBurgerMenu, setShowBurgerMenu] = useState(false)
	const [showNav, setShowNav] = useState(false)
	const [showCart, setShowCart] = useState(false)

	function getQuantity() {
		return cart.products?.reduce((acc, val) => acc + val.quantity, 0)
	}
	return (
		<>
			<header>
				<div>
					<NavLink to="/">
						<img id="webLogo" src="/icons/brewverse-3.png" />
					</NavLink>
				</div>
				<div className="actions">
					{/* this can become a component later */}
					{/* User icon and sub menu */}
					<div className="nav-menu-wrapper">
						<Link to={"/account"}>
							<img
								className="icon"
								src="/icons/lets-icons--user-alt-light.svg"
								onClick={() => setShowNav(!showNav)}
							/>
						</Link>
					</div>
					<div onClick={() => setShowCart(!showCart)} className="cart">
						<img
							className="icon"
							src="/icons/iconoir--shopping-bag.svg"
							alt=""
						/>
						<span>{cart && getQuantity()}</span>
					</div>
					<div>
						<img
							onClick={() => setShowBurgerMenu(!showBurgerMenu)}
							className="icon"
							src="/icons/solar--hamburger-menu-outline.svg"
							alt=""
						/>
					</div>
				</div>

				<aside id="cart-aside" className={!showCart ? "hide-the-cart" : ""}>
					<Cart setShowCart={setShowCart} />
				</aside>

				<aside
					id="nav-links"
					className={!showBurgerMenu ? "hide-that-aside" : ""}>
					<div className="close" onClick={() => setShowBurgerMenu(false)}>
						X
					</div>
					<ul>
						<li>
							<Link onClick={() => setShowBurgerMenu(false)} to="/products">
								Shop
							</Link>
						</li>
						<li>
							<Link to="">About</Link>
						</li>
						<li>
							<Link to="">Contact</Link>
						</li>
					</ul>
				</aside>
			</header>
		</>
	)
}

export default Navbar
