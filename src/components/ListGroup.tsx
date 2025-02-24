import { MouseEvent } from "react";

function ListGroup() {

    const items = ['New York', "Tokyo", "Washington", "Kabul", "Moscow"];
   
    const handleClick = (event: MouseEvent) => {
        console.log(event.target);
  }
   

    return <>
        <h1>List Group</h1>
        {items.length === 0 && <p>No Items found</p>}
        <ul className="list-group">
            {items.map(item => <li key={item} className="list-group-item" onClick={handleClick}>{item}</li>)}
</ul>
    </>
}

export default ListGroup;