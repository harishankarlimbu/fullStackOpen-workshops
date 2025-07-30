import SayHello from "./SayHello";
const people = [
  { rank: 250, firstName: 'swikar', lastName: 'ramdam' },
  { rank: 900, firstName: 'anish', lastName: 'shrestha' },
  { rank: 230, firstName: 'ashok', lastName: 'limbu' },
  { rank: 25, firstName: 'bijaya', lastName: 'darji' },
]

function App() {
  const filterPerson = people.filter(person => person.rank >= 200);
  return (
    <div>
      {filterPerson.length > 0 ? (filterPerson.map(person => (
        <SayHello key={person.rank} person={person} />
      ))
      ) : (
        <h2> no records founds</h2>
      )
      }
    </div>
  )

}

export default App
