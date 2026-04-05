import type { Metadata } from "next";
import { DM_Sans, Koulen } from "next/font/google";
import "swiper/swiper-bundle.css";
import "../../public/assets/css/style.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/custom-layout/CustomLayout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koulen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACL Academy - Advance Your Career with Expert-Led Courses",
  description: "ACL Academy offers expert-led courses in Quantity Surveying, Digital Marketing, and Business Consultancy. Advance your career with our comprehensive training programs designed to equip you with the skills and knowledge needed for success in today's competitive job market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${koulen.variable} font-dm-sans`}>
        <ContextProvider>
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
