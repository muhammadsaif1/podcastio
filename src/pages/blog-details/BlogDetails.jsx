import DetailsCard from "./DetailsCard";
import NewComment from "./NewComment";
import FilterComment from "./FilterComment";
import CommentBox from "./CommentBox";
import SocialList from "@/components/Shared/SocialList";
import TagList from "@/components/Shared/TagList";
import SearchBar from "@/components/SearchBar/SearchBar";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import RelatedBlog from "./RelatedBlog";
import FadeUp from "@/motion/FadeUp";
import { Link } from "react-router-dom";

import banner from "@/images/blog-banner.png";
import blogAuthor from "@/images/blog-author.png";
import banner2 from "@/images/blog-details-banner-1.png";
import banner3 from "@/images/blog-details-banner-2.png";
import thumbs1 from "@/images/article-1.png";
import thumbs2 from "@/images/article-2.png";
import thumbs3 from "@/images/article-3.png";
import thumbs4 from "@/images/article-4.png";
import thumbs5 from "@/images/article-5.png";
import commenter1 from "@/images/user-1.png";
import commenter2 from "@/images/user-2.png";
import commenter3 from "@/images/user-3.png";

const BlogDetails = () => {
  const cardData = {
    id: 1,
    title: "The Voice in Your Ear: An Intimate Connection",
    shortDesc:
      "A mysterious link is created as soon as you start listening to a podcast episode. It resembles having a private discussion with a buddy, subject matter authority, or storyteller. The human voice has an incredibly powerful resonance that captures your attention and forges an emotional connection that is frequently difficult to reproduce in other types of media.",
    date: "March 10, 2022",
    banner: banner,
    category: {
      name: "Podcast",
      link: "#",
    },
    author: {
      name: "Ashadul Islam",
      designation: "Podcast Creator",
      img: blogAuthor,
      link: "/host-details",
    },
  };
  const socials = [
    {
      icon: "ti ti-brand-facebook",
      link: "#",
    },
    {
      icon: "ti ti-brand-twitter",
      link: "#",
    },
    {
      icon: "ti ti-brand-linkedin",
      link: "#",
    },
    {
      icon: "ti ti-brand-youtube",
      link: "#",
    },
    {
      icon: "ti ti-brand-instagram",
      link: "#",
    },
  ];
  const tags = [
    {
      name: "Music",
      link: "#",
    },
    {
      name: "Storytelling",
      link: "#",
    },
    {
      name: "Ghosts",
      link: "#",
    },
  ];
  const tags2 = [
    {
      name: "Love Story",
      link: "#",
    },
    {
      name: "Romantic",
      link: "#",
    },
    {
      name: "New",
      link: "#",
    },
    {
      name: "Music",
      link: "#",
    },
    {
      name: "Storytelling",
      link: "#",
    },
    {
      name: "Ghosts",
      link: "#",
    },
  ];
  const relatedBlogData = [
    {
      id: 1,
      title: "The Voice in Your Ear: An Intimate Connection",
      thumbs: thumbs1,
      link: "#",
      date: "March 10, 2022",
    },
    {
      id: 2,
      title: "The Art of Compelling Stories in Podcasts",
      thumbs: thumbs2,
      link: "#",
      date: "March 10, 2022",
    },
    {
      id: 3,
      title: "Guest Spotlight: Jones Interview",
      thumbs: thumbs3,
      link: "#",
      date: "March 10, 2022",
    },
    {
      id: 4,
      title: "The Essence of Storytelling in Podcasts",
      thumbs: thumbs4,
      link: "#",
      date: "March 10, 2022",
    },
    {
      id: 5,
      title: "Creating a Podcast Community",
      thumbs: thumbs5,
      link: "#",
      date: "March 10, 2022",
    },
  ];

  const comments = [
    {
      id: 1,
      name: "Ashadul Islam",
      date: "Mar 03, 2024",
      time: "10:30 AM",
      rating: 4.5,
      text: "I can't thank enough for the incredible courses they offer. I completed the 'Web Development Fundamentals' course, and it not only gave me the skills.",
      commenter: {
        name: "Ashadul Islam",
        img: commenter1,
        designation: "Software Developer",
      },
      likes: 12,
    },
    {
      id: 2,
      date: "Mar 03, 2024",
      time: "10:30 AM",
      rating: 4,
      text: "I can't thank enough for the incredible courses they offer. I completed the 'Web Development Fundamentals' course, and it not only gave me the skills.",
      commenter: {
        name: " Ronald Richards",
        designation: "Comedian",
        img: commenter2,
      },
      likes: 512,
    },
    {
      id: 3,
      date: "Mar 03, 2024",
      time: "10:30 AM",
      text: "I can't thank enough for the incredible courses they offer. I completed the 'Web Development Fundamentals' course, and it not only gave me the skills.",
      commenter: {
        name: "Arlene McCoy",
        designation: "Business Owner",
        img: commenter3,
      },
      likes: 152,
    },
  ];

  return (
    <section className="blog-details-section pb-120 texture-bg-1 overflow-visible">
      <div className="container">
        <div className="row g-6">
          <div className="col-xl-8">
            <div className="blog-details-content-wrapper d-grid gap-6 p-xxl-6 p-lg-4 p-3 rounded bgc-3">
              {/* <!-- blog details card  --> */}
              <FadeUp>
                <DetailsCard data={cardData} />
              </FadeUp>

              {/* <!-- blog details content --> */}
              <div className="blog-details-content d-grid p-xxl-8 p-lg-6 p-4 gap-xxl-8 gap-lg-6 gap-4 rounded bgc-2">
                <FadeUp>
                  <div>
                    <h4 className="fw-semibold mb-4">
                      The Essence of Storytelling in Podcasts
                    </h4>
                    <p className="tcn-20 fw-normal mb-lg-8 mb-sm-6 mb-4">
                      Discuss why storytelling is a powerful tool in podcasting.
                      Explore its impact on listener engagement and connection.
                      The beauty of podcasts is their variety. There&apos;s a
                      podcast for every interest, whether you&apos;re looking
                      for true crime mysteries, in-depth interviews with thought
                      leaders, debates on mental health, or even a deep dive
                      into the history of a specialized subject.
                    </p>
                    <ol className="tcn-20 fw-normal ps-5 list-number">
                      <li>
                        Immense spectrum of subjects, ranging from hyper-focused
                        niche topics.
                      </li>
                      <li>
                        Envelopments that might be hard to find elsewhere.
                      </li>
                      <li>
                        Resonates deeply with audiences who share similar
                        interests.
                      </li>
                      <li>
                        Spaces for discussions, networking, and shared
                        experiences.
                      </li>
                    </ol>
                  </div>
                </FadeUp>
                <FadeUp>
                  <div>
                    <h4 className="fw-semibold mb-4">Learning On the Go</h4>
                    <p className="tcn-20 fw-normal mb-lg-8 mb-sm-6 mb-4">
                      Evolved into an unorthodox yet effective platform for
                      learning. Podcasts provide an audio school that you can
                      take with you everywhere, from language instruction to
                      business tactics. Consider turning your regular commute or
                      workout into a chance for personal development and
                      enlightenment.
                    </p>
                    <ul className="tcn-20 fw-normal ps-5 list-disc">
                      <li>
                        Immense spectrum of subjects, ranging from hyper-focused
                        niche topics.
                      </li>
                      <li>
                        Envelopments that might be hard to find elsewhere.
                      </li>
                      <li>
                        Resonates deeply with audiences who share similar
                        interests.
                      </li>
                      <li>
                        Spaces for discussions, networking, and shared
                        experiences.
                      </li>
                    </ul>
                  </div>
                </FadeUp>
                <FadeUp>
                  <div className="blog-details-banner-area d-flex flex-column flex-sm-row gap-6">
                    <div className="img-area">
                      <img
                        className="w-100 rounded"
                        src={banner2}
                        alt="image"
                      />
                    </div>
                    <div className="img-area">
                      <img
                        className="w-100 rounded"
                        src={banner3}
                        alt="image"
                      />
                    </div>
                  </div>
                </FadeUp>
                <FadeUp>
                  <div>
                    <h5 className="fw-semibold mb-4">
                      A Connection Beyond Words
                    </h5>
                    <p className="tcn-20 fw-normal mb-lg-8 mb-sm-6 mb-4">
                      Podcasting transcends the written word. Through
                      storytelling, hosts can convey emotions, nuances, and
                      authenticity that go beyond the limitations of text.
                      Podcasting is an intimate medium that allows storytellers
                      to weave narratives that captivate and resonate with
                      audiences. In the realm of audio.
                    </p>
                    <h6 className="fw-semibold mb-4">Immersive Experiences:</h6>
                    <p className="tcn-20 fw-normal">
                      A well-crafted story transports listeners into different
                      worlds. Whether it&apos;s a personal anecdote, fictional
                      tale, or exploration of real-life events, storytelling
                      allows audiences to immerse themselves in the narrative.
                      Stories have the power to foster empathy by putting
                      listeners in someone else&apos;s shoes.
                    </p>
                  </div>
                </FadeUp>
                {/* <!-- social link and tag list --> */}
                <FadeUp>
                  <div className="d-between flex-wrap gap-4 pt-lg-8 pt-sm-6 pt-4 border-dashed">
                    <div className="follow-us d-between gap-4">
                      <div className="d-flex align-items-center tcp-1 gap-1 d-none d-xxl-block">
                        <span className="fw-semibold">Follow</span>
                        <span className="lh-0">
                          <i className="ti ti-arrow-right"></i>
                        </span>
                      </div>
                      {<SocialList socials={socials} />}
                    </div>
                    <div className="tag-list-wrapper d-between gap-4">
                      <div className="d-flex align-items-center tcp-1 gap-1 d-none d-xxl-block">
                        <span className="fw-semibold">Tag</span>
                        <span className="lh-0">
                          <i className="ti ti-arrow-right"></i>
                        </span>
                      </div>
                      {<TagList tags={tags} />}
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
            {/* <!-- comment area  --> */}
            <div className="blog-details-comments-wrapper d-grid gap-lg-8 gap-6 p-xxl-8 p-4 mt-6 rounded bgc-3">
              <div className="comments-header d-flex flex-wrap gap-3 align-items-center justify-content-between">
                <h4 className="fw-semibold">All Comment</h4>
                <div className="d-flex align-items-center gap-2">
                  <span className="form-label fw-normal text-nowrap mb-0">
                    Sort By :
                  </span>
                  <FilterComment />
                </div>
              </div>
              {comments?.map((comment, index) => (
                <FadeUp key={index}>
                  <CommentBox comment={comment} />
                </FadeUp>
              ))}

              {/* <!-- see all comments pagination  --> */}
              <div className="see-all-comments">
                <button className="bttn-1 bttn-outline">
                  See all
                  <span className=" icon d-center icon-right">
                    <i className="ti ti-arrow-narrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- new comment from  --> */}
            <FadeUp>
              <NewComment />
            </FadeUp>
          </div>
          <div className="col-xl-4">
            <div className="blog-details-sidebar d-grid gap-lg-6 gap-4 p-xxl-6 p-4 rounded bgc-3 position-sticky sticky-top sticky-top-position">
              <FadeUp>
                <div className="search-card-wrapper p-xxl-8 p-lg-6 p-4 rounded bgc-2">
                  <h4 className="fw-semibold mb-4">Search</h4>
                  <SearchBar />
                </div>
              </FadeUp>
              <div className="related-blog-card-wrapper d-grid gap-lg-6 gap-4 p-xxl-8 p-lg-6 p-4 rounded bgc-2">
                <h4 className="fw-semibold">More Related Blog</h4>
                <span className="d-block border-dashed"></span>
                {relatedBlogData.map((blog, index) => (
                  <FadeUp key={index}>
                    <RelatedBlog item={blog} key={index} />
                  </FadeUp>
                ))}
                <span className="d-block border-dashed"></span>
                <span>
                  <Link to="/tending-articles" className="link-btn">
                    See More
                  </Link>
                </span>
              </div>
              <div className="listen-on-wrapper p-xxl-8 p-lg-6 p-4 rounded bgc-2">
                <FadeUp>
                  <h4 className="fw-semibold mb-lg-6 mb-4">Listen On</h4>
                  <ListenOnBtns />
                </FadeUp>
              </div>
              <div className="tag-list-wrapper p-xxl-8 p-lg-6 p-4 rounded bgc-2">
                <FadeUp>
                  <h4 className="fw-semibold mb-lg-6 mb-4">Popular Tag</h4>
                  <TagList tags={tags2} />
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
