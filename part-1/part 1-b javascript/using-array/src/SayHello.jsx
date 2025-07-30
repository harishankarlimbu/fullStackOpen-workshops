function SayHello({person}){
// Helper function to combine firstName and lastName
const getFullName=()=> `${person.firstName} ${person.lastName}!` 
return (
    <h2> Hello, {getFullName()}</h2>
)
}
export default SayHello;