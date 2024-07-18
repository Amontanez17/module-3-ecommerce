import React from "react"
import { useState } from "react"
import { useParams } from "react-router"
import service from "../service/api"
import { useEffect } from "react"

function CommentForm({ fetchProduct, selectedComment, setSelectedComment }) {
	const [text, setText] = useState("")
	const [rating, setRating] = useState("-1")
	const { productId } = useParams()

	useEffect(() => {
		if (selectedComment) {
			setText(selectedComment.text)
			setRating(selectedComment.rating)
		}
	}, [selectedComment])

	async function handleSubmit(e) {
		try {
			e.preventDefault()
			if (selectedComment) {
				await service.put(`/api/comments/${selectedComment._id}/update`, {
					text,
					rating,
				})
				setSelectedComment(null)
			} else {
				await service.post(`/api/products/${productId}/comment`, {
					text,
					rating,
				})
			}
			setText("")
			setRating("-1")
			fetchProduct()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="comment-text">Comment: </label>
					<textarea
						name=""
						id="comment-text"
						value={text}
						onChange={(e) => setText(e.currentTarget.value)}></textarea>
				</div>
				<div>
					<label htmlFor="rating">Rating: </label>
					<select
						name="rating"
						id="rating"
						value={rating}
						required
						onChange={(e) => setRating(e.currentTarget.value)}>
						<option disabled value="-1">
							Please rate our beer!
						</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<button id="comment-submit">
					{selectedComment ? "Update" : "Submit"}
				</button>
			</form>
		</>
	)
}

export default CommentForm
