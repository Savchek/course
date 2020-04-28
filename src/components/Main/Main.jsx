import React, { useState } from 'react'
import List from '../List/List'
import SalaryCalc from '../SalaryCalc/SalaryCalc'
import DatePicker from '../DatePicker/DatePicker'
import './Main.css'


function App() {

	const [chosenDate, setChosenDate] = useState(new Date().toISOString().slice(0, 10))
	const [tasks, setTasks] = useState([])
	const [salaryCalcState, setSalaryCalcState] = useState(false)

	const updateSalaryCalcState = () => setSalaryCalcState(!salaryCalcState)

	return (
		<div className='main-wrap'>
			<header className='main-header'>
				<DatePicker chosenDate={chosenDate} setChosenDate={setChosenDate} />

				<button
					className='salary-calc-show-btn'
					onClick={updateSalaryCalcState}>
					Розрахувати зарплату
				</button>

				{salaryCalcState && <SalaryCalc tasks={tasks} close={updateSalaryCalcState} />}
			</header>
			<List tasks={tasks} setTasks={setTasks} chosenDate={chosenDate} />
		</div>
	)
}

export default App
