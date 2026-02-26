export default function SuccessStoriesPage() {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-lg text-gray-600 mb-8">
            5000+ businesses using Super
          </p>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Company A</h3>
              <p className="text-gray-700">
                "Super Commerce helped us scale from 100 to 10,000 orders per day seamlessly."
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Company B</h3>
              <p className="text-gray-700">
                "The flexibility and customization options are unmatched in the industry."
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2">Company C</h3>
              <p className="text-gray-700">
                "We reduced our operational costs by 40% after migrating to Super."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }