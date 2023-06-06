import ShoppingItem from "./ShoppingItem";
import '../css/ShoppingList.css'
const ShoppingList = (props) => {
   return (
      <div className="ShoppingList">
         <ul>
            {props.list.map(i =>
               <ShoppingItem {...i} />
            )}
         </ul>
      </div>
   )
}

export default ShoppingList;