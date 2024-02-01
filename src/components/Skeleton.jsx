 
const Skeleton = ({item}) => {
  return [...Array(item).keys()].map((key)=>(
    <div className="animate-pulse" key={key}>
        <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ))
}

export default Skeleton