import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";

const Checkout = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-xl  ">
        <div className="flex flex-col md:flex-row">
          {/* Billing Details Section */}
          <div className="w-full md:w-2/5 md:mr-8">
            <div>
              <h3 className="mb-8 text-2xl font-semibold">Billing Details</h3>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="first-name"
                    className="text-md font-light mb-2 block"
                  >
                    First Name
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="last-name"
                    className="text-md font-light mb-2 block"
                  >
                    Last Name
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-md font-light mb-2 block"
                  >
                    Email Address
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="country"
                    className="text-md font-light mb-2 block"
                  >
                    Country/Region
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="text-md font-light mb-2 block"
                  >
                    Street Address
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="city"
                    className="text-md font-light mb-2 block"
                  >
                    Town/City
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="postal-code"
                    className="text-md font-light mb-2 block"
                  >
                    Postal Code
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-md font-light mb-2 block"
                  >
                    Phone
                  </label>
                  <Input
                    type="text"
                    classN="px-4 py-3 rounded-md border w-full"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="w-full md:w-3/5 mt-8 md:mt-0">
            <div className="ml-0 md:ml-12">
              <h3 className="mb-8 text-2xl font-semibold">Your Order</h3>
              <div>
                <table className="w-full mb-8 border border-gray-200 text-left">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 border-b">Product</th>
                      <th className="p-3 border-b">Quantity</th>
                      <th className="p-3 border-b">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b text-sm font-light">
                        Multiplatform Wireless Noise-Cancelling Gaming Headset
                      </td>
                      <td className="p-3 border-b text-md font-semibold">
                        $79 x1
                      </td>
                      <td className="p-3 border-b text-md font-semibold">
                        $79
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm font-light">Subtotal</td>
                      <td></td>
                      <td className="p-3 text-md font-semibold">$595</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-sm font-light">Total</td>
                      <td></td>
                      <td className="p-3 text-md font-semibold">$595</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="mb-6 mt-8 text-xl">Payment Option</h3>
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <Input type="checkbox" classN="" />
                    <label htmlFor="" className="text-md">
                      Card Payment
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <Input type="checkbox" classN="" />
                    <label htmlFor="" className="text-md">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div>
                  <Button
                    title="Place Order"
                    classN="px-5 py-3 w-full rounded-md text-white text-md font-semibold bg-[#f7931b] hover:bg-[#f57c00] transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
