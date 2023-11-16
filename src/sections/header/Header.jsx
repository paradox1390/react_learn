import { Location } from "../../componets/location"
import { Time } from "../../componets/time"
export const Header = () => {
  return (
    <header className="flex w-full place-content-between pt-2"><Time/> <Location/></header>
  )
}
