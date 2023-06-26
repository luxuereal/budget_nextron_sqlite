const EachInfo = () => {

  const during = ['2023-04-05', '2023-06-25'];

  const members = ['Kniner', 'Mars', 'Gasolin', 'Joe', 'Davy', 'Victor', 'Soros', 'Thomas', 'Peter'];

  const data = ['2,000', '2,000', '2,000', '2,000', '2,000', '2,000', '2,000', '2,000', '2,000'];

  return (
    <div className="bg-[rgba(0,255,0,.1)] rounded-md h-full p-2">
      <h4 className="text-2xl text-center italic mb-1 font-bold mt-4">Achievements of each members</h4>
      <h6 className="text-sm text-center mb-4">{`( ${during[0]} ~ ${during[1]} )`}</h6>
      <div className="flex flex-col gap-2 pt-4">
      {
        members.map((member, idx) => 
        <div key={`each-${idx}`}>
          <h6 key={`member-${idx}`} className="text-base flex justify-between">
            <span>{member}</span><span>{`${data[idx]} $`}</span>
          </h6>
          <hr className="mb-1 border-gray-600" />
        </div>
        )
      }
      </div>
    </div>
  )
}

export default EachInfo;