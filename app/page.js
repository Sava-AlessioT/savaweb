"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

// Import shadcn components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  const horizontalRef = useRef(null);

  useEffect(() => {
    // Only run this on client side
    if (typeof window !== "undefined") {
      // Add custom styles for the horizontal scrolling sections
      const style = document.createElement('style');
      style.innerHTML = `
        .horizontal-section {
          overflow: hidden;
        }
        .panels-container {
          display: flex;
          width: 300%; /* 3 panels, each 100% width */
          height: 100vh;
        }
        .panel {
          width: 100%;
          height: 100%;
        }
      `;
      document.head.appendChild(style);

      const sections = document.querySelectorAll('.panel');
      const container = document.querySelector('.panels-container');
      
      if (container && sections.length) {
        const handleScroll = () => {
          // Only execute if the element is in viewport
          const rect = container.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const scrollProgress = (window.scrollY - rect.top) / (rect.height - window.innerHeight);
            const translateX = Math.min(scrollProgress * 100, 100) * -1; // Max 100% translation
            container.style.transform = `translateX(${translateX}%)`;
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6">
        <div className="container mx-auto flex justify-center md:grid md:grid-cols-3 items-center">
          <a href="#" className="flex items-center text-white md:col-span-1">
            <span className="text-2xl tracking-widest">SAVA</span>
          </a>
          
          <NavigationMenu className="hidden md:flex md:col-span-1">
            <NavigationMenuList className="flex space-x-8 items-center justify-center">
              <NavigationMenuItem>
                <Link href="#what-we-build" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#vision" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    VISION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#problem" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    PROBLEM
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#solution" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    SOLUTION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#reserve" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    RESERVE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="contact.html" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white text-sm tracking-widest hover:text-white/70 transition-all hover:bg-transparent">
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="what-we-build" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video className="absolute w-full h-full object-cover" autoPlay loop muted playsInline defaultMuted webkit-playsinline preload="metadata">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Noise overlay */}
          <div className="absolute inset-0 z-20 opacity-5"></div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 z-20"></div>
        </div>
        
        {/* Centered content */}
        <div className="container relative z-30 mx-auto h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="flex items-center justify-center mb-8"
            >
              <p className="text-s uppercase tracking-widest flex items-center">
                BACKED BY <Image src="/white_yc_logo.svg" alt="Y" width={24} height={24} className="h-6 mx-3" /> COMBINATOR
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 70 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            >
              ROBOT OPERATORS FOR SHEET METAL
            </motion.h1>
            
            <Separator className="bg-white h-1 w-32 mx-auto mb-8" />
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 50 }}
              className="text-2xl mb-12 mx-auto"
            >
              SAVA IS BUILDING THE FIRST PLUG-AND-PLAY PRESS BRAKE OPERATOR
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.1, type: "spring", stiffness: 100 }}
              className="flex justify-center"
            >
              <Button variant="secondary" size="lg" asChild className="bg-white text-black hover:bg-gray-200 rounded-sm px-10 py-7 font-bold tracking-widest">
                <a href="contact.html">LEARN MORE</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-0.5 h-10 bg-white/70 rounded"
              />
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs opacity-80"
              >
                Scroll to explore
              </motion.span>
            </motion.div>
          </div>
        </div>
        
        {/* Corner brackets for aesthetic */}
        <div className="absolute top-8 left-8 w-16 h-16 z-30 border-t-2 border-l-2 border-white/50 pointer-events-none rounded-tl-sm"></div>
        <div className="absolute top-8 right-8 w-16 h-16 z-30 border-t-2 border-r-2 border-white/50 pointer-events-none rounded-tr-sm"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 z-30 border-b-2 border-l-2 border-white/50 pointer-events-none rounded-bl-sm"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 z-30 border-b-2 border-r-2 border-white/50 pointer-events-none rounded-br-sm"></div>
      </section>

      {/* Horizontal Scrolling Sections */}
      <section ref={horizontalRef} className="horizontal-section relative overflow-hidden" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="panels-container">
            {/* Vision Panel */}
            <div id="vision" className="panel bg-black relative">
              <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                <div className="text-center mb-16">
                  <div className="inline-block px-2 py-1 text-xs tracking-widest mb-4">OUR VISION</div>
                  <Separator className="bg-white h-0.5 mx-auto mb-4 w-[500px] max-w-full" />
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 tracking-wider px-2"
                  >
                    THE NEXT MANUFACTURING WORKFORCE
                  </motion.h2>
                  <Separator className="bg-white h-0.5 mx-auto mb-8 w-[500px] max-w-full" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Card className="max-w-5xl mx-auto bg-black/40 backdrop-blur-lg border-white/10">
                      <CardContent className="p-8">
                        <p className="text-xl italic text-center text-white">"We envision a world where American manufacturing is fully automated, where humans are liberated from tedious labor to focus on creativity, humanity, and exploration."</p>
                        <p className="text-center mt-4 font-bold text-white">— Founders Jakob, Alessio, & Vedic</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute inset-0 z-0">
                {/* Grid Background */}
                <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
                {/* Abstract geometric shapes for visual interest */}
                <div className="absolute top-40 left-20 w-60 h-60 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-40 right-40 w-80 h-80 border border-white/20 transform rotate-12 rounded-sm"></div>
              </div>
              
              <motion.div 
                initial={{ y: -100 }}
                animate={{ y: "100vh" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-white/20 blur-sm z-0"
              />
            </div>
            
            {/* Problem Panel */}
            <div id="problem" className="panel bg-black relative">
              <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                <div className="text-center mb-16">
                  <div className="inline-block px-2 py-1 text-xs tracking-widest mb-4">THE PROBLEM</div>
                  <Separator className="bg-white h-0.5 mx-auto mb-4 w-[600px] max-w-full" />
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 tracking-wider px-2"
                  >
                    NO ONE (OR THING) TO OPERATE PRESS BRAKES
                  </motion.h2>
                  <Separator className="bg-white h-0.5 mx-auto mb-8 w-[600px] max-w-full" />
                </div>

                <div className="max-w-5xl mx-auto">
                  <motion.div 
                    className="space-y-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.3
                        }
                      }
                    }}
                  >
                    {/* Problem Point 1 */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                    >
                      <Card className="bg-transparent border-none shadow-none">
                        <CardContent className="p-0">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-6">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-black text-white font-bold text-xl">1</div>
                            </div>
                            <div>
                              <p className="text-lg text-white">Critical shortage of skilled manufacturing operators.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    {/* Problem Point 2 */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                    >
                      <Card className="bg-transparent border-none shadow-none">
                        <CardContent className="p-0">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-6">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-black text-white font-bold text-xl">2</div>
                            </div>
                            <div>
                              <p className="text-lg text-white">Automation cells require shops to replace existing equipment.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Problem Point 3 */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                    >
                      <Card className="bg-transparent border-none shadow-none">
                        <CardContent className="p-0">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-6">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-black text-white font-bold text-xl">3</div>
                            </div>
                            <div>
                              <p className="text-lg text-white">Tedious programming causes shops to turn down profitable jobs.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute inset-0 z-0">
                {/* Abstract geometric shapes */}
                <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/20 rounded-full"></div>
                <div className="absolute top-20 right-20 w-40 h-40 border border-white/20 transform rotate-45 rounded-sm"></div>
              </div>
            </div>
            
            {/* Solution Panel */}
            <div id="solution" className="panel bg-black relative">
              <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                {/* Section title */}
                <div className="text-center mb-16">
                  <div className="inline-block px-2 py-1 text-xs tracking-widest mb-4">OUR SOLUTION</div>
                  <Separator className="bg-white h-0.5 mx-auto mb-4 w-[600px] max-w-full" />
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 tracking-wider px-2"
                  >
                    ROBOT OPERATORS FOR SHEET METAL
                  </motion.h2>
                  <Separator className="bg-white h-0.5 mx-auto mb-8 w-[600px] max-w-full" />
                  <p className="text-base mb-8 px-4 text-white">
                    Simply provide the CAD & quantity — the robot does the rest
                    <span className="inline-block animate-pulse ml-1">|</span>
                  </p>
                </div>
                
                {/* Content grid */}
                <div className="grid md:grid-cols-1 gap-8 items-start">
                  {/* Video with animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto w-full"
                  >
                    <Card className="bg-transparent p-6 border border-white/30 rounded-sm">
                      <CardContent className="p-0">
                        <div className="aspect-video relative overflow-hidden">
                          <video className="absolute w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
                            <source src="/howitworks.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute inset-0 opacity-20"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-2 py-1 text-xs tracking-widest mb-4">RESERVE YOUR ROBOT</div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 tracking-wider px-2 text-white"
            >
              LIMITED AVAILABILITY FOR 2025
            </motion.h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white">
              The first SAVA press brake operator ships July 4th, 2026
            </p>
            
            <ReservationCountdown />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-10"
            >
              <Button variant="secondary" size="lg" asChild className="bg-white text-black hover:bg-gray-200 rounded-sm px-10 py-7 font-bold tracking-widest">
                <a href="mailto:founders@savarobotics.com?subject=Robot%20Reservation%20Inquiry" className="flex items-center">
                  <span>RESERVE A ROBOT</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-2xl tracking-widest text-white">SAVA</span>
              </div>
              <p className="text-white/70 mb-6">
                <a href="mailto:founders@savarobotics.com" className="hover:text-white transition-colors">founders@savarobotics.com</a>
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/savarobotics" target="_blank" rel="noopener noreferrer" className="border border-white/50 w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://x.com/savarobotics" target="_blank" rel="noopener noreferrer" className="border border-white/50 w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@SavaRobotics" target="_blank" rel="noopener noreferrer" className="border border-white/50 w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12002 4 3.40002 4.46C2.92927 4.59318 2.50209 4.84824 2.16142 5.19941C1.82076 5.55057 1.57891 5.98541 1.46002 6.46C1.14524 8.20556 0.991258 9.97631 1.00002 11.75C0.988802 13.537 1.14279 15.3213 1.46002 17.08C1.59098 17.5398 1.83833 17.9581 2.17817 18.2945C2.518 18.6308 2.9394 18.8738 3.40002 19C5.12002 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.17862 22.54 6.42Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base mb-4 tracking-wider text-white">SUBSCRIBE FOR UPDATES</h3>
              <form className="flex">
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your email address" 
                  className="bg-black border border-white/50 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:border-white text-white rounded-l-sm rounded-r-none" 
                  required 
                />
                <Button type="submit" variant="default" className="bg-white text-black hover:bg-gray-200 rounded-l-none rounded-r-sm px-4 py-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 flex justify-center">
            <p className="text-white/50 text-sm">© 2025 SAVA ROBOTICS // ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reservation Countdown Component
function ReservationCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-04T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      setTimeLeft({ months, days, hours });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-black border border-white/20 p-8 mb-12 max-w-2xl mx-auto relative text-white">
        <div className="absolute -top-3 left-6 bg-black px-3 text-gray-400 text-sm">
          PRODUCTION TIMELINE
        </div>
        
        <CardContent className="p-0 text-center">
          <p className="text-gray-400 mb-6">The first SAVA ROBOTICS press brake operator ships:</p>
          <div className="text-3xl font-bold text-white mb-2">JULY 4, 2026</div>
          <Separator className="bg-white/20 h-px w-1/2 mx-auto my-6" />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-4xl text-white mb-1">{timeLeft.months.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">MONTHS</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-1">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">DAYS</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-1">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">HOURS</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
