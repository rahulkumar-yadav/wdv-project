import { Link } from "react-router-dom";


const formInputs = [
	'First Name',
	'Last Name',
	'Email',
	'Password'
];


function Register() {
	return ( 
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
				<p className="mr-auto">9:41</p>
				<img src='./signal.svg' alt='cellular connection' />
				<img src='./wifi.svg' alt='wifi' />
				<img src='./battery.svg' alt='battery' />
			</div>
			<h1 className="text-[#2C2B2B] font-robo text-[20px] font-semibold my-8 px-4">Create an account</h1>
			<form className="flex flex-col items-center space-y-6 min-h-[510px]">

				{
					formInputs.map(inputName => {
						return (
							<input
								key={inputName}
								className="rounded-xl focus:outline-blue-600 bg-[#F1F1F1] w-[343px] h-[50px] px-4 font-semibold text-[#7F7F7F] text-[12px]"
								type={inputName === 'Password'? 'password': 'text'}
								placeholder={inputName}
							/>
						);
					})
				}
				
				
				<div className="flex items-center space-x-2">
					<input type='checkbox' className="h-[22px] w-[22px]" id='agreement' />
					<label className="text-[12px]" for='agreement'>
						By proceeding, I agree to all <a href="#terms" className="text-blue-500 underline">T&C</a> and  <a href="#pp" className="text-blue-500 underline">Privacy Policy</a>
					</label>
				</div>	
				<Link to='/goals' className="absolute top-[560px]">
					<button
						type='submit'

						className="w-[343px] h-[50px] font-semibold text-white bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] rounded-xl "
					>
						Create an Account
					</button>
				</Link>
				
			</form>

			<div className="flex items-center justify-center space-x-2">
				<div className="w-[157px] h-[2px] bg-gray-400"></div>
				<p className="font-medium">Or</p>
				<div className="w-[157px] h-[2px] bg-gray-400"></div>
			</div>

			<div className="flex items-center justify-center space-x-4 my-6">
				<div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg border border-[#7F7F7F] cursor-pointer">
					<img src='./google-logo.png' alt='Google' />
				</div>
				<div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg border border-[#7F7F7F] cursor-pointer">
					<img src='./facebook-logo.png' alt='Facebook' />
				</div>				
			</div>

			<p className="font-medium text-[12px] text-center">
				Already have an account? <Link to='/login'><span className="text-blue-500 underline">Login</span></Link>
			</p>



		</div>

	);
}

export default Register;