import React, { useState, useEffect } from 'react';
import { Home, MapPin, Bed, Bath, Square, Phone, Mail, X, ChevronLeft, ChevronRight, Instagram, Facebook, Landmark } from 'lucide-react';

// Featured properties data
const properties = [
  {
    id: 1,
    title: "Villa",
    location: "Saligramam",
    price: "3 Crores",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    landmarks: [
      "Vadapalani Temple - 1.2 km",
      "Forum Vijaya Mall - 2 km",
      "Vadapalani Metro Station - 1.5 km",
      "PSBB School - 0.8 km"
    ],
    video: "abc.mp4",
    images: [
      "//home//Mathin26//leb4//home1i.jpg",
      "home2i.jpg",
      "home3i.jpg"
    ]
  },
  {
    id: 2,
    title: "House",
    location: "Anna nagar",
    price: "2.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    landmarks: [
      "Anna Nagar Tower Park - 0.5 km",
      "VR Chennai Mall - 1.8 km",
      "Anna Nagar Metro - 1 km",
      "DAV School - 0.6 km"
    ],
    video: "abcd.mp4",
    images: [
      "home6i.jpg",
      "home5i.jpg",
      "home4i.jpg"
    ]
  },
  {
    id: 3,
    title: "Villa",
    location: "Ashok nagar",
    price: "2.59 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    landmarks: [
      "Anna Nagar Tower Park - 0.5 km",
      "VR Chennai Mall - 1.8 km",
      "Anna Nagar Metro - 1 km",
      "DAV School - 0.6 km"
    ],
    video: "abc.mp4",
    images: [
      "home8i.jpg",
      "home10i.jpg",
      "home7i.jpg"
    ]
  },
  {
    id: 4,
    title: "House",
    location: "Ecr",
    price: "3.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    landmarks: [
      "Anna Nagar Tower Park - 0.5 km",
      "VR Chennai Mall - 1.8 km",
      "Anna Nagar Metro - 1 km",
      "DAV School - 0.6 km"
    ],
    video: "abcd.mp4",
    images: [
      "home9i.jpg",
      "home11i.jpg",
      "home12i.jpg"
    ]
  }
];

function ImageViewer({ images, currentIndex, onClose, onPrevious, onNext }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="w-8 h-8" />
      </button>
      <button 
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button 
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
      <img 
        src={images[currentIndex]} 
        alt={`Image ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
    </div>
  );
}

function PropertyCard({ property }) {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowImageViewer(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-[400px]">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster={property.images[0]}
        >
          <source src={property.video} type="video/mp4" />
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{property.title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <p className="text-3xl font-bold text-blue-600 mt-4">{property.price}</p>
        <div className="flex justify-between mt-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-2" />
            <span>{property.sqft} sq.ft</span>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Landmark className="w-5 h-5 mr-2" />
            Nearby Landmarks
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {property.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-4">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Property ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      {showImageViewer && (
        <ImageViewer 
          images={property.images}
          currentIndex={currentImageIndex}
          onClose={() => setShowImageViewer(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

function EntryAnimation() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <Home className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-gray-900 animate-pulse">Leblesy</h1>
      </div>
    </div>
  );
}

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {showAnimation && <EntryAnimation />}
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Leblesy</h1>
            </div>
            <div className="flex space-x-6">
              <a href="#contact" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>8825494280</span>
              </a>
              <a href="mailto:Leblesy@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Leblesy</h3>
              <p className="text-gray-400">
                Discover extraordinary properties in the most desirable locations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Chennai<br />
                Tamilnadu<br />
                8825494280<br />
                Leblesy@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com/leblesy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/leblesy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Leblesy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;