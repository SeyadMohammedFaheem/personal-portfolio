import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogContentProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  content: React.ReactNode;
  tags?: string[];
}

export function BlogContent({
  title,
  subtitle,
  author,
  date,
  readTime,
  category,
  heroImage,
  content,
  tags = ["Blog", "Creative", "Portfolio"],
}: BlogContentProps) {
  return (
    <article className="min-h-screen bg-[#FFFCF5] text-[#070707]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#F5F0E8]">
        <div className="container mx-auto px-6 pt-16 pb-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-black/5 text-[#070707] border border-black/10 uppercase text-xs tracking-wider px-4 py-1 rounded-full">
                {category}
              </span>
              <div className="flex items-center text-[#070707]/60 text-sm space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>By {author}</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl uppercase mb-6 text-[#070707] leading-tight tracking-tight">
              {title}
            </h1>

            <p className="text-xl text-[#070707]/80 mb-8 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-6 mb-16 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-sm overflow-hidden border border-black/10">
            <ImageWithFallback
              src={heroImage}
              alt={title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none 
            [&>p]:text-[#070707]/80 
            [&>p]:leading-relaxed 
            [&>p]:mb-6
            [&>h2]:text-3xl 
            [&>h2]:uppercase 
            [&>h2]:text-[#070707] 
            [&>h2]:mt-12 
            [&>h2]:mb-6
            [&>h2]:tracking-tight
            [&>h3]:text-2xl 
            [&>h3]:uppercase 
            [&>h3]:text-[#070707] 
            [&>h3]:mt-8 
            [&>h3]:mb-4
            [&>ul]:list-none
            [&>ul]:space-y-2
            [&>ul>li]:text-[#070707]/80
            [&>ul>li]:pl-6
            [&>ul>li]:relative
            [&>ul>li]:before:content-['—']
            [&>ul>li]:before:absolute
            [&>ul>li]:before:left-0
          "
          >
            {content}
          </div>
        </div>
      </div>

      {/* Tags & Share Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-b border-black/10 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="uppercase text-xs tracking-wider text-[#070707]/60">Tags:</span>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-black/5 text-[#070707] border border-black/10 uppercase text-xs tracking-wider px-3 py-1 rounded-full hover:bg-black/10 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-2">
                <span className="uppercase text-xs tracking-wider text-[#070707]/60">Share:</span>
                <button className="text-[#070707] hover:text-black hover:bg-black/5 h-8 w-8 p-0 flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="text-[#070707] hover:text-black hover:bg-black/5 h-8 w-8 p-0 flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="text-[#070707] hover:text-black hover:bg-black/5 h-8 w-8 p-0 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F5F0E8] border border-black/10 rounded-sm p-8">
            <h3 className="text-2xl uppercase text-[#070707] mb-6 tracking-tight">Leave a Comment</h3>
            <p className="text-sm text-[#070707]/60 mb-8">Your email address will not be published. Required fields are marked *</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  className="bg-[#FFFCF5] border-black/10 rounded-sm px-4 py-3 text-[#070707] placeholder:text-[#070707]/40 focus:border-black/30 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="bg-[#FFFCF5] border-black/10 rounded-sm px-4 py-3 text-[#070707] placeholder:text-[#070707]/40 focus:border-black/30 transition-colors"
                />
              </div>
              
              <input
                type="text"
                placeholder="Website"
                className="bg-[#FFFCF5] border-black/10 rounded-sm px-4 py-3 text-[#070707] placeholder:text-[#070707]/40 focus:border-black/30 transition-colors w-full"
              />
              
              <textarea
                placeholder="Your Comment Here..."
                rows={6}
                className="bg-[#FFFCF5] border-black/10 rounded-sm px-4 py-3 text-[#070707] placeholder:text-[#070707]/40 focus:border-black/30 transition-colors w-full resize-none"
              />
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="save-info"
                  className="mt-1 h-4 w-4 rounded border-black/20 text-black focus:ring-black/20"
                />
                <label htmlFor="save-info" className="text-sm text-[#070707]/70 leading-relaxed">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white hover:bg-black/90 uppercase text-xs tracking-wider px-8 py-3 rounded-sm transition-colors"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
