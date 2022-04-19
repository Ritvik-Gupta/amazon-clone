import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export const TransitionLayout = ({ children }) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [transitionStage, setTransitionStage] = useState("fadeOut")
	useEffect(() => {
		setTransitionStage("fadeIn")
	}, [])

	useEffect(() => {
		if (children.type.name !== displayChildren.type.name) setTransitionStage("fadeOut")
	}, [children, displayChildren])

	return (
		<div
			onTransitionEnd={() => {
				if (transitionStage === "fadeOut") {
					console.log("fading out")
					setDisplayChildren(children)
					setTransitionStage("fadeIn")
				}
			}}
			className={`${styles.content} ${styles[transitionStage]}`}
		>
			{displayChildren}
		</div>
	)
}
