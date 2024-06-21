import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imglogo from '../assets/logo.png';
import SearchResults from './SearchResults';
import axios from 'axios';
import { useAuth } from './AuthContext';
import '@fortawesome/fontawesome-free/css/all.css';
import { GET_PAGE } from '../api/apiService';
function Header({ cartItemCount }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const { user, logout } = useAuth();
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user) {
					const response = await axios.get('http://localhost:8080/api/users', {
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					});
					console.log('API Response:', response.data);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching user details:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, [user]);

	const handleProductClick = () => {
		// Close the dropdown when a product is clicked
		setDropdownOpen(false);
	};

	const handleSearchChange = async (event) => {
		try {
			setSearchQuery(event.target.value);
			if (!event.target.value.trim()) {
				setSearchResults([]);
				setDropdownOpen(false);
			} else {
				const nextPage = 1;

				const productResponse = await GET_PAGE('products', nextPage - 1, 10, null, null, event.target.value);

				const products = productResponse.data;

				// Thực hiện filter trên dữ liệu
				const filteredProducts = products.filter(item => item.title?.toLowerCase().includes(event.target.value.toLowerCase()));

				setSearchResults(filteredProducts);
				setDropdownOpen(true);
			}
		} catch (error) {
			console.error('Error during search:', error);
		}
	};

	const handleLoadMore = async () => {
		try {
			const nextPage = currentPage + 1;

			const productResponse = await GET_PAGE('products', nextPage - 1, 10, null, null, searchQuery);

			const newProducts = productResponse.data;

			// Thực hiện filter trên dữ liệu mới (nếu cần)
			const filteredNewProducts = newProducts.filter(item => item.title?.toLowerCase().includes(searchQuery.toLowerCase()));

			setSearchResults((prevResults) => [...prevResults, ...filteredNewProducts]);
			setCurrentPage(nextPage);
		} catch (error) {
			console.error('Error loading more:', error);
		}
	};
	const handleSearchSubmit = async (event) => {
		event.preventDefault(); // Ngăn chặn hành vi mặc định của form
		try {
			// Fetch dữ liệu sản phẩm ngay tại đây
			const nextPage = 1;
			const productResponse = await GET_PAGE(
				'products',
				nextPage - 1,
				10,
				null,
				null,
				searchQuery
			);
			const products = productResponse.data;

			// Thực hiện filter trên dữ liệu
			const filteredProducts = products.filter((item) =>
				item.title?.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setSearchResults(filteredProducts);
			navigate(`/search-page?q=${searchQuery}`);
			setDropdownOpen(false);
		} catch (error) {
			console.error('Lỗi trong quá trình tìm kiếm:', error);
		}
	};
	const handleClose = () => {
		setDropdownOpen(false);
	};
	return (
		<header className="section-header">
			<section className="header-main ">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-md-12">
							<a href="http://localhost:3000/" className="brand-wrap">
								<img className="logo" src={imglogo} />
							</a>
						</div>
						<div className="col-xl-6 col-lg-5 col-md-6">
							<form className="search-header" onSubmit={handleSearchSubmit}>
								<div className="input-group w-100">
									<input
										type="text"
										className="form-control"
										placeholder="Tìm kiếm"
										value={searchQuery}
										onChange={handleSearchChange}
									/>
									<div className="input-group-append">
										<button className="btn btn-dark" type="submit">
											<i className="fa fa-search"></i> Tìm kiếm
										</button>
									</div>
								</div>
							</form>

							{isDropdownOpen && (
								<div
									style={{
										position: 'absolute',
										top: '100%',
										left: 0,
										zIndex: 100,
										backgroundColor: 'white',
										border: '1px solid #ccc',
										borderRadius: '8px',
										overflow: 'hidden',
										boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
									}}
								>
									<SearchResults results={searchResults} onLoadMore={handleLoadMore} onProductClick={handleProductClick} onClose={handleClose} />
								</div>
							)}

						</div>

						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="widgets-wrap float-md-right">
								
								<div className="widget-header mr-3">
									{loading ? (
										<Link to="/register" className="widget-view">
											<div className="icon-area">
												<i className="fa fa-user"></i>
											</div>
											<small className="text">Đăng ký</small>
										</Link>
									) : (
										<>
											{user ? (
												<>

													<Link to="" className="btn btn-link" onClick={() => logout()}>
														<div className="icon-area">
															<i className="fa-solid fa-right-from-bracket" style={{ color: '#969696' }}></i>
														</div>
														<small className="text">Đăng xuất</small>
													</Link>
													<Link to="/my-account" className="btn btn-link">
														<div className="icon-area">
															<i className="fa fa-user"></i>
														</div>
														<small className="text">{user.fullname}</small>
													</Link>
												</>
											) : (
												<Link to="/register" className="widget-view">
													<div className="icon-area">
														<i className="fa fa-user"></i>
													</div>
													<small className="text">Đăng ký</small>
												</Link>
											)}
										</>
									)}
								</div>
								<div className="widget-header mr-3">
									<Link to={`/orders`} className="widget-view">
										<div className="icon-area">
											<i className="fa fa-store"></i>
										</div>
										<small className="text"> Đơn hàng </small>
									</Link>
								</div>
								{user ? (
									<div className="widget-header">
										<Link to={`/shopping-cart`} className="widget-view">
											<div className="icon-area">
												<span className="notify">{cartItemCount}</span>
												<i className="fa fa-shopping-cart"></i>
											</div>
											<small className="text"> Giỏ hàng </small>
										</Link>
									</div>
								) : (
									<div className="widget-header">
										<Link to={`/shopping-cart`} className="widget-view">
											<div className="icon-area">
												<i className="fa fa-shopping-cart"></i>
											</div>
											<small className="text"> Giỏ hàng </small>
										</Link>
									</div>
								)}


							</div>
						</div>
					</div>
				</div>
			</section>


			<nav className="navbar navbar-main navbar-expand-lg d-flex justify-content-center">
				<div className=" ">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse " id="main_nav">
						<ul className="navbar-nav">

							<li className="nav-item">
								<Link className="nav-link" to={`/danh-muc`}>Danh mục</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/listinggrid`}>Sản phẩm</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Tin tức</a>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to={`/lien-he`}>Liên hệ</Link>
							</li><li className="nav-item">
							<Link className="nav-link" to={`/gioi-thieu`}>Giới thiệu</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>

		</header>
	);
}
// Connect the component to Redux
export default Header;