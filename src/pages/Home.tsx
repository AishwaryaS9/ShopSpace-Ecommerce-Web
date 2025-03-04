import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { getAllProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setProductsData } from '../store/slice/productsSlice';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useAppDispatch();
    const filteredProducts = useAppSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                if (response) {
                    setProducts(response);
                    dispatch(setProductsData(response));
                } else {
                    console.log("Failed to get products");
                }
            } catch (error) {
                console.log("Failed to fetch products", error)
            }
        }
        fetchProducts();
    }, [dispatch]);

    const displayedProducts = filteredProducts.filter((product: any) =>
        product.category.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    const sectionTitle = searchTerm ? searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) : 'Explore Our Products';

    return (
        <div>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Hero />
            <div className="mt-8 lg:mt-16 lg:mx-24">
                <div className="border-l-4 border-lightCopper pl-4 ">
                    <p className="text-lightCopper font-bold text-lg md:text-xl">Our Products</p>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 mb-6 text-left">
                    {sectionTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product: any) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
            <Services />
            <Footer />
        </div>
    )
}

export default Home