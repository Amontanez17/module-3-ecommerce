import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import service from "../service/api"
import "../Pages/Style/OneProductPage.css"
import AllComments from "../Components/AllComments"

function OneProductPage({}) {
	const { productId } = useParams()

	const [oneBeer, setOneBeer] = useState(null)

	async function fetchProduct() {
		try {
			const response = await service.get(`/api/products/${productId}`)
			setOneBeer(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchProduct()
	}, [])

	function getRating() {
		const amount = oneBeer.comments?.length
		if (!amount) {
			return "Not rated yet!"
		}
		return (
			oneBeer.comments.reduce((acc, val) => acc + val.rating, 0) / amount
		).toFixed(2)
	}
	if (!oneBeer) return <p>loading...</p>
	return (
		<div id="one-product-page">
			<article id="product-details-cont">
				<div className="oneProduct-img">
					{" "}
					<img src={oneBeer.product.image} />
				</div>
				<div className="oneProduct-details">
					{" "}
					<h3>{oneBeer.product.name}</h3>
					<h5>{oneBeer.product.breweryName}</h5>
					<p>{`${oneBeer.product.price} €`}</p>
					<p>{oneBeer.product.detailsType}</p>
					<p>{oneBeer.product.detailsRegion}</p>
					<p>{oneBeer.product.abv}</p>
					<p>{oneBeer.product.description}</p>
					<p>User rating: {getRating()}</p>
				</div>
			</article>
			<AllComments comments={oneBeer.comments} fetchProduct={fetchProduct} />
		</div>
	)
}

export default OneProductPage
