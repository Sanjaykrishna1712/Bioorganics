import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const OfficeSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Welcome to BioOrganics for Offices!
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Your office delivery plan has been confirmed successfully.
          </p>

          {/* Next Steps */}
          <Card className="border-green-200 mb-8">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-semibold text-green-900">Confirmation Email</h4>
                    <p className="text-green-700">You'll receive a detailed confirmation email within 15 minutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-semibold text-green-900">Onboarding Call</h4>
                    <p className="text-green-700">Our team will contact you within 24 hours to schedule delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-semibold text-green-900">First Delivery</h4>
                    <p className="text-green-700">Your first delivery will be scheduled for next week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          

          {/* Download/Print */}
          <div className="text-center">
            <Button variant="ghost" className="text-green-700 hover:text-green-900">
              <Download className="w-4 h-4 mr-2" />
              Download Confirmation (PDF)
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};