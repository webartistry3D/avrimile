import { ArrowRight } from "lucide-react";
import blogImg1 from "../assets/Blogpost1.jpg";
import blogImg2 from "../assets/Blogpost2b.jpg";
import blogImg3 from "../assets/Blogpost3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      date: "July 22, 2025",
      title: "How Last Mile Delivery is Changing Urban Logistics",
      description: "Discover how innovations in last mile delivery are redefining customer experience and reducing delivery times in major cities.",
      image: blogImg1,
    },
    {
      date: "July 10, 2025",
      title: "Top 5 eCommerce Fulfillment Strategies for 2025",
      description: "From smart warehousing to same-day shipping, explore strategies that help online brands delight customers and stay competitive.",
      image: blogImg2,
    },
    {
      date: "June 25, 2025",
      title: "Why Real-Time Tracking Builds Customer Trust",
      description: "Real-time logistics visibility isn't just a feature— it's a necessity. Learn how tracking transforms your operations and reputation.",
      image: blogImg3,
    }
  ];

  return (
    <section id="blog" className="py-16 lg:py-24 bg-gradient-to-br from-avrimile-primary to-avrimile-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Insights & Stories</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover the latest trends, tips, and innovations shaping the logistics industry across Africa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-testid={`blog-post-${index}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                data-testid={`blog-image-${index}`}
              />
              <div className="p-6">
                <div className="text-sm text-avrimile-muted mb-2" data-testid={`blog-date-${index}`}>
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-avrimile-secondary mb-3" data-testid={`blog-title-${index}`}>
                  {post.title}
                </h3>
                <p className="text-avrimile-muted leading-relaxed mb-4" data-testid={`blog-description-${index}`}>
                  {post.description}
                </p>
                <button
                  className="text-avrimile-primary font-semibold hover:text-avrimile-accent transition-colors duration-200 flex items-center w-fit py-2 px-1"
                  data-testid={`blog-read-more-${index}`}
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
