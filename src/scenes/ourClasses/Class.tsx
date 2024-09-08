
type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[323px] w-[430px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90` 
  return (
      <li className="relative mx-16 inline-block h-[380px] w-[430px]  ">
          <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
          </div>
          <img src={image} alt={`${image}`} />
   </li>
  )
}

export default Class