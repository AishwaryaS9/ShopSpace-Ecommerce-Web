import { Link, useNavigate } from 'react-router-dom';
import Images from '../assets/images'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const handlePrivacyPolicy = () => {
    navigate('/privacypolicy')
  }

  const handleTermsOfUSe = () => {
    navigate('/termsofuse')
  }

  return (
    <footer className="bg-ashBrown text-white py-10 px-5">
      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
          <h4 className="text-lg">
            Subscribe
          </h4>
          <p className="text-sm mt-1">
            Get 10% off your first order
          </p>
          <div className="flex items-center mt-3 border-2 
          border-white rounded-lg bg-ashBrown">
            <input type="email"
              placeholder='Enter your email'
              className="flex-grow px-3 py-2
               text-white bg-transparent outline-none placeholder-gray-200" />
            <button className='text-gray-200 rounded-lg pr-2'>
              <img src={Images.sendicon} />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Support
          </h3>
          <p className="text-sm leading-7">
            123 Main Street, <br />
            Suite 100, Cityville, <br/>
            ST-56789
          </p>
          <p className="text-sm underline mt-2">support@example.com</p>
          <p className="text-sm mt-2">+1-234-567-890</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Account</h3>
          <ul className='space-y-2'>
            <Link to='/privacypolicy'>
              <li>Privacy Policy</li>
            </Link>
            <Link to='/termsofuse'>
              <li >Terms of Use</li>
            </Link>
            <Link to="/faq">
              <li>FAQ</li>
            </Link>
            <Link to="/contactus">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-100 my-8" />
      <p className="text-sm text-gray-200 text-center">
        &copy; Copyright ShopSpace {currentYear}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer