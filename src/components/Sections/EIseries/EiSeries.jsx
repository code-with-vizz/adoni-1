import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <img className="w-full" src="/path/to/your/image.jpg" alt="Hero Image" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Your Heading Here</h1>
          <p className="text-lg text-gray-700">Your description here.</p>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Feature Heading</h2>
          <ul className="list-disc text-lg text-gray-700">
            <li>Feature description 1</li>
            <li>Feature description 2</li>
            <li>Feature description 3</li>
            {/* Add more feature descriptions as needed */}
          </ul>
        </div>
        <div className="w-1/2">
          <img className="w-full" src="/path/to/your/image.jpg" alt="Feature Image" />
        </div>
      </div>
    </section>
  );
};

const BigImageSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center">
          <img className="mx-auto max-w-full" src="/path/to/your/image.jpg" alt="Big Image" />
        </div>
        <p className="text-lg text-gray-700 mt-8">
          Your long description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </section>
  );
};

const EiSeries = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <BigImageSection />
      {/* Add more sections/components as needed */}
    </div>
  );
};

export default EiSeries;
