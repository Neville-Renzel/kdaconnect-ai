// app/copyright/page.tsx
export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Copyright & DMCA Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2025</p>

        <div className="space-y-6">
          <p>
            KDAconnect AI respects the intellectual property rights of others.
            We respond promptly to notices of alleged copyright infringement.
          </p>

          <h2 className="text-xl font-bold">
            Reporting Copyright Infringement
          </h2>
          <p>
            If you believe your copyrighted work has been copied and posted on
            our platform without authorization, please send a written notice to:
          </p>
          <div className="bg-ash p-4 rounded">
            <p>Copyright Agent</p>
            <p>KDAconnect AI</p>
            <p>Email: copyright@kdaconnect.ai</p>
          </div>

          <p>Your notice must include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>A physical or electronic signature of the copyright owner</li>
            <li>
              Identification of the copyrighted work claimed to be infringed
            </li>
            <li>
              Identification of the material that is claimed to be infringing
            </li>
            <li>Your contact information</li>
            <li>
              A statement that you have a good faith belief the use is not
              authorized
            </li>
            <li>
              A statement that the information is accurate under penalty of
              perjury
            </li>
          </ul>

          <h2 className="text-xl font-bold">Repeat Infringers</h2>
          <p>
            We will terminate the accounts of users who are determined to be
            repeat infringers.
          </p>
        </div>
      </div>
    </div>
  );
}
