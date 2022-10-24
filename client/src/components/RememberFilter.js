import React from 'react'

function RememberFilter ({sortBy, handleSort}) {


    const handleSortBy = (e) => {
        handleSort(e)
    }

    return (
        <div className="filterWrapper">
            <div className="ui menu">
                <div className="ui item">
                    <label>Sort by</label>
                </div>
                <div className="ui item"></div>
                    <select
                        className="ui selection dropdown"
                        name="sort"
                        onChange={handleSortBy}
                        value={sortBy}
                    >
                            <option value=""></option>
                            <option value="name">Created At:</option>
                            <option value="weight">Updated At:</option>
                    </select>
            </div>

        </div>
    )
}

export default RememberFilter
