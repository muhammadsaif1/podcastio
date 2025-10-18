import { useState } from "react";
import ShowRatingStar from "@/components/Shared/ShowRatingStar";
import AnimateHeight from "react-animate-height";

const CommentBox = ({ comment }) => {
  const [activeReply, setActiveReply] = useState(false);
  const [like, setLike] = useState(false);

  const [replyComment, setReplyComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const toggleReply = () => {
    setActiveReply(!activeReply);
  };

  const onChange = (e) => {
    setReplyComment({ ...replyComment, [e.target.id]: e.target.value });
    console.log(replyComment);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(replyComment);
    setReplyComment({ name: "", email: "", comment: "" });
  };
  return (
    <div className="comments-area">
      <div className="comment-card d-grid gap-6 p-xxl-8 p-sm-6 p-4 rounded bgc-2">
        <div className="comment-time-area d-flex align-items-center gap-lg-6 gap-4 gap-2">
          <span className="comment-date">{comment?.date}</span>
          <span className="tcp-1">
            <i className="ti ti-point-filled"></i>
          </span>
          <span className="comment-time">{comment?.time}</span>
        </div>
        <span className="d-block border-dashed"></span>
        <div className="comment-text-area">
          <ShowRatingStar
            rating={comment?.rating}
            style={
              "d-flex align-items-center gap-lg-2 gap-1 fs-xl tcp-1 mb-lg-4 mb-2"
            }
          />
          <p className="mb-lg-6 mb-sm-4 mb-2">{comment?.text}</p>
          <div className="commenter-info d-flex align-items-center gap-4">
            <div className="img-area">
              <img
                className="w-100 rounded-circle"
                src={comment?.commenter?.img}
                alt="commenter image"
              />
            </div>
            <div>
              <h5 className="fw-semibold mb-sm-2 mb-1">
                {comment?.commenter?.name}
              </h5>
              <span className="fw-normal">
                {comment?.commenter?.designation}
              </span>
            </div>
          </div>
        </div>
        <span className="d-block border-dashed"></span>
        <div className="like-comment">
          <div className="like-comment-btns d-flex align-items-center gap-lg-10 gap-sm-6 gap-4">
            <div className="like-btn-area fs-xl d-flex align-items-center gap-2">
              <button
                className={`like-btn ${like ? "active" : ""}`}
                onClick={() => setLike(!like)}
              >
                {like ? (
                  <i className="ti ti-thumb-up-filled"></i>
                ) : (
                  <i className="ti ti-thumb-up"></i>
                )}
              </button>
              <span className="like-count">{comment?.likes}</span>
            </div>
            <button
              className="comment-btn d-flex align-items-center gap-2 fs-xl"
              onClick={toggleReply}
            >
              <i className="ti ti-message-star"></i>
              <span className="comment-text">Replay</span>
            </button>
          </div>

          {/* reply form */}
          <AnimateHeight height={activeReply ? "auto" : 0}>
            <div className="comment-sending-box">
              <div className="d-flex align-items-center gap-sm-4 gap-2 mt-6">
                <div className="img-area">
                  <img
                    className="w-100 rounded-circle"
                    src={comment?.commenter?.img}
                    alt="host"
                  />
                </div>
                <form onSubmit={onSubmit} className="w-100">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Join the discussion..."
                      value={replyComment.comment}
                      onChange={onChange}
                      id="comment"
                    />
                    <button type="submit" className="icon-btn p-0">
                      <span className="icon alt-size fs-xl fw-normal">
                        <i className="ti ti-send"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
