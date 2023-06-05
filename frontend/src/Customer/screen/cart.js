import { useState, useEffect, useContext } from "react";
import Cartitem from "../components/cartitems";
import axios from "axios";
import "./cart.css";
import SearchBar from "../components/filter";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { CartContext } from '../screen/cartContext';

function Cart() {
    const navigate = useNavigate();
    const name = window.location.href.split('/').pop();
    console.log(name)
    const [listOfrestaurantsmenuitems, setListOfrestaurantsmenuitems] = useState([]);
    const { getItems } = useContext(CartContext);
    let checkLogined = false
    const item = getItems();
    console.log(item);
    const token = localStorage.getItem('token');
    token == null ? checkLogined = false : checkLogined = true;
    console.log(checkLogined)
    const logout = () => {
        alert("you are not logedin ")
        navigate('/login')
    }



    useEffect(() => {
        axios.get("http://localhost:3001/getresturantmenuitem").then((response) => {
            setListOfrestaurantsmenuitems(response.data);
        })
    }, [])
    var temp = listOfrestaurantsmenuitems.filter(check);

    // const [array, setarray] = useState([]);
    var array = [];
    return (

        <div data-testid="menuitemsc">
            {checkLogined === false ? logout() : <></>}
            <br />
            {/* <SearchBar placeholder="Enter item name.." data={temp} /> */}
            {/* <div className="dashboard-item"></div> */}
            {/* <SearchBar /> */}

            <div className="flex-container">
                {Searchbar()}
                <SearchIcon className="searchIcon" />

            </div>

            <div className="row">
                {item.map(menuitem => {
                    return <div className="col-md-4 p-3">
                        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                            <div>
                                <Cartitem menuitem={menuitem} />
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="bt">
                <button className="btn">Proceed To Checkout</button>
            </div>

        </div>
    );
    function check(listOfrestaurantsmenuitems) {
        return listOfrestaurantsmenuitems.restaurantName === name;
    }
    function Searchbar() {
        const [query, setQuery] = useState("")
        return (
            <div className="search">

                <input placeholder="Enter Item.." onChange={event => setQuery(event.target.value)} />
                {
                    temp.filter(post => {
                        if (query === '') {
                            // array.length = 0;
                            array.push(post);
                            console.log(array);
                            // return post;
                        }

                        else if (post.itemName.toLowerCase().includes(query.toLowerCase())) {
                            array.push(post);
                            console.log(array);
                            // return post;
                        }
                    })
                    //     .map((post, index) => (
                    //     <div className="box" key={index}>
                    //         <p>{post.itemName}</p>
                    //     </div>   
                    // ))
                }


            </div >
        )
    }

};
export default Cart;
