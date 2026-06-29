import "./globals.css";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Fatemeh Nazari | Backend Developer",
  description:
    "Backend Developer specializing in Django, React and modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-white text-black dark:bg-[#0b0f17] dark:text-white">

        <Loading>
          <div className="fade-in">
            {children}
          </div>
        </Loading>

      </body>
    </html>
  );
}