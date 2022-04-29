import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import DeleteOutlineRounded from "@material-ui/icons/DeleteOutlineRounded"
import Rating from "@material-ui/lab/rating"
import React from "react"
import { useStateValue } from "../../utils/state-provider"
// import styles from "./styles.module.css"

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	title: {
		width: "35vw",
		overflowWrap: "break-word",
		wordWrap: "break-word",
		hyphens: "auto",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 151,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	deleteIcon: {
		height: 38,
		width: 38,
	},
}))

export const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const classes = useStyles()

	const [{}, dispatch] = useStateValue()
	const removeFromBasket = () => {
		// remove from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		})
	}

	return (
		<>
			{/* <div className={styles.checkout_product}>
				<img src={image} alt='' />
				<div className={styles.info}>
					<p className={styles.title}>{title}</p>
					<p className={styles.price}>
						<small>$</small>
						<strong>{price}</strong>
					</p>

					<div className={styles.rating}>
						<Rating readOnly precision={0.5} defaultValue={rating} name='half-rating-read' />
					</div>
					<button onClick={removeFromBasket}>Remove from basket</button>
				</div>
			</div> */}
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component='h5' variant='h5' className={classes.title}>
							{title}
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							<small>$</small>
							<strong>{price}</strong>
						</Typography>
						<Typography variant='subtitle2' color='textSecondary'>
							<Rating readOnly precision={0.5} defaultValue={rating} name='half-rating-read' />
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton onClick={removeFromBasket} aria-label='delete'>
							<DeleteOutlineRounded className={classes.deleteIcon} />
						</IconButton>
					</div>
				</div>
				<CardMedia className={classes.cover} image={image} title={title} />
			</Card>
		</>
	)
}
