

import Link from "next/link";

export default function OrganizationPage() {
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-4 py-12">
				<h1 className="text-2xl font-bold mb-4">Scout — Organization</h1>
				<p className="text-gray-600 mb-6">Demo organization view for presentation purposes.</p>
				<div className="space-y-4">
					<Link href="/dashboard/scout" className="text-blue-600 hover:underline">← Back to Scout Dashboard</Link>
					<div className="bg-blue-50 border-2 border-blue-200 p-6 rounded">Organization details and mock content go here.</div>
				</div>
			</div>
		</div>
	);
}

