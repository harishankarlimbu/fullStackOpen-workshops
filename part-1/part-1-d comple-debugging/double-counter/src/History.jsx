const History=({history})=> history.length ===0 ? (<p> No clicks</p>) :(<p> The click goes like : {history.join('-')}</p>)
export default History;