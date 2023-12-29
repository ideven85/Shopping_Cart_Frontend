import {useShoppingCart} from "../context/ShoppingCartContext.jsx";
import storeItems from "../data/items.json"
import {Button, Stack} from "react-bootstrap";
import {currencyFormatter} from "../utitlties/FormatCurency.js";
export function CartItem({id,quantity}){
    const {removeFromCart}=useShoppingCart();
    const item=storeItems.find(item=>item.id===id);
    if(item==null) return null;

    return (
        <Stack
            direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{height:"75px",width:"125px",objectFit:"cover"}} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity >=1 && <span className="text-muted" style={{fontSize: ".65rem"}}>
                    x{quantity}</span> }
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {currencyFormatter(item.price)}
                </div>
                <div>{currencyFormatter(item.price*quantity)}</div>

            </div>
            <Button variant="outline-danger" size="sm" onClick={
                ()=>removeFromCart(item.id)
            }>&times;</Button>
        </Stack>
    )

}