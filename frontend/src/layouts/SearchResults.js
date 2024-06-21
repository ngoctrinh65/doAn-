// SearchResults.js
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/SearchResults.css';

const SearchResults = ({ results, onLoadMore, onProductClick, onClose }) => {
  const searchResultsRef = useRef(null);

  console.log('SearchResults - results:', results);

  const handleClickOutside = (event) => {
    if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
      onClose(); // Gọi hàm onClose khi nhấp chuột ra ngoài thành phần SearchResults
    }
  };
  function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
}
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchResultsRef}>
      {results && results.length > 0 ? (
        <table className="search-results-table ms-3">
          <tbody>
            {results.slice(0, 5).map((result) => {
              console.log('Result:', result);
              return (
                <tr key={result.id} className="search-result-row">
                  <td className="image-cell">
                    <Link to={`/product-detail?productId=${result.id}`} onClick={onProductClick}>
                      <img src={`./images/items/${result.thumbnail}`} alt={`Thumbnail for ${result.title}`} style={{ height: '100px' }} />
                    </Link>
                  </td>
                  <td className="info-cell mt-4">
                    <Link to={`/product-detail?productId=${result.id}`} onClick={onProductClick}>
                      <div className='title'>{result.title}</div>
                      <div className='price'>{formatPrice(result.price)}</div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No results found.</div>
      )}
    
    </div>
  );
};

export default SearchResults;
