import Navbar from "./Navbar";
import localFont from "next/font/local"

const mainFont = localFont({
  src: "../fonts/Plain-Regular.otf",
  display:"swap",
})

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <div className="">

            <Navbar />
            <div style={{paddingTop: "90px"}} className={mainFont.className}>
            {children}
            </div>
        </div>
      </div>
    </div>
  );
}