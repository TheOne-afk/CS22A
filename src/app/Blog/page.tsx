"use client"
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar"
import Loading from "../loading"
import BlogData from "../../json/blogData.json"
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer/footer"
import Image from "next/image";
/* import P from "../Blog/id" */
import BlogImage from "../../../public/images/DummyImage/blog.jpg"
import Link from "next/link";
import AclcImage from '/public/images/Aclc-Icon-White.svg'
import Gudali from "../../../public/images/BlogPhotos/gudali.jpg"

const BlogNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu
  const [isMobile, setIsMobile] = useState(false); // State to check if the screen is mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIsMobile(true); // Mobile screen
      } else {
        setIsMobile(false); // Non-mobile screen
      }
    };

    // Initial check and event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <nav
      className="h-full w-full text-[#F6F6F6] flex items-center justify-between px-14
                /* << TABLET/IPAD RESPONSIVE */ max-lg:justify-between max-lg:px-2"
    >
      <span className="flex items-center gap-2">
        <Image src={AclcImage} height={40} alt="Aclc Icon"></Image>
        <span className="text-2xl font-semibold tracking-wider">CS22A</span>
      </span>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <div
          className="max-sm:flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      )}

      {/* Popup Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed top-0 right-0 h-full w-[300px] bg-black text-white flex flex-col items-start justify-center gap-6 p-6 z-50">
          {/* Exit Button */}
          <button
            className="absolute top-4 left-4 text-white text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <Link href="/">
            <span onClick={() => setMenuOpen(false)}>Home</span>
          </Link>
          <Link href="/#aboutPage">
            <span onClick={() => setMenuOpen(false)}>About</span>
          </Link>
          <Link href="/#eventPage">
            <span onClick={() => setMenuOpen(false)}>Event</span>
          </Link>
          <Link href="/#infoPage">
            <span onClick={() => setMenuOpen(false)}>Info</span>
          </Link>
          <Link href="/Blog">
            <span onClick={() => setMenuOpen(false)}>Blog</span>
          </Link>
          <Link href="/#feedbackPage">
            <span onClick={() => setMenuOpen(false)}>Feedback</span>
          </Link>
        </div>
      )}

      {/* Navigation Links for Non-Mobile */}
      {!isMobile && (
        <div className="flex text-lg text-gray-200 items-center justify-center gap-16">
          <Link href="/">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              Home
            </span>
          </Link>
          <Link href="/#aboutPage">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              About
            </span>
          </Link>
          <Link href="/#eventPage">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              Event
            </span>
          </Link>
          <Link href="/#infoPage">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              Info
            </span>
          </Link>
          <Link href="/Blog">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              Blog
            </span>
          </Link>
          <Link href="/#feedbackPage">
            <span className="ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]">
              Feedback
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

const Blog = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
      const handScroll = ()=> {
        const currentPosition = window.scrollY
        if(currentPosition > 0){
          setScrolled(true)
        }
        else{
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handScroll)
    })
    const handleClick = (blogId: string)=>{
    router.push(`/Blog/${blogId}`)
    }
    return (
        <>
        <Loading/>
        <div className="overflow-x-hidden" >
            <header className={`navbar w-full z-50 ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[#1E1E1E] h-16"} sticky top-0 left-0 z-10`}> 
            <BlogNavbar/>
            </header>
            <div className="w-full h-fit gap-y-[100px] grid grid-cols-3 mt-10 place-items-center
                          /* MOBILE RESPONSIVE */ max-sm:grid-cols-1 max-sm:gap-y-16
                          /* IPAD/TABLET RESPONSIVE */ max-lg:grid-cols-2 max-lg:gap-x-6 max-lg:px-6
                          /* LAPTOP RESPONSIVE */ max-xl:grid-cols-3 max-xl:gap-x-3 max-xl:px-3
                          /* DESKTOP RESPONIVE */ max-2xl:grid-cols-3 max-2xl:gap-x-6 max-2xl:px-6
            " >
              {
                BlogData.map((item)=>{
                  return (
                    <div className="relative flex h-[400px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md

                    ">
  <div className="relative mx-4 -mt-6 h-[350px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/400">
  <Image src={`/${item.link}`} className="w-full h-full object-cover"  alt="..." fill={true} ></Image>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {item.heading}
    </h5>
    <p className="block  overflow-hidden text-ellipsis h-[100px] font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {item.paragraph}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button onClick={()=>{handleClick(item.blogId)}} data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>

                  )
                })
              }
            </div>
              <div className="h-[10vh]" ></div>
        </div>
        <Footer showNewsletter={false} />
        </>
    )
}

export default Blog