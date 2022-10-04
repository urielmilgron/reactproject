import Item from "../Item/Item"

const ItemList = ({notices}) => {
return(
    <>
    {notices.map((noti) => <Item key={noti.id} notice={noti} />)}
    </>
)
}

export default ItemList;