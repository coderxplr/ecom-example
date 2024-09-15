import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../seeders/data';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion components

const ProductDetails = () => {
    const { ProductId } = useParams();
    const product = productsData.find(p => p.ProductId === ProductId);

    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState('');

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
        window.scrollTo(0, 0);
    }, [product]);

    if (!product || !selectedVariant || !selectedColor || !selectedSize || !mainImage) {
        return <div>Loading...</div>;
    }

    const handleColorChange = (colorName) => {
        const color = selectedVariant.Colors.find(c => c.ColorName === colorName);
        setSelectedColor(color);
        setMainImage(color.Images[0]);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const createWhatsAppUrl = () => {
        const phoneNumber = "+916302141511"; 
        const message = 
            `Hello, I'm interested in the following product:\n\n` +
            `🛍️ *Product*: ${product?.ProductName}\n` +
            `📝 *Description*: ${product?.Description}\n` +
            `🎨 *Finish*: ${product?.Finish}\n` +
            `✂️ *Edge*: ${product?.Variants[0]?.Colors[0]?.Edge}\n` +
            `🌈 *Color*: ${product?.Variants[0]?.Colors[0]?.ColorName}\n` +
            `📏 *Size*:  ${selectedSize.Length} x ${selectedSize.Width},  Thickness : ${selectedSize.Thickness}\n\n` +
            `🖼️ *Image*: ${mainImage}\n\n` +
            `Could you please provide more details and availability? Thank you!`;
    
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    // Framer Motion variants for sliding effect
    const slideVariant = {
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -300 }
    };

    return (
        <div className="container mx-auto p-4 flex flex-col lg:flex-row" style={{ fontFamily: 'lexand' }}>
            <div className="flex-1 flex flex-col items-center">
                {/* AnimatePresence with mode="wait" */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={mainImage}  // This key is crucial for triggering the animation when the image changes
                        src={mainImage}
                        alt={product.ProductName}
                        className="w-full h-96 p-1 object-contain border"
                        variants={slideVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
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
                    <span className="text-xl font-semibold">Finish: </span><span>{product?.Variants[0]?.Finish}</span>
                    <br />
                    {product?.Variants[0]?.Colors[0]?.Edge && (
                        <span>
                            <span className="text-xl font-semibold">Edge: </span>
                            <span>{product?.Variants[0]?.Colors[0]?.Edge}</span>
                        </span>
                    )}
                    <br />
                    <span className="text-xl font-semibold">Colors: </span><span>{product?.Variants[0]?.Colors[0]?.ColorName}</span>
                    <div className="mt-4">
                        <label className="block text-lg font-semibold">Size</label>
                        <select
                            className="w-full mt-2 p-2 border rounded"
                            value={JSON.stringify(selectedSize)}
                            onChange={(e) => handleSizeChange(JSON.parse(e.target.value))}
                        >
                            {selectedVariant.Sizes.map(size => (
                                <option key={size.Length + size.Width + size.Thickness} value={JSON.stringify(size)}>
                                    {`${size?.Length} x ${size?.Width},  Thickness: ${size?.Thickness}`}
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
