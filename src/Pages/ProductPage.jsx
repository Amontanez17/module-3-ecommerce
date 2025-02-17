import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import service from "../service/api"
import ProductCard from "../Components/ProductCard"
import "../Components/Style/ProductList.css"

function ProductPage() {
	const [products, setProducts] = useState(null)

	async function fetchProducts() {
		try {
			const response = await service.get("/api/products")
			setProducts(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchProducts()
	}, [])

	console.log(products)
	if (!products) return <p>Loading...</p>
	return (
		<>
			<h2>Shop our selection</h2>
			<div className="product-cards-container">
				{products.map((oneProduct) => {
					console.log(oneProduct)
					return <ProductCard oneProduct={oneProduct} key={oneProduct._id} />
				})}
			</div>
		</>
	)
}

export default ProductPage
