import React, { useState, useEffect } from "react";
import { GET_ALL } from "../../api/apiService";
import { Link, useNavigate } from "react-router-dom";
import "./CategoryContent.css"; // Import the CSS file for styling

const CategoryContent = () => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	const [hoveredCategory, setHoveredCategory] = useState(null);

	useEffect(() => {
		// Fetch categories when the component mounts
		GET_ALL("categories").then((item) => setCategories(item.data));
	}, []);

	// Filter categories where 'isHome' is equal to 1
	const filteredCategories = categories.filter(
		(category) => category.isHome === 1
	);

	// Handle category click
	const handleCategoryClick = (categoryId) => {
		navigate(`/listinggrid?categoryId=${categoryId}`);
	};

	return (
		<section className="section-content padding-y">
			<div className="container">
				<nav className="row">
					{filteredCategories.map((category) => (
						<div className="col-md-6" key={category.id}>
							<Link
								to={`/listinggrid?categoryId=${category.id}`}
								onMouseEnter={() => setHoveredCategory(category)}
								onMouseLeave={() => setHoveredCategory(null)}
							>
								<div className="card card-category">
									<div className="img-wrap" style={{ background: category.backgroundColor }}>
										<img
											src={require(`../../assets/images/categories/${category.thumbnail}`)}
											alt={category.name}
										/>
									</div>
									<div className="category-name-overlay ">
										<p className ="col">{category.name}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</nav>
			</div>
		</section>
	);
};

export default CategoryContent;
