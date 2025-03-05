import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="py-16 px-6 lg:px-10 2xl:px-40 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-2">Privacy Policy</h2>
        <p className="text-lg text-gray-800 mb-8">Last updated: June 11, 2024</p>

        <p className="mb-4">
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
          information when you use the Service. It also informs you about your privacy rights and how the law protects you.
        </p>

        <p className="mb-6">
          We use your personal data to provide and improve the Service. By using the Service, you agree to the collection
          and use of information in accordance with this Privacy Policy.
        </p>

        <h3 className="text-2xl font-semibold mt-8 border-b border-gray-700 pb-2">Interpretation and Definitions</h3>
        
        <h4 className="text-xl font-semibold mt-6">Interpretation</h4>
        <p className="mb-4">
          Words with capitalized initials have meanings defined under the following conditions. These definitions apply
          regardless of singular or plural usage.
        </p>

        <h4 className="text-xl font-semibold mt-6">Definitions</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
          <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
          <li><strong>Company:</strong> Refers to Orange Cap Media.</li>
          <li><strong>Cookies:</strong> Small files placed on your device containing browsing history details.</li>
          <li><strong>Country:</strong> Refers to Delhi, India.</li>
          <li><strong>Device:</strong> Any device that can access the Service such as a computer, cellphone, or tablet.</li>
          <li><strong>Personal Data:</strong> Any information related to an identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li><strong>Service Provider:</strong> A person or entity processing data on behalf of the Company.</li>
          <li><strong>Third-party Social Media Service:</strong> Any social network through which a user can log in.</li>
          <li><strong>Usage Data:</strong> Data collected automatically from the use of the Service.</li>
          <li>
            <strong>Website:</strong> Refers to 
            <a href="https://orangecapmedia.com/" className="text-yellow-500 hover:underline ml-1">
              Orange Cap Media
            </a>
          </li>
          <li><strong>You:</strong> The individual accessing or using the Service.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 border-b border-gray-700 pb-2">Collecting and Using Your Personal Data</h3>

        <h4 className="text-xl font-semibold mt-6">Types of Data Collected</h4>
        
        <h5 className="font-semibold text-lg mt-4">Personal Data</h5>
        <p className="mb-2">
          While using our Service, we may ask you to provide us with personally identifiable information, including:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
        </ul>

        <h5 className="font-semibold text-lg mt-4">Usage Data</h5>
        <p>
          Usage Data is collected automatically and may include details such as your IP address, browser type, pages visited, and session duration.
        </p>

        <h4 className="text-xl font-semibold mt-6">Tracking Technologies and Cookies</h4>
        <p>
          We use Cookies and similar tracking technologies to track activity on our Service. You can instruct your browser to refuse all Cookies or indicate when a Cookie is being sent.
        </p>

        <h3 className="text-2xl font-semibold mt-8 border-b border-gray-700 pb-2">Use of Your Personal Data</h3>
        <p className="mb-2">The Company may use Personal Data for purposes such as:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>Providing and maintaining our Service</li>
          <li>Managing your account</li>
          <li>Contacting you with updates and offers</li>
          <li>Managing your requests</li>
          <li>Business transfers and analytics</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 border-b border-gray-700 pb-2">Retention of Your Personal Data</h3>
        <p>
          The Company will retain your Personal Data only for as long as necessary to fulfill its purposes, comply with legal obligations, resolve disputes, and enforce agreements.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy