export const Avatar = ({img, name}) => {
  return (
    <div className="flex items-end">
        <img src={img} alt='profile avatar'  className="w-14 aspect-square object-cover"/>
        <span className="capitalize">{name}</span>
    </div>
  )
}
