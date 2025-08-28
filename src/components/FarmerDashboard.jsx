import { useState } from 'react';
import { User, HelpCircle, BookOpen, Search, Trophy, Upload, FileText, Play, ExternalLink } from 'lucide-react';

const FarmerDashboard = () => {
    const [activeSection, setActiveSection] = useState('Profile');

    const sidebarItems = [
        { icon: User, label: 'Profile', active: true },
        { icon: HelpCircle, label: 'Queries' },
        { icon: BookOpen, label: 'Education' },
        { icon: Search, label: 'AI Detection' },
        { icon: Trophy, label: 'Leaderboard' }
    ];

    const leaderboardData = [
        { rank: 1, name: 'Aditi Verma', points: 980, crop: 'Wheat', avatar: '👩‍🌾' },
        { rank: 2, name: 'Arjun Singh', points: 920, crop: 'Rice', avatar: '👨‍🌾' },
        { rank: 3, name: 'Priya Nair', points: 860, crop: 'Tomato', avatar: '👩‍🌾' }
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-sm border-r">
                <div className="p-6">
                    <h1 className="text-xl font-semibold text-gray-900 mb-6">Farmer Dashboard</h1>
                    <nav className="space-y-2">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => setActiveSection(item.label)}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${item.label === 'Profile'
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon size={18} />
                                <span className="text-sm font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-600 text-lg">👨‍🌾</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Ravi Sharma</h2>
                                <p className="text-sm text-gray-500">Nashik, India • Tomatoes, Onions</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Queries Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Queries</h3>
                        <button className="w-full text-left text-blue-600 text-sm font-medium mb-4 hover:text-blue-700">
                            Ask a new question...
                        </button>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">How to prevent blight in tomatoes?</span>
                                <span className="text-xs text-gray-400">5 answers</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Best irrigation schedule for onions?</span>
                                <span className="text-xs text-gray-400">3 answers</span>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <FileText size={16} className="text-gray-400" />
                                <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                                    Short guide: Soil Health Basics (PDF)
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Play size={16} className="text-gray-400" />
                                <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                                    Video: Drip Irrigation Setup
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <ExternalLink size={16} className="text-gray-400" />
                                <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                                    Link: Govt. Subsidy Programs
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* AI Detection Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Detection</h3>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center mb-4">
                            <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="text-blue-600 hover:text-blue-700 cursor-pointer">Choose File</span> or Drag & Drop
                            </p>
                        </div>
                        <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors mb-4">
                            Preview
                        </button>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="text-sm font-medium text-red-800 mb-1">Detected Disease: Early blight</div>
                            <div className="text-sm text-red-700 mb-3">
                                Suggested Solution: Remove infected leaves and apply fungicide.
                            </div>
                            <div className="w-full bg-red-200 rounded-full h-2 mb-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                            </div>
                            <div className="text-xs text-gray-600">72%</div>
                        </div>
                    </div>

                    {/* Leaderboard Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                <span>Rank</span>
                                <span>Farmer</span>
                                <span>Points</span>
                                <span>Crop</span>
                            </div>
                            {leaderboardData.map((farmer) => (
                                <div key={farmer.rank} className="grid grid-cols-4 items-center py-2">
                                    <span className="text-sm font-medium text-gray-900">{farmer.rank}</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg">{farmer.avatar}</span>
                                        <span className="text-sm text-gray-900">{farmer.name}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{farmer.points}</span>
                                    <span className="text-sm text-gray-600">{farmer.crop}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerDashboard;