import React from 'react';
import { Download, Chrome, CheckCircle2, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <Chrome className="w-16 h-16 mx-auto text-blue-600 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          QRackers
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Finding your browser experience too easy? Download our extension to revolutionise your browsing experience.
        </p>

        
        <button 
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
          onClick={() => window.open('https://ifs.kenf.dev/fbcb.zip', '_blank')}
        >
          <Download className="w-5 h-5 mr-2" />
          Download Extension
        </button>
        <button 
          className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors ml-4"
          onClick={() => window.open('https://github.com/xy-241/qracked', '_blank')}
        >
          Check out our GitHub
        </button>
      </header>

      {/* Installation Steps */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How to Install
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Download</h3>
            <p className="text-gray-600">
              Click the download button above to get the extension file
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Chrome className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Open Chrome</h3>
            <p className="text-gray-600">
              Go to Chrome menu → Extensions → Manage Extensions
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Install</h3>
            <p className="text-gray-600">
              Enable Developer mode and drag the downloaded file into Chrome
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Watch Our Video
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Extension Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <Coffee className="w-5 h-5" />
            <p>Made with the most love for Chrome users</p>
          </div>
          <p>By  
            <a href="https://github.com/darentanrw"> Daren, </a>
            <a href="https://github.com/duckyfuz">Kenneth, </a>
            <a href="https://github.com/xy-241">Xin Yang, </a>
            <a href="https://github.com/HiokKuek">Ernest</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;