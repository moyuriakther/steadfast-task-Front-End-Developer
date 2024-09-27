
export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  const {title, img, description} = props.card;
console.log(props)
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img className="w-full h-48 object-cover rounded-lg mb-4 md:h-64 lg:h-72 transition-transform duration-300 hover:brightness-110" src={img} alt="Card Image"/>
        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">{title}</h2>
        <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-700">{description}</p>
    </div>
  )
}
