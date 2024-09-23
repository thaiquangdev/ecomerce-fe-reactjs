import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-10 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto border-t">
        <div className="pt-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About The Shop */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">About The Shop</h3>
              <p className="mb-4 text-sm font-thin">
                We're not just an online store; we're your gateway to a world of
                cutting-edge electronics and telemobile devices.
              </p>
              <div>
                <span className="mb-2 text-sm block">
                  Got Question? Call us 24/7
                </span>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-[#4396f7]">
                    (808) 555-0111
                  </span>
                </div>
              </div>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
              <ul>
                {[
                  "Smartphone & Tablet",
                  "Laptop & Desktop",
                  "Headphones",
                  "Smart Watches",
                  "Drone & Camera",
                  "Home Electronics",
                ].map((category) => (
                  <li key={category} className="mb-2">
                    <Link
                      to=""
                      className="text-md text-[#5d6a6d] font-light hover:text-blue-500"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Let Us Help You</h3>
              <ul>
                {[
                  "Your Account",
                  "Your Order",
                  "Return Policy",
                  "Help Center",
                  "Product Replacement",
                  "Shop With Points",
                ].map((help) => (
                  <li key={help} className="mb-2">
                    <Link
                      to=""
                      className="text-md text-[#5d6a6d] font-light hover:text-blue-500"
                    >
                      {help}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get To Know Us */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Get To Know Us</h3>
              <ul>
                {[
                  "About Us",
                  "Careers",
                  "Store Location",
                  "News Center",
                  "Investor Relations",
                  "Contact Us",
                ].map((info) => (
                  <li key={info} className="mb-2">
                    <Link
                      to=""
                      className="text-md text-[#5d6a6d] font-light hover:text-blue-500"
                    >
                      {info}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
