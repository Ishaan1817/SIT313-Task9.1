import Card from './Card'
import './Card.css'
import staffList from './staffList'

 function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    position={staff.position}
/>
 }
function CardList(props) {
   
     const filteredstaff = staffList.filter( function search(staff)
     {
        return(staff.name.toLowerCase().includes(props.searchstaff.toLowerCase()) )

     }
     )
    return (
        
        <div className='row'>
           { filteredstaff.map(cardComponent)}
        </div>
    )

}

export default CardList