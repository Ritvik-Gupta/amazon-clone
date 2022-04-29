import Paper from "@material-ui/core/Paper"
import {
	CategoryScale,
	Chart as ChartJs,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJs.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
)

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [{ data: [1, 4, 2, 3, 7, 4, 6, 3] }],
}

const PurchaseHistory = () => {
	return (
		<div>
			<Paper elevation={3}>
				<Line
					data={data}
					width={100}
					height={40}
					options={{
						plugins: {
							legend: {
								display: false,
							},
						},
						elements: {
							line: {
								tension: 0,
								borderWidth: 2,
								borderColor: "rgba(47, 97, 68, 1)",
								fill: "start",
								backgroundColor: "rgba(47 ,97, 68, 0.3)",
							},
							point: {
								radius: 10,
								hitRadius: 0,
							},
							scales: {
								xAxis: {
									display: false,
								},
								yAxis: {
									display: false,
								},
							},
						},
					}}
				/>
			</Paper>
		</div>
	)
}

export default PurchaseHistory
