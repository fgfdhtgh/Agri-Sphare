import { useState } from 'react';
import { Search, MapPin, Eye, Truck, User, Package, Send } from 'lucide-react';

const LocalBuyersLogistics = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBuyer, setSelectedBuyer] = useState('');
    const [farmLocation, setFarmLocation] = useState('');
    const [cropQuantity, setCropQuantity] = useState('');

    const buyersData = [
        {
            name: 'FreshMart Co.',
            location: 'Pune',
            demand: 'Tomatoes (2T)',
            contact: 'View'
        },
        {
            name: 'Green Basket',
            location: 'Nashik',
            demand: 'Onions (15T)',
            contact: 'View'
        },
        {
            name: 'AgriHub',
            location: 'Ahmednagar',
            demand: 'Leafy Greens (1T)',
            contact: 'View'
        }
    ];

    const handleSubmitRequest = () => {
        alert('Delivery request submitted successfully!');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Local Buyers & Logistics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Search & Map Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Search & Map</h2>

                    {/* Search Bar */}
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search buyers, crops, or locations"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                    </div>

                    {/* Map Container */}
                    <div className="w-full h-64 bg-green-100 rounded-lg relative overflow-hidden">
                        {/* Simulated Map Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-100 to-blue-100">
                            {/* Map Grid Pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100" height="100" fill="url(#grid)" />
                                </svg>
                            </div>

                            {/* Location Markers */}
                            <div className="absolute top-4 left-8 w-3 h-3 bg-blue-500 rounded-full shadow-md"></div>
                            <div className="absolute top-12 right-12 w-3 h-3 bg-red-500 rounded-full shadow-md"></div>
                            <div className="absolute bottom-16 left-16 w-3 h-3 bg-green-600 rounded-full shadow-md"></div>
                            <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-500 rounded-full shadow-md"></div>

                            {/* Area Labels */}
                            <div className="absolute top-8 left-12 text-xs font-medium text-gray-700">Pune</div>
                            <div className="absolute top-16 right-16 text-xs font-medium text-gray-700">Nashik</div>
                            <div className="absolute bottom-20 left-20 text-xs font-medium text-gray-700">Ahmednagar</div>

                            {/* Roads/Paths */}
                            <svg className="absolute inset-0 w-full h-full">
                                <path d="M20,50 Q50,30 80,60" stroke="#666" strokeWidth="2" fill="none" opacity="0.3" />
                                <path d="M10,80 Q40,60 70,20" stroke="#666" strokeWidth="2" fill="none" opacity="0.3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Nearby Buyers Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Nearby Buyers</h2>

                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-4 pb-3 mb-3 border-b border-gray-200">
                        <span className="text-sm font-medium text-gray-600">Name</span>
                        <span className="text-sm font-medium text-gray-600">Location</span>
                        <span className="text-sm font-medium text-gray-600">Demand</span>
                        <span className="text-sm font-medium text-gray-600">Contact</span>
                    </div>

                    {/* Buyers List */}
                    <div className="space-y-3">
                        {buyersData.map((buyer, index) => (
                            <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-900">{buyer.name}</span>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {buyer.location}
                                </div>
                                <span className="text-sm text-gray-900 font-medium">{buyer.demand}</span>
                                <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
                                    <Eye className="w-3 h-3 mr-1" />
                                    {buyer.contact}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Request Delivery Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Truck className="w-5 h-5 mr-2" />
                        Request Delivery
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Your Farm Location */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your farm location
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter farm location"
                                    value={farmLocation}
                                    onChange={(e) => setFarmLocation(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Buyer Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Buyer selection
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <select
                                    value={selectedBuyer}
                                    onChange={(e) => setSelectedBuyer(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
                                >
                                    <option value="">Select buyer</option>
                                    <option value="freshmart">FreshMart Co. - Pune</option>
                                    <option value="greenbasket">Green Basket - Nashik</option>
                                    <option value="agrihub">AgriHub - Ahmednagar</option>
                                </select>
                            </div>
                        </div>

                        {/* Crop & Quantity */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Crop & quantity
                            </label>
                            <div className="relative">
                                <Package className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="e.g., Tomatoes 500kg"
                                    value={cropQuantity}
                                    onChange={(e) => setCropQuantity(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            onClick={handleSubmitRequest}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalBuyersLogistics;