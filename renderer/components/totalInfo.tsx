const TotalInfo = () => {

  const during = ['2023-04-05', '2023-06-25'];

  const value = ['1,250', '10,000', '1,000', '5,000'];

  return (
    <div className="bg-[rgba(255,0,0,.2)] rounded-md h-72 p-2">
      <h4 className="text-2xl text-center italic mb-1 font-bold mt-2 drop-shadow-md">Total Balance</h4>
      <h6 className="text-sm text-center mb-4">{`( ${during[0]} ~ ${during[1]} )`}</h6>
      <h6 className="text-base flex justify-between mb-1"><span>Init</span><span>{`${value[0]} $`}</span></h6>
      <h6 className="text-base flex justify-between mb-1"><span>Income</span><span>{`${value[1]} $`}</span></h6>
      <h6 className="text-base flex justify-between mb-1"><span>Expends</span><span>{`-${value[2]} $`}</span></h6>
      <hr className="mt-1 pb-1 border-gray-600" />
      <h6 className="text-base flex justify-between mb-1 font-bold"><span>Balance</span><span>{`${value[3]} $`}</span></h6>
    </div>
  )
}

export default TotalInfo;