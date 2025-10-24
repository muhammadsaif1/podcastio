import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, clearError } from "@/redux/slices/productSlice";
import "./productsPage.scss";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const {
    list: products,
    loadingList: loading,
    error,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [imageIndexes, setImageIndexes] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const ITEMS_PER_PAGE_DESKTOP = 12;
  const ITEMS_PER_PAGE_MOBILE = 9;

  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(
        window.innerWidth <= 768
          ? ITEMS_PER_PAGE_MOBILE
          : ITEMS_PER_PAGE_DESKTOP
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const indexes = {};
      products.forEach((product) => {
        indexes[product.id] = 0;
      });
      setImageIndexes(indexes);
    }
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) => {
        const newIndexes = { ...prev };
        products.forEach((product) => {
          if (product.images && product.images.length > 1) {
            newIndexes[product.id] =
              (prev[product.id] + 1) % product.images.length;
          }
        });
        return newIndexes;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = product.title?.toLowerCase().includes(searchLower);
    const tagsMatch = product.tags?.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return titleMatch || tagsMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseError = () => {
    dispatch(clearError());
  };

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchProducts());
  };

  const handleProductClick = (productId) => {
    // Route to Printify product page
    const printifyUrl = `https://printify.com/app/products/${productId}`;
    window.open(printifyUrl, "_blank");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return (
      <div className="pagination">
        <button
          className="pagination__arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {pages.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="pagination__ellipsis">
              {page}
            </span>
          ) : (
            <button
              key={page}
              className={`pagination__number ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          className="pagination__arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="products-page texture-bg-2">
        <div className="loading">
          <div className="loading__spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page texture-bg-2">
      <div className="products-container">
        {error && (
          <div className="error-banner">
            <div className="error-banner__content">
              <div className="error-banner__icon">⚠️</div>
              <div className="error-banner__text">
                <strong>Error:</strong> {error}
              </div>
              <div className="error-banner__actions">
                <button onClick={handleRetry} className="error-banner__retry">
                  Retry
                </button>
                <button
                  onClick={handleCloseError}
                  className="error-banner__close"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="products-header">
          <h1 className="products-header__title">Our Products</h1>
          <div className="products-header__search">
            <input
              type="text"
              placeholder="Search products by title or tags..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        {filteredProducts.length === 0 && !error ? (
          <div className="empty-state">
            <div className="empty-state__icon">{searchQuery ? "🔍" : "📦"}</div>
            <h2>
              {searchQuery ? "No Products Found" : "No Products Available"}
            </h2>
            <p>
              {searchQuery
                ? `No products match "${searchQuery}". Try a different search term.`
                : "There are currently no products available. Please check back later."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="clear-search-btn"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="products-grid">
              {currentProducts.map((product, index) => {
                const currentImageIndex = imageIndexes[product.id] || 0;
                const image =
                  product.images?.[currentImageIndex]?.src ||
                  product.images?.[0]?.src ||
                  "";

                return (
                  <div
                    key={product.id}
                    className="product-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="product-card__image-wrapper">
                      <img
                        src={image}
                        alt={product.title}
                        className="product-card__image"
                      />
                      {product.images && product.images.length > 1 && (
                        <div className="product-card__image-indicator">
                          {product.images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`indicator-dot ${
                                idx === currentImageIndex ? "active" : ""
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="product-card__content">
                      <h3 className="product-card__title">{product.title}</h3>

                      <div className="product-card__price">
                        ${(product.variants?.[0]?.price / 100 || 0).toFixed(2)}
                      </div>

                      {product.description && (
                        <p className="product-card__description">
                          {truncateText(product.description, 80)}
                        </p>
                      )}

                      {product.tags && product.tags.length > 0 && (
                        <div className="product-card__tags">
                          {product.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="tag">
                              {tag}
                            </span>
                          ))}
                          {product.tags.length > 3 && (
                            <span className="tag-more">...</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && renderPagination()}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
