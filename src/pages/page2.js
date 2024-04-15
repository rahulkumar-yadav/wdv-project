import { Link } from 'react-router-dom';


function Page2() {
	return ( 
		<div className="relative w-[375px] h-[800px] mx-auto border border-black rounded-[10px]">
			<div className="flex items-center justify-end space-x-2 px-4 py-2">
				<p className="mr-auto">9:41</p>
				<img src='./signal.svg' alt='cellular connection' />
				<img src='./wifi.svg' alt='wifi' />
				<img src='./battery.svg' alt='battery' />
			</div>
			<Link to='/register'>
				<p className='underline text-[#9FB2FF] text-right px-4'>Skip</p>
			</Link>
			<div className='flex items-center justify-center h-[450px]'>
				<img src='./cycling.png' alt='Cycling' />
			</div>
			<h1 className='font-semibold text-[20px] px-2 mb-4'>Get Burn</h1>
			<p className='px-2 text-[#787878]'>
				Let’s keep burning to achieve your goals, it hurts only temporarily,
				if you give up now you will be in pain forever
			</p>

			<Link to='/register'>
				<img
					className='absolute bottom-[44px] right-[16px]'
					src='./button2.svg'
					alt='Button'
				/>
			</Link>

		</div>

	);
}

export default Page2;