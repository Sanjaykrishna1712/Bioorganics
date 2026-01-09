import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Lock, Eye, EyeOff, User, Phone, MapPin, Calendar, Leaf, ChevronRight, Building, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    referralSource: "",
    birthDate: "",
    deliveryDay: "Thursday",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Create an Account</h1>
              <p className="text-gray-600">Join our organic community today</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Login Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Login Information</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-gray-700 mb-2 block">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <Label htmlFor="password" className="text-gray-700 mb-2 block">
                        Password *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleChange}
                          className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-gray-600 text-xs mt-2">
                        Minimum 8 characters with letters and numbers
                      </p>
                    </div>

                    {/* Personal Information */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">My Information</h2>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-700 mb-2 block">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-700 mb-2 block">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="mb-4">
                        <Label htmlFor="birthDate" className="text-gray-700 mb-2 block">
                          Date of Birth
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <Input
                            id="birthDate"
                            name="birthDate"
                            type="date"
                            placeholder="dd-mm-yyyy"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Right Column - Billing & Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-8">
                 

                  {/* Contact Information */}
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+41 32 123 45 67"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="referralSource" className="text-gray-700 mb-2 block">
                          How did you hear about us?
                        </Label>
                        <Select
                          value={formData.referralSource}
                          onValueChange={(value) => handleSelectChange("referralSource", value)}
                        >
                          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Choose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="friend">Friend/Family</SelectItem>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="ad">Advertisement</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={acceptTerms}
                          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                          className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-1"
                        />
                        <Label htmlFor="terms" className="text-gray-700 cursor-pointer">
                          I accept the terms and conditions
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full  from-blue-600 to-blue-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                    size="lg"
                    disabled={!acceptTerms}
                  >
                    Create an Account
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Log in here
                      </Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;