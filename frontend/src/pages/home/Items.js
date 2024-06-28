import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import { Link } from "react-router-dom";

function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
}

const Items = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GET_ALL(`products/getlatest`).then((item) =>
            setProducts(item.data)
        );
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="section-content padding-y">
			<header className="section-heading mb-4 text-center">
				<h3 className="title-section" style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '45px' }}>
					Sản phẩm mới
				</h3>
			</header>
            <div className="container">
                <div className="row">
                    {products.length > 0 &&
                        products.map((row) => (
                            <div className="col-xl-4 col-lg-4 col-md-4 col-6" key={row.id}>
                                <div className="card card-product-grid" onClick={scrollToTop}>
                                <div className="img-wrap">
                                        {row.discount > 0 && (
                                            <span className="badge badge-danger">-{row.discount}%</span>
                                        )}
                                        <Link to={`/chi-tiet-san-pham?productId=${row.id}`} className="img-wrap" style={{ height: '450px', objectFit: 'cover', width: '100%' }}>
                                            <img src={`./images/items/${row.thumbnail}`} alt={`Thumbnail for ${row.title}`} />
                                        </Link>
                                    </div>
                                    <figcaption className="info-wrap">
                                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            <Link to={`/chi-tiet-san-pham?productId=${row.id}`} className="title mb-2">
                                                {row.title}
                                            </Link>
                                        </div>
                                        <div className="price-wrap">
                                            {row.discount > 0 && (
                                                <div>
                                                    <span className="price">{formatPrice(row.price - (row.price * row.discount) / 100)}</span>

                                                    <span className="price-old" style={{ textDecoration: "line-through" }}>{formatPrice(row.price)}</span>
                                                </div>
                                            )}
                                            {row.discount === 0 && (
                                                <span className="price">{formatPrice(row.price)}</span>
                                            )}
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Items;
