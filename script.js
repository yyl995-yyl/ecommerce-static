// 商品数据（直接写在前端，无需API）
const PRODUCTS_DATA = [
    {
        id: 1,
        title: "iPhone 15 Pro",
        price: 999.99,
        description: "最新款iPhone，搭载A17 Pro芯片，性能强劲，拍照出色",
        image_url: "iphone15.jpg",
        category: "electronics"
    },
    {
        id: 2,
        title: "MacBook Pro",
        price: 1999.99,
        description: "专业级笔记本电脑，M3芯片，适合编程和设计工作",
        image_url: "macbook.jpg",
        category: "electronics"
    },
    {
        id: 3,
        title: "Nike Air Max",
        price: 129.99,
        description: "舒适的运动鞋，气垫设计，适合日常穿着和运动",
        image_url: "nike.jpg",
        category: "clothing"
    },
    {
        id: 4,
        title: "咖啡杯套装",
        price: 29.99,
        description: "精美陶瓷咖啡杯，4件套，适合家庭和办公室使用",
        image_url: "coffee.jpg",
        category: "home"
    },
    {
        id: 5,
        title: "Python编程书籍",
        price: 49.99,
        description: "Python编程从入门到精通，适合初学者和进阶开发者",
        image_url: "pythonBook.jpg",
        category: "books"
    }
];

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    
    document.getElementById('categoryFilter').addEventListener('change', function(e) {
        loadProducts(e.target.value);
    });
});

// 加载商品数据
function loadProducts(category = '') {
    const container = document.getElementById('productsContainer');
    
    let filteredProducts = PRODUCTS_DATA;
    if (category) {
        filteredProducts = PRODUCTS_DATA.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
}

// 显示商品列表
function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    
    if (products.length === 0) {
        container.innerHTML = '<div class="error">暂无商品数据</div>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product-card" onclick="viewProductDetail(${product.id})">
            <img src="${product.image_url}" alt="${product.title}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/300x300/cccccc/666666?text=图片加载失败'">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">¥${product.price}</div>
                <p class="product-description">${product.description}</p>
                <span class="product-category">${getCategoryName(product.category)}</span>
            </div>
        </div>
    `).join('');
}

// 获取分类名称
function getCategoryName(category) {
    const categoryMap = {
        'electronics': '电子产品',
        'clothing': '服装',
        'home': '家居',
        'books': '图书'
    };
    return categoryMap[category] || category;
}

// 查看商品详情
function viewProductDetail(productId) {
    // 使用URL参数传递商品ID
    window.location.href = `detail.html?id=${productId}`;
}