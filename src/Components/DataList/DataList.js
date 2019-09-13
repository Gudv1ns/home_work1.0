import React from 'react';

const DataList = (props) => {
    console.log(props.dataList)
    return (
        <ul>
            {props.dataList.map((item) => {
                return (
                    item.map((selfItem) => {
                        return (
                            <li>{selfItem.title}</li>
                        )
                    })        
                )
            })}
        </ul>
    )
}

export default DataList;