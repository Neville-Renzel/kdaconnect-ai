// app/dashboard/scout/billing/page.tsx
export default function ScoutBilling() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Billing</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded border border-gray-100 mb-6">
              <h2 className="font-bold mb-4">Payment Method</h2>
              <div className="flex items-center justify-between p-4 bg-ash rounded">
                <div className="flex items-center">
                  <div className="bg-gray-200 w-10 h-6 rounded mr-3"></div>
                  <span>•••• 4242</span>
                </div>
                <button className="text-sm text-black underline">Update</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded border border-gray-100">
              <h2 className="font-bold mb-4">Invoice History</h2>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-100">
                  <div>
                    <div className="font-medium">Invoice #SB-1205</div>
                    <div className="text-sm text-gray-600">Dec 1, 2025</div>
                  </div>
                  <div className="text-right">
                    <div>€0.00</div>
                    <a href="#" className="text-sm text-black underline">
                      Download
                    </a>
                  </div>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-100">
                  <div>
                    <div className="font-medium">Invoice #SB-1105</div>
                    <div className="text-sm text-gray-600">Nov 1, 2025</div>
                  </div>
                  <div className="text-right">
                    <div>€0.00</div>
                    <a href="#" className="text-sm text-black underline">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded border border-gray-100 sticky top-8">
              <h2 className="font-bold mb-4">Need Help?</h2>
              <p className="text-sm text-gray-600 mb-4">
                Questions about billing or refunds?
              </p>
              <a href="/contact" className="text-black underline text-sm">
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
