import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GET_PAGE } from '../api/apiService';
import imgNoSearch from '../assets/images/empty-search.webp';

const SearchResultsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    function formatPrice(priceInXu) {
        const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
    }

    const handleLoadMore = async () => {
        try {
            const nextPage = currentPage + 1;
            const products = await GET_PAGE('products', nextPage - 1, 10, null, null, searchQuery);
            const newResults = products.data;
            setSearchResults((prevResults) => [...prevResults, ...newResults]);
            setCurrentPage(nextPage);
        } catch (error) {
            console.error('Error loading more:', error);
        }
    };

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (searchQuery) {
                    setLoading(true); // Set loading to true when starting the fetch
                    const products = await GET_PAGE('products', currentPage - 1, 10, null, null, searchQuery);
                    setSearchResults(products.data);
                    setLoading(false); // Set loading to false when fetching is complete
                } else {
                    setSearchResults([]); // Clear previous results if there's no search query
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchSearchResults();
    }, [searchQuery, currentPage]);

    // if (!searchQuery) {
    //     // Handle case when there's no search query
    //     navigate('/');
    // }

    const filteredResults = searchResults.filter((row) => row.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container">
            {filteredResults.length > 0 ? (
                <>
                    <h2>{`Tìm thấy sản phẩm cho từ khoá '${searchQuery}'`}</h2>

                    <div className="row">
                        {filteredResults.map((row) => (
                            <div className="col-xl-4 col-lg-4 col-md-4 col-6" key={row.id}>
                                <figure className="card card-product-grid">
                                    <div className="img-wrap">
                                        <span className="badge badge-danger"> MỚI </span>
                                        <a href={`/chi-tiet-san-pham?productId=${row.id}`} className="img-wrap" style={{ height: '450px', objectFit: 'cover', width: '100%' }}>
                                            <img src={`./images/items/${row.thumbnail}`} alt={row.title} />
                                        </a>
                                    </div>
                                    <figcaption className="info-wrap">
                                        <a href="#" className="title mb-2">
                                            {row.title}
                                        </a>
                                        <div className="price-wrap">
                                            <span className="price">{formatPrice(row.price)}</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary mb-3 " style={{ marginLeft: '590px' }} onClick={handleLoadMore}>
                        Load More
                    </button>
                </>
            ) : (
                <div className="container d-flex flex-column align-items-center justify-content-center mt-3">
                    <>
                        <img src={imgNoSearch} alt="No search results" />
                        <p className='mt-3 mb-3'>Không có sản phẩm bạn cần tìm.</p>
                    </>
                </div>

            )}
        </div>
    );
};

export default SearchResultsPage;