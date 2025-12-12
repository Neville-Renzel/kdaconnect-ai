// app/maintenance/page.tsx
export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">We’ll Be Right Back</h1>
        <p className="text-gray-600 mb-8">
          KDAconnect AI is currently undergoing scheduled maintenance. We expect
          to be back online shortly.
        </p>
        <p className="text-gray-500">Thank you for your patience.</p>
      </div>
    </div>
  );
}
