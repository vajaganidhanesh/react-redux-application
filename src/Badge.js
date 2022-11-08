import React from "react";
import {connect} from "react-redux"

function Badge({product})
{
    return(

        <>
            <button type="button" class="btn btn-primary position-relative">
                Total Products
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {product.length}
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </>

    )
}

const mapStateToProps = state =>({
    product : state
}) 


export default connect(mapStateToProps)(Badge);