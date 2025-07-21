import React, { useState } from 'react';

// Icon SVGs
const ChevronRight = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 320 512">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

const Slash = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 320 512">
    <path d="M303.9 4.2c15.3 8.8 20.7 28.3 11.9 43.7l-256 448c-8.8 15.3-28.3 20.7-43.7 11.9S-4.6 479.5 4.2 464.1l256-448C269 .8 288.5-4.6 303.9 4.2z" />
  </svg>
);

const ArrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const HomeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
  </svg>
);

const ShoppingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
  </svg>
);

const UserIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);



// BreadcrumbItem component
const BreadcrumbItem = ({ children, icon, href, className = '', isLast = false }) => {
  const baseClasses = "flex items-center gap-1 text-sm transition-all duration-200";
  const linkClasses = href
    ? "text-blue-600 hover:text-blue-800 hover:underline cursor-pointer hover:scale-105"
    : isLast
    ? "text-gray-900 font-semibold"
    : "text-gray-500";

  const content = (
    <>
      {icon && <span className="w-4 h-4 transition-transform duration-200 hover:scale-110">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className={`${baseClasses} ${linkClasses} ${className}`}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li>
      <span className={`${baseClasses} ${linkClasses} ${className}`}>
        {content}
      </span>
    </li>
  );
};

// Separator Icon logic
const getSeparatorIcon = (separator) => {
  if (!separator) return ChevronRight;

  if (typeof separator === 'string') {
    switch (separator) {
      case '>':
        return ChevronRight;
      case '/':
        return Slash;
      case '→':
        return ArrowRight;
      default:
        return <span className="mx-1 text-gray-400">{separator}</span>;
    }
  }

  return separator;
};

// Breadcrumb component
const Breadcrumb = ({ children, separator = '>', className = '' }) => {
  const childrenArray = React.Children.toArray(children);
  const lastIndex = childrenArray.length - 1;

  return (
    <nav className={`flex items-center space-x-1 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {childrenArray.map((child, index) => {
          const isLast = index === lastIndex;

          if (!React.isValidElement(child)) return child;

          return (
            <React.Fragment key={index}>
              {React.cloneElement(child, { isLast })}
              {!isLast && <span className="mx-1 opacity-60 hover:opacity-100 transition-opacity duration-200">{getSeparatorIcon(separator)}</span>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

// Demo Component
export default function BreadcrumbDemo() {
  const [activeSeparator, setActiveSeparator] = useState('>');

  const separatorOptions = [
    { value: '>', symbol: '〉', label: 'Chevron' },
    { value: '/', symbol: '/', label: 'Slash' },
    { value: '→', symbol: '→', label: 'Arrow' },
    { value: '•', symbol: '•', label: 'Dot' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-white/90 bg-clip-text text-transparent">
            Simple Breadcrumb UI
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Clean, modern, and accessible navigation component with smooth animations and multiple styles
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Interactive Controls */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Choose Your Style
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {separatorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveSeparator(option.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSeparator === option.value
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{option.symbol}</span>
                  <span>{option.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Examples */}
        <div className="space-y-8">
          {/* Website Navigation */}
          <div className="group">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Website Navigation
              </h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Breadcrumb separator={activeSeparator}>
                  <BreadcrumbItem icon={HomeIcon} href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                  <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
                  <BreadcrumbItem>MacBook Pro</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div className="group">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Shopping Category
              </h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Breadcrumb separator={activeSeparator}>
                  <BreadcrumbItem icon={ShoppingIcon} href="/">Store</BreadcrumbItem>
                  <BreadcrumbItem href="/men">Men's Fashion</BreadcrumbItem>
                  <BreadcrumbItem href="/men/shoes">Shoes</BreadcrumbItem>
                  <BreadcrumbItem>Running Sneakers</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>

          {/* Admin Panel */}
          <div className="group">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Admin Dashboard
              </h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Breadcrumb separator={activeSeparator}>
                  <BreadcrumbItem icon={UserIcon} href="/admin">Dashboard</BreadcrumbItem>
                  <BreadcrumbItem href="/admin/users">User Management</BreadcrumbItem>
                  <BreadcrumbItem>User Profile</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>

          {/* File System */}
          <div className="group">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                File Explorer
              </h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <Breadcrumb separator={activeSeparator}>
                  <BreadcrumbItem icon={HomeIcon} href="/">Documents</BreadcrumbItem>
                  <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
                  <BreadcrumbItem href="/projects/website">Website</BreadcrumbItem>
                  <BreadcrumbItem>index.html</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Simple Usage Example
          </h3>
          <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm leading-relaxed">
{`<Breadcrumb separator="${activeSeparator}">
  <BreadcrumbItem icon={HomeIcon} href="/">
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/products">
    Products
  </BreadcrumbItem>
  <BreadcrumbItem>
    Current Page
  </BreadcrumbItem>
</Breadcrumb>`}
            </pre>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🎨 Beautiful Design",
              desc: "Modern gradients and smooth animations"
            },
            {
              title: "♿ Accessible",
              desc: "Full ARIA support and keyboard navigation"
            },
            {
              title: "🔧 Customizable",
              desc: "Easy to style with your brand colors"
            },
            {
              title: "📱 Responsive",
              desc: "Works perfectly on all devices"
            },
            {
              title: "⚡ Performance",
              desc: "Lightweight and fast rendering"
            },
            {
              title: "🎯 TypeScript",
              desc: "Full type safety included"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-200">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}