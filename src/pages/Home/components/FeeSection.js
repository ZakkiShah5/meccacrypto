import dollar from '../../../assets/dollarFrame.png'

const FeeSection = () => {
  const circleCount = 50
  const baseSize = 20
  return (
    <section className='relative md:my-6 min-h-[190vh] md:min-h-[100vh] mx-auto flex flex-col md:flex-row justify-between max-w-screen-lg'>
      <div className='box-1 -translate-x-1/2 md:-translate-x-0 z-10 left-1/2 absolute top-[-100px] md:top-[-100px] md:left-0'>
        <div className='stage-btns text-sm hidden md:flex gap-5'>
          <button className='bg-[#265D3A] px-2 py-2 text-light-500'>
            Stage - A
          </button>
          <button className='bg-magenta-50 px-2 py-2'>Stage - B</button>
          <button className='bg-slate-600 px-2 py-2'>Stage - C</button>
        </div>
        <div className='mt-3 text-magenta-600'>
          <h5>Stage - B</h5>
        </div>
        <div className='my-3'>
          <h1 className='text-xl md:text-2xl font-semibold'>
            PARTICIPATION FEE : 10,000 MEA
          </h1>
        </div>
        <form className='mb-3'>
          <div className='flex flex-col text-xs gap-1'>
            <label htmlFor='code'>
              Invite-in Code <sup>*</sup>
            </label>
            <input
              className='p-2 bg-[#1B1B1E] border-light-500 rounded border'
              type='text'
              placeholder='Enter the Invite- in code'
            />
          </div>
          <div className='my-2 text-center'>OR</div>
          <div className='flex flex-col text-xs gap-1'>
            <label htmlFor='code'>
              Invitation Address <sup>*</sup>
            </label>
            <input
              className='p-2 bg-[#1B1B1E] border-light-500 rounded border'
              type='text'
              placeholder='Enter the Invitation Address'
            />
          </div>

          <div className='normal-btn2 my-4'>
            <button className='rounded bg-magenta-600 font-semibold py-2 px-3 w-full'>
              JOIN & UPDATE
            </button>
          </div>
        </form>

        <div className='my-2'>
          <h3 className='font-bold'>DEPOSIT GUIDE</h3>
        </div>
        <ol className='text-xs flex flex-col gap-2 text-light-500 list-decimal ml-5'>
          <li>
            Enter your Solana Wallet address, which is the invitee, in the
            designated field.
          </li>
          <li>Make sure your Solana wallet is connected and ready to trade.</li>
          <li>
            Enter the invitee's unique code and Solana address to confirm.
          </li>
          <li>
            Click the "Make a Deposit" button to start the final stage process.
          </li>
        </ol>
      </div>
      <div className='box-1 z-10 absolute top-[580px] -translate-x-1/2 md:-translate-x-0 md:top-[-100px] left-1/2 md:right-0'>
        <div className='flex justify-between uppercase text-magenta-600'>
          <h5>Stage - B Revenue</h5>
          <img src={dollar} alt='' />
        </div>

        <div className='flex justify-center items-center h-72 bg-black'>
          <div className='relative'>
            {Array.from({ length: circleCount }).map((_, index) => {
              const size = baseSize + index * 4.5 // Increase size for each circle
              const isPink = index < 16
              return (
                <div
                  key={index}
                  className={`absolute rounded-full border-2 ${
                    isPink ? ' border-magenta-600' : 'border-[#202024]'
                  }`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `calc(50% - ${size / 2}px)`,
                    left: `calc(50% - ${size / 2}px)`
                  }}
                ></div>
              )
            })}

            <div className='w-20 level absolute left-[-40px] top-[-37px] text-center text-[10px]'>
              <span>Level 7 - 10</span> <br />
              <span>10%</span>
            </div>
            <div className='w-20 level text-light-500 absolute left-[-40px] top-[-80px] text-center text-[10px]'>
              <span>Level 11 - 20</span> <br />
              <span>20%</span>
            </div>
            <div className='w-20 level text-light-500 absolute left-[-40px] top-[-115px] text-center text-[10px]'>
              <span>Level 21 - 30</span> <br />
              <span>30%</span>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <div className='my-3 uppercase font-bold'>
            <h3>Notice</h3>
          </div>
          <ul className='text-xs flex flex-col gap-1 md:gap-2 text-light-500 list-disc ml-5'>
            <li>The bonus pool will incur a daily fee of -1$MEA</li>
            <li>
              If your tokens in the bonus pool reach "0 $MEA", you will no
              longer be able to receive invitation rewards.
            </li>
            <li>
              If you don't have enough funds in the bonus pool, fill it up.
            </li>
            <li>
              If you leave the "0" limit, you will receive the reward again.
            </li>
            <li>
              The minimum amount to be filled in the bonus pool is 1 $MEA.
            </li>
            <li>
              After the first stage, bonuses will not be given for stage updates
              and additional deposits of lower users.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeeSection
