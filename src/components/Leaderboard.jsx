import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Leaderboard = () => {
    const topFarmersData = [
        {
            rank: 1,
            name: 'Aditi Verma',
            points: 980,
            crop: 'Wheat',
            avatar: '👩‍🌾'
        },
        {
            rank: 2,
            name: 'Arjun Singh',
            points: 920,
            crop: 'Rice',
            avatar: '👨‍🌾'
        },
        {
            rank: 3,
            name: 'Priya Nair',
            points: 860,
            crop: 'Tomato',
            avatar: '👩‍🌾'
        }
    ];

    const cropDistributionData = [
        { name: 'Wheat', value: 35, color: '#8B5CF6' },
        { name: 'Rice', value: 30, color: '#10B981' },
        { name: 'Tomato', value: 20, color: '#F59E0B' },
        { name: 'Onions', value: 15, color: '#EF4444' }
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Leaderboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Farmers Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Farmers</h2>

                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-4 pb-3 mb-4 border-b border-gray-200">
                        <span className="text-sm font-medium text-gray-600">Rank</span>
                        <span className="text-sm font-medium text-gray-600">Farmer</span>
                        <span className="text-sm font-medium text-gray-600">Points</span>
                        <span className="text-sm font-medium text-gray-600">Crop</span>
                    </div>

                    {/* Farmers List */}
                    <div className="space-y-4">
                        {topFarmersData.map((farmer) => (
                            <div key={farmer.rank} className="grid grid-cols-4 gap-4 items-center py-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-900">{farmer.rank}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <span className="text-sm">{farmer.avatar}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{farmer.name}</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900">{farmer.points}</span>
                                <span className="text-sm text-gray-600">{farmer.crop}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Crop Distribution Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Crop Distribution</h2>

                    {/* Chart Container */}
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={cropDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {cropDistributionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        {cropDistributionData.map((crop, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: crop.color }}
                                ></div>
                                <span className="text-sm text-gray-600">
                                    {crop.name} ({crop.value}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Stats Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Farmer Performance</h2>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topFarmersData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    tick={{ fontSize: 12 }}
                                    angle={-45}
                                    textAnchor="end"
                                    height={60}
                                />
                                <YAxis />
                                <Bar
                                    dataKey="points"
                                    fill="#10B981"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Platform Statistics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">150+</div>
                            <div className="text-sm text-gray-600">Active Farmers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">25K+</div>
                            <div className="text-sm text-gray-600">Total Points</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
                            <div className="text-sm text-gray-600">Crop Types</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;