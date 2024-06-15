import TSideNav from "./sideNav/TSideNav"
import TContents from "./TContents"

export default function LDefault(props) {
  return (
    <div className='l-default'>
      <TSideNav />
      <TContents>
        {props.children}
      </TContents>
    </div>
  )
}