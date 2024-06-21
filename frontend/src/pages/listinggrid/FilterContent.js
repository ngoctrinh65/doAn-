// FilterContent.jsx
import React from 'react';
import './css/Filter.css';
const FilterContent = ({handleSortChange, sortBy, onClose}) => {
    const handleClose = () => {
        onClose(); // Gọi hàm onClose truyền từ component cha
    };
    return (
        <div className="form-inline">
            <a className="mr-md-auto">
                <img src={require(`../../assets/images/icons/filter.png`)} style={{ width: '20px', height: '20px' }} />
                CÁC CHẾ ĐỘ LỌC
            </a>
            <select
                className="mr-2 form-control"
                onChange={handleSortChange}
                value={sortBy}
            >
                {/* Option mặc định, ẩn đi bằng CSS */}
                <option style={{ display: 'none' }} disabled defaultValue="">
                    Sắp xếp theo
                </option>
                <option value="priceHighToLow">Giá: Cao - Thấp</option>
                <option value="priceLowToHigh">Giá: Thấp - Cao</option>
            </select>
            <div className="btn-group">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    href="page-listing-grid.html"
                    className="btn btn-light active"
                    data-toggle="tooltip"
                    title="Chế độ danh sách"
                >
                    <i className="fa fa-bars"></i>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    href="page-listing-large.html"
                    className="btn btn-light"
                    data-toggle="tooltip"
                    title="Chế độ lưới"
                >
                    <i className="fa fa-th"></i>
                </a>
            </div>
            <button className="close-button" onClick={handleClose }>
                X
            </button>
        </div>
    );
}

export default FilterContent;
