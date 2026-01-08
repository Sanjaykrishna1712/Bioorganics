import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Gift as GiftIcon, Heart, Package, Sparkles, CreditCard, Check, ChevronRight, Calendar, Truck, Star, MessageCircle, QrCode, Download, Share2, Mail, User, Building, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";
import giftBasket from "@/assets/gift-basket.jpg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const basketOptions = [
  {
    id: "essentiel",
    title: "Essentiel",
    weight: "7-8 kg",
    price: 70,
    description: "For 1-2 people",
    features: ["Perfect for couples", "Weekly variety", "3-4 days of meals"],
    popular: false,
    color: "from-green-400 to-emerald-500",
    image: "panier-legumes-fruits-bio-livraison-suisse-romande"
  },
  {
    id: "mezzo",
    title: "Mezzo",
    weight: "9-10 kg",
    price: 85,
    description: "For 3-4 people",
    features: ["Ideal for families", "8-10 varieties", "Recipe suggestions included"],
    popular: true,
    color: "from-emerald-500 to-green-600",
    image: "panier-legumes-fruits-bio-mezzo-livraison-suisse-romande-uglyfruits"
  },
  {
    id: "grande",
    title: "Grande",
    weight: "12-13 kg",
    price: 99,
    description: "For 5-8 people",
    features: ["Large households", "12+ varieties", "Meal planning guide"],
    popular: false,
    color: "from-lime-400 to-green-500",
    image: "panier-legumes-fruits-bio-grande-livraison-suisse-romande-uglyfruits"
  },
];

const testimonials = [
  {
    name: "Sarah Müller",
    role: "Gift Recipient",
    content: "The most thoughtful gift I've ever received! Fresh, delicious, and such a healthy treat every week.",
    rating: 5,
  },
  {
    name: "Thomas Weber",
    role: "Corporate Gifting",
    content: "We gifted our entire team BioOrganics baskets. It was a huge hit and aligned perfectly with our wellness values.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Repeat Gifter",
    content: "I've gifted BioOrganics to family and friends for three years now. It's my go-to for meaningful presents.",
    rating: 5,
  },
];

const Gift = () => {
  const [selectedGiftType, setSelectedGiftType] = useState<'basket' | 'custom'>('basket');
  const [selectedBasket, setSelectedBasket] = useState('mezzo');
  const [customAmount, setCustomAmount] = useState(70);
  const [giftMessage, setGiftMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  
  // Billing information
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showGiftCard, setShowGiftCard] = useState(false);

  const selectedOption = basketOptions.find(opt => opt.id === selectedBasket);
  const giftAmount = selectedGiftType === 'basket' ? selectedOption?.price || 85 : customAmount;

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process payment and show gift card
      setShowGiftCard(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatCurrency = (amount: number) => {
    return `CHF ${amount.toFixed(2)}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 py-24">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              {['🎁', '🎉', '🎊', '✨', '💚', '🥕', '🍎', '🥬'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-3"
              >
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <GiftIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                  The Perfect Gift
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                For Fresh Food Lovers
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-green-100/80"
              >
                Give a gift card of any value to try our organic vegetable and fruit baskets 
                that rescue imperfect produce.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg"
                  onClick={() => document.getElementById('gift-options')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Choose Your Gift
                </Button>
                
                <div className="flex items-center gap-3 text-green-200">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-sm">
                    <strong>4.9/5</strong> Gift Satisfaction
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              <div className="relative group">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ 
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={giftBasket}
                    alt="Beautiful organic gift basket"
                    className="w-full h-auto rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent rounded-3xl" />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Heart className="w-4 h-4" />
                    Perfect Gift
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white text-green-900 px-6 py-3 rounded-xl shadow-2xl"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [5, -5, 5]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Truck className="w-4 h-4" />
                    Free Delivery
                  </div>
                </motion.div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-8">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: step * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${currentStep >= step 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                      : 'bg-green-100 text-green-700 border border-green-200'
                    }
                  `}>
                    {step}
                  </div>
                  <span className={`
                    text-sm font-medium hidden sm:block
                    ${currentStep >= step ? 'text-green-900' : 'text-green-700/70'}
                  `}>
                    {step === 1 && 'Choose Gift'}
                    {step === 2 && 'Personalize'}
                    {step === 3 && 'Billing & Payment'}
                  </span>
                  {step < 3 && (
                    <ChevronRight className="w-5 h-5 text-green-300 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-12"
                >
                  {/* Step 1: Choose Gift Type */}
                  <div>
                    <h2 className="text-3xl font-bold text-green-900 mb-6">
                      Choose the Amount
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Basket Options */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-green-900">
                          Select a Basket Size
                        </Label>
                        <RadioGroup
                          value={selectedGiftType}
                          onValueChange={(value) => setSelectedGiftType(value as 'basket' | 'custom')}
                          className="space-y-4"
                        >
                          <div
                            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                              selectedGiftType === 'basket'
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-green-200 hover:border-green-300'
                            }`}
                            onClick={() => setSelectedGiftType('basket')}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="basket" id="basket" />
                              <Label htmlFor="basket" className="text-lg font-semibold text-green-900 cursor-pointer">
                                Predefined Basket
                              </Label>
                            </div>
                          </div>
                          
                          <div
                            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                              selectedGiftType === 'custom'
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-green-200 hover:border-green-300'
                            }`}
                            onClick={() => setSelectedGiftType('custom')}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="custom" id="custom" />
                              <Label htmlFor="custom" className="text-lg font-semibold text-green-900 cursor-pointer">
                                Custom Amount
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Gift Amount Display */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                        <div className="text-center">
                          <div className="text-sm text-green-700/70 mb-2">Gift Value</div>
                          <div className="text-4xl font-bold text-green-900 mb-1">
                            {formatCurrency(giftAmount)}
                          </div>
                          <div className="text-green-700/70 text-sm">
                            Minimum: CHF 70.–
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Basket Options Grid */}
                    {selectedGiftType === 'basket' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid md:grid-cols-3 gap-6"
                      >
                        {basketOptions.map((basket) => (
                          <motion.div
                            key={basket.id}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedBasket(basket.id)}
                            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                              selectedBasket === basket.id
                                ? 'border-emerald-500 shadow-xl scale-105'
                                : 'border-green-200 hover:border-green-300 hover:shadow-lg'
                            }`}
                          >
                            {basket.popular && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
                                Most Popular
                              </div>
                            )}
                            
                            <h3 className="text-xl font-bold text-green-900 mb-2">
                              {basket.title}
                            </h3>
                            <div className="text-2xl font-bold text-green-900 mb-1">
                              CHF {basket.price}.–
                            </div>
                            <div className="text-green-700/70 text-sm mb-4">
                              {basket.weight} • {basket.description}
                            </div>
                            
                            <div className="space-y-2 mb-6">
                              {basket.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-sm text-green-700">
                                  <Check className="w-4 h-4 text-emerald-500" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                            
                            <div className="text-center">
                              <div className={`px-4 py-2 rounded-lg font-medium ${
                                selectedBasket === basket.id
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {selectedBasket === basket.id ? 'Selected' : 'Select'}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Custom Amount Input */}
                    {selectedGiftType === 'custom' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto"
                      >
                        <div className="text-center mb-6">
                          <div className="text-lg font-semibold text-green-900 mb-2">
                            Freely choose the gift voucher amount
                          </div>
                          <div className="text-green-700/70 text-sm">
                            Minimum: 70 CHF
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="text-5xl font-bold text-green-900 text-center mb-4">
                            {customAmount}
                          </div>
                          <div className="text-center text-green-700/70 mb-6">CHF</div>
                          
                          <div className="flex items-center gap-4">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                              onClick={() => setCustomAmount(Math.max(70, customAmount - 10))}
                            >
                              -10
                            </Button>
                            <Input
                              type="number"
                              min="70"
                              step="10"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(Math.max(70, parseInt(e.target.value) || 70))}
                              className="text-center text-xl font-bold border-green-300 focus:border-green-500"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                              onClick={() => setCustomAmount(customAmount + 10)}
                            >
                              +10
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {[70, 100, 150].map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant="outline"
                                className={`border-green-300 ${
                                  customAmount === amount 
                                    ? 'bg-green-100 text-green-900 border-green-500' 
                                    : 'text-green-700 hover:bg-green-50'
                                }`}
                                onClick={() => setCustomAmount(amount)}
                              >
                                CHF {amount}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-end">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      onClick={handleNextStep}
                    >
                      Continue to Personalize
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-12"
                >
                  {/* Step 2: Personalize */}
                  <div>
                    <h2 className="text-3xl font-bold text-green-900 mb-6">
                      Personalize Your Gift
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Gift Message (Optional)
                          </Label>
                          <Textarea
                            placeholder="Write a heartfelt message for your recipient..."
                            value={giftMessage}
                            onChange={(e) => setGiftMessage(e.target.value)}
                            className="min-h-[120px] border-green-300 focus:border-green-500"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Recipient's Email
                          </Label>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            className="border-green-300 focus:border-green-500"
                            required
                          />
                          <p className="text-green-700/60 text-sm mt-1">
                            The gift voucher will be sent to this email
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Delivery Date (Optional)
                          </Label>
                          <Input
                            type="date"
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                            className="border-green-300 focus:border-green-500"
                          />
                          <p className="text-green-700/60 text-sm mt-1">
                            Schedule when the gift voucher should be delivered
                          </p>
                        </div>

                        {/* Gift Preview */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                              <GiftIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-green-900">Gift Voucher Preview</h4>
                              <p className="text-green-700 text-sm">
                                {selectedGiftType === 'basket' ? selectedOption?.title : 'Custom Amount'}
                              </p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-900 mb-2">
                              {formatCurrency(giftAmount)}
                            </div>
                            <div className="text-green-700/70 text-sm">
                              Valid for 12 months
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-50"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      onClick={handleNextStep}
                    >
                      Continue to Billing
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-12"
                >
                  {/* Step 3: Billing */}
                  <div>
                    <h2 className="text-3xl font-bold text-green-900 mb-6">
                      Billing Address
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Your Email
                          </Label>
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-green-300 focus:border-green-500"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium text-green-700 mb-2 block">
                              First Name
                            </Label>
                            <Input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="border-green-300 focus:border-green-500"
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-green-700 mb-2 block">
                              Last Name
                            </Label>
                            <Input
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="border-green-300 focus:border-green-500"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Company Name (optional)
                          </Label>
                          <Input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border-green-300 focus:border-green-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-green-700 mb-2 block">
                            Street and Number
                          </Label>
                          <Input
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            className="border-green-300 focus:border-green-500"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium text-green-700 mb-2 block">
                              Postal Code
                            </Label>
                            <Input
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              className="border-green-300 focus:border-green-500"
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-green-700 mb-2 block">
                              City
                            </Label>
                            <Input
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className="border-green-300 focus:border-green-500"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mt-8 pt-8 border-t border-green-200">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={acceptTerms}
                          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                          className="border-green-300 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                        />
                        <Label htmlFor="terms" className="text-sm text-green-700 cursor-pointer">
                          I accept the terms and conditions
                        </Label>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                      <h3 className="text-lg font-bold text-green-900 mb-4">Order Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-green-700">Gift Voucher</span>
                          <span className="font-bold text-green-900">{formatCurrency(giftAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700">Processing Fee</span>
                          <span className="font-bold text-green-900">CHF 0.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700">Delivery</span>
                          <span className="font-bold text-green-900">FREE</span>
                        </div>
                        <div className="pt-3 border-t border-green-200">
                          <div className="flex justify-between">
                            <span className="text-lg font-bold text-green-900">Total</span>
                            <span className="text-2xl font-bold text-green-900">{formatCurrency(giftAmount)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-50"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      onClick={handleNextStep}
                      disabled={!acceptTerms}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Confirm and Pay
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-20 border-t border-green-200"
            >
              <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
                How Does It Work?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-900 mb-2">
                        Instant Digital Gift Card
                      </h3>
                      <p className="text-green-700/80">
                        You'll receive the gift voucher by email right after your purchase
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-900 mb-2">
                        Easy Redemption
                      </h3>
                      <p className="text-green-700/80">
                        The lucky recipient will simply need to enter the code during their first order
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4">Gift Voucher Benefits</h4>
                  <div className="space-y-3">
                    {[
                      "Valid for 12 months",
                      "Works for any basket size",
                      "Free carbon-neutral delivery",
                      "100% organic produce",
                      "Flexible subscription options",
                      "Perfect for any occasion"
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-green-700">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Card Success Modal */}
      <AnimatePresence>
        {showGiftCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowGiftCard(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-b from-white to-green-50 rounded-3xl max-w-lg w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4">
                  <GiftIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Gift Card Created!
                </h3>
                <p className="text-green-700/80">
                  Your gift voucher has been sent to {recipientEmail || 'the recipient'}
                </p>
              </div>

              {/* Gift Card Design */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm opacity-80">Gift Voucher</div>
                    <div className="text-2xl font-bold">BIO-GIFT-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}</div>
                  </div>
                  <QrCode className="w-16 h-16 bg-white p-2 rounded-lg" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">{formatCurrency(giftAmount)}</div>
                  <div className="text-green-200/80">Valid until December 31, 2025</div>
                </div>
                
                {giftMessage && (
                  <div className="border-t border-green-400/30 pt-4 mt-4">
                    <div className="text-sm opacity-80 mb-2">Personal Message:</div>
                    <div className="italic">"{giftMessage}"</div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Print Voucher
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Resend Email
                </Button>
              </div>

              <div className="text-center mt-6">
                <Button
                  variant="ghost"
                  className="text-green-700 hover:text-green-900"
                  onClick={() => setShowGiftCard(false)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-green-500" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Loved by Many
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
              Gift Stories
            </h2>
            <p className="text-green-700/70 text-lg max-w-2xl mx-auto">
              See what people are saying about gifting the organic experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-green-200/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-green-800/80 italic text-lg mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-green-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-green-900">{testimonial.name}</div>
                    <div className="text-green-700/70 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${15 + Math.random() * 25}px`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['🎁', '🎉', '✨', '💚', '🥳'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
            >
              <GiftIcon className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Spread Joy with Organic Goodness
            </h2>
            
            <p className="text-green-100/80 text-lg mb-8">
              The perfect gift for birthdays, holidays, anniversaries, or just to show you care.
            </p>
            
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-green-50 shadow-lg"
              onClick={() => {
                setCurrentStep(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Create Another Gift
            </Button>

            <div className="mt-8 flex items-center justify-center gap-6 text-green-100/70 text-sm flex-wrap">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Free carbon-neutral delivery
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                100% organic certified
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Valid for 12 months
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gift;