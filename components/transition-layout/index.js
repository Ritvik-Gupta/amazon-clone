import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export const TransitionLayout = ({ children }) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [transitionStage, setTransitionStage] = useState("fade_out")
	useEffect(() => {
		setTransitionStage("fade_in")
	}, [])

	useEffect(() => {
		if (children.type.name !== displayChildren.type.name) setTransitionStage("fade_out")
	}, [children, displayChildren])

	return (
		<div
			onTransitionEnd={() => {
				if (transitionStage === "fade_out") {
					console.log("Fading Out")
					setDisplayChildren(children)
					setTransitionStage("fade_in")
				}
			}}
			className={`${styles.content} ${styles[transitionStage]}`}
		>
			{displayChildren}
		</div>
	)
}
