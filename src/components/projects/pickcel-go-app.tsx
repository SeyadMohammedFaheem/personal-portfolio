import React from "react";

// Dummy data — replace with real data or fetch from API
const smallcases = [
	{
		id: 1,
		title: "Growth Theme Smallcase",
		description: "Invest in high growth sectors in India.",
		image: "/images/smallcase1.jpg",
		link: "/smallcase/1",
	},
	{
		id: 2,
		title: "Dividend Income Smallcase",
		description: "Stable dividend paying stocks.",
		image: "/images/smallcase2.jpg",
		link: "/smallcase/2",
	},
	{
		id: 3,
		title: "ESG Focused Smallcase",
		description: "Companies with good environmental & governance practices.",
		image: "/images/smallcase3.jpg",
		link: "/smallcase/3",
	},
	// ... more items
];

const SmallcasePage = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Hero / Header */}
			<section className="bg-gray-100 py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Smallcase Investments
				</h1>
				<p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
					Discover curated portfolios / ideas to invest in themes and strategies.
				</p>
				<a
					href="#smallcase-list"
					className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
				>
					Explore Smallcases
				</a>
			</section>

			{/* Smallcase Grid */}
			<section id="smallcase-list" className="py-16 px-6 md:px-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{smallcases.map((sc) => (
						<div
							key={sc.id}
							className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
						>
							<a href={sc.link}>
								<div className="h-56 overflow-hidden">
									<img
										src={sc.image}
										alt={sc.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h2 className="text-2xl font-semibold mb-2">{sc.title}</h2>
									<p className="text-gray-600 mb-4">{sc.description}</p>
									<span className="text-blue-600 font-medium hover:underline">
										View Details →
									</span>
								</div>
							</a>
						</div>
					))}
				</div>
			</section>

			{/* More sections (how it works, benefits, etc.) */}
			<section className="py-16 px-6 md:px-16 bg-gray-50">
				<h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
				<div className="space-y-8 md:space-y-0 md:flex md:gap-10 md:justify-center">
					<div className="max-w-sm">
						<h3 className="text-xl font-semibold mb-2">Choose Theme</h3>
						<p className="text-gray-700">
							Pick a theme or strategy that aligns with your goals.
						</p>
					</div>
					<div className="max-w-sm">
						<h3 className="text-xl font-semibold mb-2">Invest</h3>
						<p className="text-gray-700">
							Invest in all the stocks in that theme in one go.
						</p>
					</div>
					<div className="max-w-sm">
						<h3 className="text-xl font-semibold mb-2">Track & Rebalance</h3>
						<p className="text-gray-700">
							Track performance and rebalance periodically.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SmallcasePage;
