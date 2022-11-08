
import { useState } from 'react'
import {connect} from 'react-redux'
import { AddProduct } from './Action'
import { DeleteProduct } from './Action'

function CARD(){
    let [items,setItems] = useState("");
    // const submithandler = async e =>{
    //     e.preventdefault();
    //     if(items !== "")
    //     {
    //         await AddProduct({name:items})
    //     }
    // }

    async function submit_handler(e){
        e.preventdefault();
        if(items !=="")
        {
            await AddProduct({name:items});
            setItems("");
        }
        setItems("");
    }

    return(
        <>
            <div className='mt-3 card'>
                <input placeholder='place enter protect' style={{"border":"none","padding":"20px"}}/>
                <button type='submit' className='btn-success' style={{"border":"none","padding":"20px"}}>add product</button>

                <div>

                </div>
            </div>
        </>
    )
}
const mapStateToProps = state =>({
    product : state
}) 
export default connect(mapStateToProps,{AddProduct,DeleteProduct}) (CARD)