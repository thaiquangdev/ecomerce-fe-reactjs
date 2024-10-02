import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { registerApi } from "../../services/apis/auth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await registerApi(formData);
    if (response.data.success === true) {
      toast.success(response.data.message);
      navigate("/login");
    } else {
      toast.error(response.data.error);
    }
  };

  return (
    <div className="py-[60px]">
      <div className="max-w-xl mx-auto">
        <div className="border max-w-[500px] mx-auto rounded-md">
          <div className="py-[50px] pl-[40px] pr-[28px]">
            <h3 className="font-bold text-2xl mr-[30px] mb-[30px]">Register</h3>
            <p className="mb-[15px] text-sm font-light">
              If you have an account, sign in with your username or email
              address.
            </p>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="" className="mb-[10px] text-sm">
                  FullName *
                </label>
                <Input
                  type="text"
                  place="Enter your fullname"
                  classN="px-3 py-2 text-sm font-light border rounded-md"
                  val={formData.fullName}
                  onCh={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="" className="mb-[10px] text-sm">
                  Email Address *
                </label>
                <Input
                  type="text"
                  place="Enter your email"
                  classN="px-3 py-2 text-sm font-light border rounded-md"
                  val={formData.email}
                  onCh={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="" className="mb-[10px] text-sm">
                  Password *
                </label>
                <Input
                  type="password"
                  place="Enter password"
                  classN="px-3 py-2 text-sm font-light border rounded-md"
                  val={formData.password}
                  onCh={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div className="mb-[16px]">
                <Button
                  classN="w-full bg-[#f7931b] py-2 rounded-md text-white text-md font-semibold"
                  title="Register"
                />
              </div>
              <div>
                <p className="text-md font-light">
                  Already have an account?
                  <Link to="/login" className="underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
