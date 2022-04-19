import styles from "../styles/try.module.css"

const Try = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h3 className={styles.title}>Card 1</h3>
				<div className={styles.bar}>
					<div className={styles.emptybar}></div>
					<div className={styles.filledbar}></div>
				</div>
				<div className={styles.circle}>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg'>
						<circle className={styles.stroke} cx='60' cy='60' r='50' />
					</svg>
				</div>
			</div>
			<div className={styles.card}>
				<h3 className={styles.title}>Card 2</h3>
				<div className={styles.bar}>
					<div className={styles.emptybar}></div>
					<div className={styles.filledbar}></div>
				</div>
				<div className={styles.circle}>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg'>
						<circle className={styles.stroke} cx='60' cy='60' r='50' />
					</svg>
				</div>
			</div>
			<div className={styles.card}>
				<h3 className={styles.title}>Card 3</h3>
				<div className={styles.bar}>
					<div className={styles.emptybar}></div>
					<div className={styles.filledbar}></div>
				</div>
				<div className={styles.circle}>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg'>
						<circle className={styles.stroke} cx='60' cy='60' r='50' />
					</svg>
				</div>
			</div>
			<div className={styles.card}>
				<h3 className={styles.title}>Card 4</h3>
				<div className={styles.bar}>
					<div className={styles.emptybar}></div>
					<div className={styles.filledbar}></div>
				</div>
				<div className={styles.circle}>
					<svg className={styles.svg} version='1.1' xmlns='http://www.w3.org/2000/svg'>
						<circle className={styles.stroke} cx='60' cy='60' r='50' />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Try
