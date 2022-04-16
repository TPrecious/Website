import React from "react";

const GridDemo = () => {

    return (
        <div className="grid grid-rows-4 gap-1 text-center">
            <div className="grid grid-cols-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div className="grid grid-cols-4">
                 <div>1</div>
                 <div>2</div>
                 <div>3</div>
                 <div>4</div>
            </div>
            <div className="grid grid-cols-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                </div>
            <div className="grid grid-cols-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
    )

}

export default GridDemo