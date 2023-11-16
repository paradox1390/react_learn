import { Location } from "../../componets/location"
import { Time } from "../../componets/time"
export const Header = () => {
  return (
    <header className="flex w-full place-content-between"><Time/> <Location/></header>
  )
}
