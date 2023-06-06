import '../css/ShoppingItem.css'
const ShoppingItem = (props) => {
   return (
      <li className="ShoppingItem">
         <h2 style={{ color: props.status ? "red" : "green", textDecoration: props.status ? "line-through" : "none" }}>{props.item} - {props.qty}</h2>
      </li>
   )
}

export default ShoppingItem;