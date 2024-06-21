import React, { useState, useEffect } from "react";
import { GET_ALL, GET_PAGE } from "../../api/apiService";
import { Link, useNavigate } from "react-router-dom";

const CategoryContent = () => {
    const [lines, setLines] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // Handle category click
    const handleCategoryClick = (lineId) => {
        navigate(`/listinggrid?lineId=${lineId}`);
    };

    // Filter categories where 'isHome' is equal to 1
    const filteredCategories = categories.filter(
        (category) => category.isHome === 1
    );

    // Filter lines where 'isHome' is equal to 1
    const filteredLines = lines.filter(
        (line) => line.isHome === 1
    );

    useEffect(() => {
        // Gọi API để lấy danh sách dòng sản phẩm
        GET_ALL("lines", 0, 10)
            .then(response => {
                // Lưu danh sách dòng sản phẩm vào state
                setLines(response.data);
            })
            .catch(error => {
                console.error("Error fetching product lines:", error);
            });

        // Gọi API để lấy danh sách thể loại
        GET_ALL("categories")
            .then(response => {
                // Lưu danh sách thể loại vào state
                setCategories(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', }}>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ marginBottom: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={require("../../assets/images/banners/banner-category.avif")} alt="Banner Category" style={{ maxWidth: '60%', height: 'auto' }} />
                    <Link to="/" style={{ marginTop: '10px',display: 'block', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
                        TRANG CHỦ NƯỚC HOA
                    </Link></div>
                    
                </div>
                    {filteredCategories.map(category => (
                        <div key={category.id} style={{ flex: '1', margin: '0 10px' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{category.name}</div>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {filteredLines
                                    .filter(line => line.category.id === category.id)
                                    .map(line => (
                                        <li key={line.id} style={{ marginBottom: '5px' }}>
                                            <Link to={`/listinggrid?lineId=${line.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                {line.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryContent;
