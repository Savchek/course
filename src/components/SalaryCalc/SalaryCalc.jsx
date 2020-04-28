import React, { useState } from 'react'
import './SalaryCalc.css'
import cross from '../../icons/cross.svg'

const SalaryCalc = ({ tasks, close }) => {

	const dateModes = {
		'currentMonth': 'За поточний місяць',
		'previousMonth': 'За попередній місяць',
		'pickRange': 'Вибрати проміжок'
	}

	const [salaryRate, setSalaryRate] = useState(0)
	const [dateMode, setDateMode] = useState('currentMonth')

	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [calculatedSalary, setCalculatedSalary] = useState(-1)

	const updateDateMode = e => setDateMode(e.target.id)
	const updateSalaryRate = e => setSalaryRate(e.target.value)
	const changeStartDate = e => setStartDate(new Date(e.target.value).toISOString().slice(0, 10))
	const changeEndDate = e => setEndDate(new Date(e.target.value).toISOString().slice(0, 10))

	const calculateSalary = e => {
		e.preventDefault()
		setCalculatedSalary(-1)
		const nSalatyRate = salaryRate.toString().replace(',', '.')

		if (!nSalatyRate || (isNaN(+nSalatyRate)) || nSalatyRate < 0) {
			alert('Введіть коректну ставку')
			return
		}

		if (tasks.length === 0) {
			alert('Список задач пустий')
			return
		}

		let hours = 0, minutes = 0

		const addTime = duration => {
			const parsedDuration = duration.split(':').map(e => +e)
			hours += parsedDuration[0]
			minutes += parsedDuration[1]
		}
		if (dateMode === 'currentMonth' || dateMode === 'previousMonth') {
			const pickedMonth = new Date().getMonth() + (dateMode === 'currentMonth' ? 1 : 0)
			tasks.forEach(e => {
				// Отримання місяця задачі та переробка його в числовий формат
				const month = +e.date.split('-')[1]
				if (month === pickedMonth) {
					addTime(e.duration)
				}
			})
		} else if (dateMode === 'pickRange') {
			if (startDate === '' || endDate === '') {
				alert('Вкажіть початкову та кінцеву дати')
				return
			}
			// Перетворення дати із рядка в об'єкт
			const parseDate = date => {
				const parsedDate = date.split('-').map(e => +e)
				const year = parsedDate[0]
				const month = parsedDate[1]
				const day = parsedDate[2]
				return new Date(year, month, day)
			}
			// startDate - початкова границя дати
			const sd = parseDate(startDate)
			// endDate - кінцева границя дати
			const ed = parseDate(endDate)

			if (sd > ed) {
				alert('Кінцева дата не може бути меншою за початкову')
				return
			}

			tasks.forEach(e => {
				// taskDate - дата задачі
				const td = parseDate(e.date)
				if (td <= ed && td >= sd) addTime(e.duration)
			})
		} else {
			alert('Помилка у обраному типі розрахунку')
			return
		}

		hours += Math.floor(minutes / 60)
		if (minutes % 60 >= 30) hours++

		setCalculatedSalary(hours * nSalatyRate)
	}

	const handleClosing = e => {
		if (e.target.className === 'salary-calc-wrap')
			close()
	}


	const createDateModes = () => Object.keys(dateModes).map(e =>
		(
			<div key={e} className='salary-calc-option'>
				<label htmlFor={e}>
					<input
						id={e}
						name='dateMode'
						checked={dateMode === e}
						type='radio'
						onChange={updateDateMode}
					/>
					<p>{dateModes[e]}</p>
				</label>
			</div>
		)
	)

	const rangeSelector = () => {
		return (<div className='salary-calc-date-range-wrap'>
			<div className='salary-calc-date'>
				<p>З:</p>
				<input type="date" name="startDate" id="startDate" value={startDate} onChange={changeStartDate} />
			</div>
			<div className='salary-calc-date'>
				<p>По:</p>
				<input type="date" name="endDate" id="endDate" value={endDate} onChange={changeEndDate} />
			</div>
		</div>)
	}


	return (
		<div onClick={handleClosing} className='salary-calc-wrap'>
			<form className='salary-calc-form' >
				<div className='salary-calc-close-btn'>
					<img src={cross} onClick={close} alt='' />
				</div>
				<div className='salary-rate-wrap'>
					<p>Ставка:</p>
					<input
						type='text'
						value={salaryRate}
						onChange={updateSalaryRate}
					/>
					<p> грн/год</p>
				</div>
				{createDateModes()}
				{dateMode === 'pickRange' && rangeSelector()}
				<button className='salary-calc-btn' onClick={calculateSalary}>Розрахувати</button>
				{calculatedSalary !== -1 && <p className='salary-calc-result'> Результат: {calculatedSalary} грн</p>}
			</form>
		</div>
	)
}

export default SalaryCalc