import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../seeders/data';

const ProductDetails = () => {
    const { productName } = useParams();
    // Replace hyphens with spaces to match product names
    const decodedProductName = productName.replace(/-/g, ' ');
    const product = productsData.find(p => p.ProductName === decodedProductName);

    // Initialize state with default values
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState('');

    // Update state when product data changes
    useEffect(() => {
        if (product && product.Variants.length > 0) {
            const initialVariant = product.Variants[0];
            setSelectedVariant(initialVariant);
            if (initialVariant.Colors.length > 0) {
                const initialColor = initialVariant.Colors[0];
                setSelectedColor(initialColor);
                if (initialColor.Images.length > 0) {
                    setMainImage(initialColor.Images[0]);
                }
            }
            if (initialVariant.Sizes.length > 0) {
                setSelectedSize(initialVariant.Sizes[0]);
            }
        }

        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [product]);

    // Check if product data is available
    if (!product || !selectedVariant || !selectedColor || !selectedSize || !mainImage) {
        return <div>Loading...</div>;
    }

    const handleVariantChange = (variantID) => {
        const variant = product.Variants.find(v => v.VariantID === variantID);
        setSelectedVariant(variant);
        setSelectedColor(variant.Colors[0]);
        setSelectedSize(variant.Sizes[0]);
        setMainImage(variant.Colors[0].Images[0]);
    };

    const handleColorChange = (colorName) => {
        const color = selectedVariant.Colors.find(c => c.ColorName === colorName);
        setSelectedColor(color);
        setMainImage(color.Images[0]);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    // Function to create a WhatsApp URL with the product details and main image link
    const createWhatsAppUrl = () => {
        const phoneNumber = "+916302141511"; // Add the specific phone number here
        const URL = process.env.REACT_APP_URL
        const message = `Check out this product: ${product.ProductName}\n\n`
            + `${product.Description}\n`
            + `Category: ${product.Category}\n`
            + `Finish: ${product.Finish}\n`
            + `Selected Size: ${selectedSize.Length} x ${selectedSize.Width} x ${selectedSize.Height}\n`
            // + `Price: $${selectedSize.Price}\n`
            // + `${selectedSize.InStock ? '' : '(Out of Stock)'}\n`
            + `Image:\n`
            + `${URL}${mainImage}\n`;

        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="container mx-auto p-4 flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col items-center">
                <img
                    src={mainImage}
                    alt={product.ProductName}
                    className="w-full h-96 object-cover"
                />
                <div className="flex justify-center mt-4 flex-wrap">
                    {selectedColor.Images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.ProductName} - ${selectedColor.ColorName} ${index + 1}`}
                            className="w-16 h-16 mx-2 my-1 cursor-pointer object-cover"
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1 lg:ml-4 mt-4 lg:mt-0">
                <h1 className="text-3xl font-semibold">{product.ProductName}</h1>
                <p className="text-lg mt-2">{product.Description}</p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Category: </h2><span>{product.Category}</span>
                    <h2 className="text-xl font-semibold">Finish: </h2><span>{product.Finish}</span>
                    <div className="mt-4">
                        <label className="block text-lg font-semibold">Size</label>
                        <select
                            className="w-full mt-2 p-2 border rounded"
                            value={JSON.stringify(selectedSize)}
                            onChange={(e) => handleSizeChange(JSON.parse(e.target.value))}
                        >
                            {selectedVariant.Sizes.map(size => (
                                <option key={size.Length + size.Width + size.Height} value={JSON.stringify(size)}>
                                    {`${size.Length} x ${size.Width} x ${size.Height}`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block text-lg font-semibold">Color</label>
                        <div className="flex flex-wrap">
                            {selectedVariant.Colors.map(color => (
                                <div
                                    key={color.ColorName}
                                    className={`p-2 m-2 border cursor-pointer ${selectedColor.ColorName === color.ColorName ? 'border-black' : ''}`}
                                    onClick={() => handleColorChange(color.ColorName)}
                                >
                                    <img
                                        src={color.Images[0]}
                                        alt={color.ColorName}
                                        className="w-16 h-16 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <a
                        href={createWhatsAppUrl()}
                        className="bg-green-500 text-white py-2 px-4 rounded inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Share via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
