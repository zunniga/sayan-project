"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, RotateCcw, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VerificationPage() {
  const [captchaCode, setCaptchaCode] = useState(() => {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  }
  );

  const [searchForm, setSearchForm] = useState({
    documentNumber: "",
    certificateCode: "",
    fullName: "",
    captcha: ""
  });
  
  const [activeTab, setActiveTab] = useState("document");

  const refreshCaptcha = () => {
    setSearchForm({ ...searchForm, captcha: "" });
    const newCaptcha = Math.random().toString(36).substring(2, 6).toUpperCase();
    // Update the captcha code state
    setCaptchaCode(newCaptcha);
  };

  return (
    <main className="pt-32 pb-16 px-4 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-gray-900 dark:text-white">
                VERIFICA TU{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                CERTIFICADO
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Verifica la autenticidad de tu certificado ingresando tu número de
              documento de identidad, código de certificado o nombres y apellidos.
            </p>
          </motion.div>

          {/* Main Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-blue-500/5 rounded-[3rem] blur-3xl opacity-70" />
            
            {/* Secondary Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 dark:from-blue-300/10 dark:to-blue-500/10 rounded-[2rem] blur-xl opacity-50" />

            {/* Card */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              {/* Animated Top Border */}
              <div className="absolute -top-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent rounded-t-3xl" />

              <div className="p-10 md:p-12">
                <Tabs defaultValue="document" value={activeTab} className="w-full" onValueChange={setActiveTab}>
                  {/* Buscar por - Enhanced */}
                  <div className="flex justify-center items-center mb-10">
                    <span className="relative inline-block">
                      <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Buscar por
                      </span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 ml-1">
                        :
                      </span>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full" />
                    </span>
                  </div>

                  {/* Enhanced Tabs */}
                  <TabsList className="w-full h-auto mx-auto mb-10 bg-gray-100/70 dark:bg-gray-700/70 border border-gray-200/60 dark:border-gray-600/60 rounded-2xl p-2 backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 gap-2">
                    <TabsTrigger
                      value="document"
                      className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Documento de identidad
                    </TabsTrigger>
                    <TabsTrigger
                      value="certificate"
                      className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Código de Certificado
                    </TabsTrigger>
                    <TabsTrigger
                      value="name"
                      className="rounded-xl py-4 px-6 text-sm font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Nombres y apellidos
                    </TabsTrigger>
                  </TabsList>

                  {/* Enhanced Content */}
                  <div className="relative mb-8">
                    {/* Document Search */}
                    <TabsContent value="document" className="space-y-6">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          value={searchForm.documentNumber}
                          onChange={(e) => setSearchForm({...searchForm, documentNumber: e.target.value})}
                          className="flex-1 px-6 py-4 bg-gray-50/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-lg backdrop-blur-sm"
                          placeholder="Ingresa tu número de documento de identidad"
                        />
                        <motion.button 
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Search className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </TabsContent>

                    {/* Certificate Search */}
                    <TabsContent value="certificate" className="space-y-6">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          value={searchForm.certificateCode}
                          onChange={(e) => setSearchForm({...searchForm, certificateCode: e.target.value})}
                          className="flex-1 px-6 py-4 bg-gray-50/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-lg backdrop-blur-sm"
                          placeholder="Ingresa el código del certificado"
                        />
                        <motion.button 
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Search className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </TabsContent>

                    {/* Name Search */}
                    <TabsContent value="name" className="space-y-6">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          value={searchForm.fullName}
                          onChange={(e) => setSearchForm({...searchForm, fullName: e.target.value})}
                          className="flex-1 px-6 py-4 bg-gray-50/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-lg backdrop-blur-sm"
                          placeholder="Ingresa tus nombres y apellidos"
                        />
                        <motion.button 
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Search className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </TabsContent>
                  </div>

                  {/* Enhanced Captcha */}
                  <div className="mt-8">
                    <div className="flex flex-row gap-4 max-w-lg mx-auto">
                      {/* Captcha Code */}
                      <div className="w-1/2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl overflow-hidden relative shadow-lg">
                        <div className="relative w-full flex items-center justify-center py-4">
                          <div className="flex justify-center items-center select-none">
                            <div className="text-white font-bold text-3xl tracking-[0.3em] select-none">
                              {captchaCode}
                            </div>
                          </div>
                          <motion.button
                            onClick={refreshCaptcha}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            aria-label="Refrescar código"
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <RotateCcw className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Captcha Input */}
                      <div className="w-1/2">
                        <div className="relative h-full">
                          <input
                            type="text"
                            placeholder="Ingrese el código"
                            value={searchForm.captcha}
                            onChange={(e) => setSearchForm({...searchForm, captcha: e.target.value})}
                            className="w-full h-full px-4 py-4 text-center text-lg bg-gray-50/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white placeholder-gray-400 backdrop-blur-sm font-semibold tracking-wider"
                            maxLength={5}
                            autoComplete="off"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Help Text */}
                    <motion.div 
                      className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center flex items-center justify-center gap-2 bg-blue-50/50 dark:bg-blue-900/20 px-6 py-3 rounded-xl mx-auto max-w-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>
                        Ingrese el código exactamente como aparece para verificar que no es un robot
                      </span>
                    </motion.div>
                  </div>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}