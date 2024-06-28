import React, { useState, useEffect } from "react";
import { GET_PAGE, GET_ID } from "../../api/apiService";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FilterContent from "./FilterContent";

const GridContent = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [lines, setLines] = useState([]);

	const [totalPages, setTotalPages] = useState(1);
	const numItems = 6;
	const [sortBy, setSortBy] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const currentPage = parseInt(queryParams.get("page")) || 1;
	const categoryId = queryParams.get("categoryId");
	const lineId = queryParams.get("lineId"); // Lấy lineId từ queryParams
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const handlePageChange = (page) => {
		const lineQueryParam = lineId ? `&lineId=${lineId}` : '';
		navigate(`/listingGrid?page=${page}${lineQueryParam}`);
		window.scrollTo(0, 0); // Scroll lên đầu trang
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const lineQueryParam = lineId ? `&lineId=${lineId}` : '';
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					className={`page-item ${currentPage === i ? "active" : ""}`}
				>
					<Link
						className="page-link"
						to={`?page=${i}${lineQueryParam}`}
						onClick={(event) => handlePageChange(i, event)}
					>
						{i}
					</Link>
				</li>
			);
		}
		return pageNumbers;
	};
	const handleSortChange = (event) => {
		const selectedSort = event.target.value;
		setSortBy(selectedSort);
	};

	function formatPrice(priceInXu) {
		const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
	}
	const toggleFilter = () => {
		setIsFilterVisible(!isFilterVisible);
	};
	const handleCloseFilter = () => {
		setIsFilterVisible(false);
	};
	useEffect(() => {
		if (lineId !== null) {
			GET_ID(`lines`, lineId)
				.then((item) => {
					setLines(item.data);
				})
				.catch((error) => {
					console.error("Error fetching lines:", error);
				});
		} else {
			setLines([{ name: "Tất cả sản phẩm" }]);
		}

		GET_PAGE(`products`, currentPage - 1, numItems, categoryId, lineId).then(
			(response) => {
				console.log("LineId:", lineId);
				console.log("Products:", response.data);

				let sortedProducts = [...response.data];
				if (sortBy === "priceHighToLow") {
					sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
				} else if (sortBy === "priceLowToHigh") {
					sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
				}
				setProducts(sortedProducts);

				const contentRangeHeader = response.headers["content-range"];
				const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
				const calculatedTotalPages = Math.ceil(totalItems / numItems);
				setTotalPages(calculatedTotalPages);
			}
		);
	}, [lineId, currentPage, sortBy]);  // Thêm lineId vào dependency array
	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row">
							<nav className="col-md-8">
							</nav>
						</div>
					</div>
				</div>

				<div className="row">

					<div className="col-md-12">
						<header className="mb-3">
							<div className="form-inline">
								<a className="filter-toggle" onClick={toggleFilter}>
									<img src={require(`../../assets/images/icons/filter.png`)} style={{ width: '20px', height: '20px' }} />
									CÁC CHẾ ĐỘ LỌC
								</a>

								{/* Phần bộ lọc */}
								<select
									className="m-2 form-control"
									onChange={handleSortChange}
									value={sortBy}
								>
									<option style={{ display: 'none' }} disabled defaultValue="">
										Sắp xếp theo
									</option>
									<option value="priceHighToLow">Giá: Cao - Thấp</option>
									<option value="priceLowToHigh">Giá: Thấp - Cao</option>
								</select>

							</div>
						</header>
						{/* <div className={`filter-content ${isFilterVisible ? 'visible' : ''}`}>
							<FilterContent handleSortChange={handleSortChange} sortBy={sortBy} onClose={handleCloseFilter} />
						</div> */}
						<div className="row">
							{products.length > 0 &&
								products.map((row) => (
									<div className="col-xl-4 col-lg-4 col-md-4 col-6" key={row.id}>
										<figure className="card card-product-grid">
											<div className="img-wrap">
												{row.discount > 0 && (
													<span className="badge badge-danger">-{row.discount}%</span>
												)}
												<Link to={`/chi-tiet-san-pham?productId=${row.id}`} className="img-wrap" style={{ height: '450px', objectFit: 'cover', width: '100%' }}>
													<img src={`./images/items/${row.thumbnail}`} />
												</Link>
											</div>
											{/*<!-- img-wrap.// -->*/}
											<figcaption className="info-wrap">
												{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
												<a href="#" className="title mb-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
													<span style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 80%)' }}>
														{row.title}
													</span>
												</a>
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
										</figure>
									</div>
								))}
						</div>
						{/*<!-- Hết dòng -->*/}
						<nav>
							<ul className="pagination">
								<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
									<button
										className="page-link"
										onClick={handlePrevious}
										disabled={currentPage === 1}
									>

										Trang trước
									</button>
								</li>
								{renderPageNumbers()}
								<li
									className={`page-item ${currentPage === totalPages ? "disabled" : ""
										}`}
								>
									<button
										className="page-link"
										onClick={handleNext}
										disabled={currentPage === totalPages}
									>

										Trang sau
									</button>
								</li>
							</ul>
						</nav>
						<div className="box text-center">
							<p>Bạn đã tìm thấy điều bạn đang tìm kiếm chứ?</p>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a href="" className="btn btn-light">
								Có
							</a>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a href="" className="btn btn-light" style={{ marginLeft: "10px" }}>
								Không
							</a>
						</div>
					</div>
				</div>
			</div>
			{/*<!-- container .// -->*/}
		</section>
	);

};
export default GridContent