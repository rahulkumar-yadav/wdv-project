import { Link } from "react-router-dom";




const goals = [
	'Weight Loss',
	'Muscle Gain',
	'Flexibility and Mobility',
	'General Fitness',
	'Event - specific training',
	'Mindfulness and Mental Health'
];


function Goals() {
	return ( 
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
				<p className="mr-auto">9:41</p>
				<img src='./signal.svg' alt='cellular connection' />
				<img src='./wifi.svg' alt='wifi' />
				<img src='./battery.svg' alt='battery' />
			</div>
			<h1 className="text-[#2C2B2B] text-center font-robo text-[20px] font-semibold my-8 px-4">What are your goals?</h1>
			<form className="flex flex-col items-center space-y-6 min-h-[510px]">

				{
					goals.map(goal => {
						return (
							<label
								className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-xl px-4 flex items-center justify-between"
								for={goal}
								key={goal}
							>
								<p className="text-[#2C2B2B] text-[12px] font-semibold">{goal}</p>
								<input 
									className="w-[22px] h-[22px] rounded border border-[#809AFF]"
									type='checkbox'
									id={goal}
								/>
							</label>
						)
					})
				}




				<Link to='/tracker' className="absolute top-[665px]">
					<button
						type='submit'
						className="w-[343px] h-[50px] font-semibold text-white bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] rounded-xl "
					>
						Confirm
					</button>
				</Link>
			</form>
		</div>

	);
}

export default Goals;