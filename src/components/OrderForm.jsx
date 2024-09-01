import React, { useState } from 'react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        areaOfUse: '',
        productType: '',
        cutting: '',
        finish: '',
        color: '',
        thickness: '',
        size: '',
        qty: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const createWhatsAppUrl = () => {
        const phoneNumber = "+916302141511"; // Specific phone number
        const message = 
            `Hi there! I'd like to place a special order with the following details:\n\n` +
            `🛠️ *Area of Use*: ${formData.areaOfUse}\n` +
            `📦 *Product Type*: ${formData.productType}\n` +
            `✂️ *Cutting*: ${formData.cutting}\n` +
            `✨ *Finish*: ${formData.finish}\n` +
            `🎨 *Color*: ${formData.color}\n` +
            `📏 *Thickness*: ${formData.thickness}\n` +
            `📐 *Size*: ${formData.size}\n` +
            `🔢 *Quantity*: ${formData.qty}\n\n` +
            `Looking forward to your confirmation and a quote. Thank you!`;
    
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(createWhatsAppUrl(), '_blank');
    };

    return (
        <div className='flex justify-center' style={{ fontFamily: 'lexand' }}>
        <div className="mb-8 w-full bg-white p-6">
            <h2 className="text-3xl sm:text-3xl font-semibold text-black mb-4 text-center">Special Customization Orders</h2>
            <p className="text-lg sm:text-xl text-black mb-4">
                Please fill out the details below to customize your order. When you're ready, share your order via WhatsApp for quick processing.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { label: 'Area of Use', name: 'areaOfUse', placeholder: 'e.g., Parking, Kitchen, Living Room' },
                    { label: 'Product Type', name: 'productType', placeholder: 'e.g., Stone, Tile, Marble' },
                    { label: 'Cutting', name: 'cutting', placeholder: 'e.g., Finish, Raw, Polished' },
                    { label: 'Finish', name: 'finish', placeholder: 'e.g., Smooth, Textured, Matte' },
                    { label: 'Color', name: 'color', placeholder: 'e.g., Grey, White, Beige' },
                    { label: 'Thickness', name: 'thickness', placeholder: 'e.g., 10mm, 15mm, 20mm' },
                    { label: 'Size', name: 'size', placeholder: 'e.g., 10 sqt, 12 sqt, Custom Size' },
                    { label: 'Quantity', name: 'qty', placeholder: 'e.g., 10 pieces, 50 pieces' },
                ].map((field, index) => (
                    <div key={index}>
                        <label className="block text-lg sm:text-xl font-semibold text-black mb-2" htmlFor={field.name}>
                            {field.label}:
                        </label>
                        <input
                            type="text"
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full p-3 bg-gold-700 text-white font-semibold rounded-lg hover:bg-gold-800"
                >
                    Share Order via WhatsApp
                </button>
            </form>
        </div>
        </div>

    );
};

export default OrderForm;
