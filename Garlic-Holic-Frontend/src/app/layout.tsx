import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReportModal from './components/ReportModal';
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import ImagePreloader from './components/ImagePreloader';
import ToastContainer from './components/Toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ImagePreloader />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
        <div className='h-screen'>
          <div 
            className='bg-[#FCF8F5] max-w-[513px] mih-w-[315px] flex flex-col mx-auto items-center h-screen px-6 relative'
            id="main-layout"
          ><Navbar/>
            {children}
            <ReportModal />
            <ToastContainer />
          </div>
        </div>
      </body>
    </html>
  );
}
