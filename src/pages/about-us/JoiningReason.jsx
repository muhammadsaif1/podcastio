import { Link } from "react-router-dom";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";

const JoiningReason = () => {
  const JoiningReasonList = [
    {
      id: 1,
      icon: "ti ti-broadcast",
      title: "Supreme Audio Clarity",
      desc: "Sound production, and sonic artistry, achieving the pinnacle      of auditory perfection.",
    },
    {
      id: 2,
      icon: "ti ti-microphone",
      title: "Top Presenters",
      desc: "Individuals who have mastered the skill of engaging and captivating audiences.",
    },
    {
      id: 3,
      icon: "ti ti-radio",
      title: "Engaging Theme",
      desc: "Delving deep into its various aspects, implications, and      relevance to our lives.",
    },
    {
      id: 4,
      icon: "ti ti-microphone-2",
      title: "Popular Participants",
      desc: "The fascinating stories of our featured guests on will delight      and inform you.",
    },
    {
      id: 5,
      icon: "ti ti-world",
      title: "World community",
      desc: " Every corner of the globe, contributes to the mosaic of our      'World Community'. ",
    },
    {
      id: 6,
      icon: "ti ti-music",
      title: "Tips and assets",
      desc: "Career growth techniques, financial wisdom, or simply some      inspiration for a better life. ",
    },
  ];

  return (
    <section className="join-for-reason-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 justify-content-between align-items-center mb-lg-15 mb-sm-10 mb-6">
          <div className="col-lg-6 col-md-8">
            <FadeRight>
              <div className="text-center text-lg-start">
                <span className="subheading-border fw-medium mb-4 fs-xl">
                  <span className="fs-2xl">
                    <i className="ti ti-rocket"></i>
                  </span>
                  Join For Info
                </span>
                <h4 className="display-four fw-bold mb-lg-10 mb-sm-6 mb-4">
                  Reasons to join our program
                </h4>
              </div>
            </FadeRight>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="text-lg-end text-center">
              <Link
                to="#newsletter"
                className="bttn-1 bttn-outline alt-position text-nowrap"
              >
                Subscribe
                <span className=" icon d-center icon-right">
                  <i className="ti ti-arrow-narrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-6">
          {JoiningReasonList.map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <FadeUp>
                <div className="join-for-reason-card py-xxl-12 py-sm-6 py-4 px-xxl-8 px-sm-4 px-2 rounded">
                  <div className="card-icon-wrapper d-between gap-4 mb-lg-8 mb-4">
                    <div className="card-icon">
                      <span className="fs-two">
                        <i className={item?.icon}></i>
                      </span>
                    </div>
                    <div className="record-img">
                      <div className="record-img-animation d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="217"
                          height="64"
                          viewBox="0 0 217 64"
                          fill="none"
                        >
                          {" "}
                          <g opacity="0.3">
                            {" "}
                            <path d="M1.18078 30.0396H0V31.7823H1.18078V30.0396Z" />{" "}
                            <path d="M217.243 25.8179H216.061V31.7777H217.243V25.8179Z" />{" "}
                            <path d="M213.22 30.1575H212.04V31.7824H213.22V30.1575Z" />{" "}
                            <path d="M209.289 25.9551H208.108V31.7824H209.289V25.9551Z" />{" "}
                            <path d="M205.267 23.1963H204.086V31.7777H205.267V23.1963Z" />{" "}
                            <path d="M201.246 19.8579H200.065V31.7825H201.246V19.8579Z" />{" "}
                            <path d="M197.224 12.72H196.043V31.7777H197.224V12.72Z" />{" "}
                            <path d="M193.28 9.33252H192.1V31.7776H193.28V9.33252Z" />{" "}
                            <path d="M189.259 14.4382H188.079V31.7826H189.259V14.4382Z" />{" "}
                            <path d="M185.237 18.1396H184.057V31.7775H185.237V18.1396Z" />{" "}
                            <path d="M181.217 21.8413H180.037V31.7776H181.217V21.8413Z" />{" "}
                            <path d="M177.286 24.6003H176.105V31.7826H177.286V24.6003Z" />{" "}
                            <path d="M173.263 27.2612H172.083V31.7778H173.263V27.2612Z" />{" "}
                            <path d="M169.242 21.2717H168.062V31.7775H169.242V21.2717Z" />{" "}
                            <path d="M165.222 28.9597H164.04V31.7776H165.222V28.9597Z" />{" "}
                            <path d="M161.199 25.8228H160.019V31.7826H161.199V25.8228Z" />{" "}
                            <path d="M157.256 21.8462H156.075V31.7776H157.256V21.8462Z" />{" "}
                            <path d="M153.234 18.0659H152.053V31.7775H153.234V18.0659Z" />{" "}
                            <path d="M149.213 11.4043H148.032V31.7777H149.213V11.4043Z" />{" "}
                            <path d="M145.192 0H144.011V31.7776H145.192V0Z" />{" "}
                            <path d="M141.259 14.0945H140.079V31.7776H141.259V14.0945Z" />
                            <path d="M137.238 19.1362H136.057V31.7775H137.238V19.1362Z" />
                            <path d="M133.217 27.9336H132.035V31.7776H133.217V27.9336Z" />
                            <path d="M129.195 22.9802H128.014V31.7776H129.195V22.9802Z" />
                            <path d="M125.252 16.9124H124.071V31.7776H125.252V16.9124Z" />
                            <path d="M121.231 13.0684H120.05V31.7775H121.231V13.0684Z" />
                            <path d="M117.21 28.7878H116.029V31.7776H117.21V28.7878Z" />
                            <path d="M113.189 25.4985H112.008V31.7774H113.189V25.4985Z" />
                            <path d="M109.256 16.3379H108.075V31.7775H109.256V16.3379Z" />
                            <path d="M105.235 20.3735H104.054V31.7777H105.235V20.3735Z" />
                            <path d="M101.212 10.7661H100.032V31.7826H101.212V10.7661Z" />
                            <path d="M97.192 7.17725H96.0112V31.7824H97.192V7.17725Z" />
                            <path d="M93.2486 13.6477H92.0679V31.7776H93.2486V13.6477Z" />
                            <path d="M89.2271 25.3071H88.0464V31.7775H89.2271V25.3071Z" />
                            <path d="M85.2053 20.4373H84.0244V31.7776H85.2053V20.4373Z" />
                            <path d="M81.1843 16.7209H80.0034V31.7777H81.1843V16.7209Z" />
                            <path d="M77.1633 26.2695H75.9824V31.7777H77.1633V26.2695Z" />
                            <path d="M73.2305 24.345H72.0498V31.7776H73.2305V24.345Z" />
                            <path d="M69.2095 19.2197H68.0288V31.7776H69.2095V19.2197Z" />
                            <path d="M65.1887 19.3572H64.0078V31.7776H65.1887V19.3572Z" />
                            <path d="M61.1676 20.4226H59.9868V31.7777H61.1676V20.4226Z" />
                            <path d="M57.2227 25.4839H56.042V31.7776H57.2227V25.4839Z" />
                            <path d="M53.2023 22.4207H52.0215V31.7777H53.2023V22.4207Z" />
                            <path d="M49.1809 11.6204H48V31.7826H49.1809V11.6204Z" />
                            <path d="M45.1597 18.8074H43.979V31.7825H45.1597V18.8074Z" />
                            <path d="M41.2272 21.6548H40.0464V31.7777H41.2272V21.6548Z" />
                            <path d="M37.2063 25.1453H36.0254V31.7826H37.2063V25.1453Z" />
                            <path d="M33.1843 30.7271H32.0034V31.7825H33.1843V30.7271Z" />
                            <path d="M29.1633 29.3672H27.9824V31.7777H29.1633V29.3672Z" />
                            <path d="M25.2198 27.1089H24.0391V31.7776H25.2198V27.1089Z" />
                            <path d="M21.1988 25.9551H20.0181V31.7775H21.1988V25.9551Z" />
                            <path d="M17.1765 23.9963H15.9956V31.7775H17.1765V23.9963Z" />
                            <path d="M13.1558 27.1089H11.9751V31.7776H13.1558V27.1089Z" />
                            <path d="M9.22375 19.8284H8.04297V31.7775H9.22375V19.8284Z" />
                            <path d="M5.20178 28.7681H4.021V31.7824H5.20178V28.7681Z" />
                            <path d="M1.18078 31.7776H0V33.5204H1.18078V31.7776Z" />
                            <path d="M217.243 31.7776H216.061V37.7375H217.243V31.7776Z" />
                            <path d="M213.22 31.7776H212.04V33.4026H213.22V31.7776Z" />
                            <path d="M209.289 31.7776H208.108V37.6049H209.289V31.7776Z" />
                            <path d="M205.267 31.7776H204.086V40.359H205.267V31.7776Z" />
                            <path d="M201.246 31.7776H200.065V43.7022H201.246V31.7776Z" />
                            <path d="M197.224 31.7776H196.043V50.8353H197.224V31.7776Z" />
                            <path d="M193.28 31.7776H192.1V54.2227H193.28V31.7776Z" />
                            <path d="M189.259 31.7776H188.079V49.122H189.259V31.7776Z" />
                            <path d="M185.237 31.7776H184.057V45.4155H185.237V31.7776Z" />
                            <path d="M181.217 31.7776H180.037V41.714H181.217V31.7776Z" />
                            <path d="M177.286 31.7776H176.105V38.9599H177.286V31.7776Z" />
                            <path d="M173.263 31.7776H172.083V36.2941H173.263V31.7776Z" />
                            <path d="M169.242 31.7776H168.062V42.2834H169.242V31.7776Z" />
                            <path d="M165.222 31.7776H164.04V34.5955H165.222V31.7776Z" />
                            <path d="M161.199 31.7776H160.019V37.7375H161.199V31.7776Z" />
                            <path d="M157.256 31.7776H156.075V41.709H157.256V31.7776Z" />
                            <path d="M153.234 31.7776H152.053V45.4892H153.234V31.7776Z" />
                            <path d="M149.213 31.7776H148.032V52.151H149.213V31.7776Z" />
                            <path d="M145.192 31.7776H144.011V63.5553H145.192V31.7776Z" />
                            <path d="M141.259 31.7776H140.079V49.4607H141.259V31.7776Z" />
                            <path d="M137.238 31.7776H136.057V44.4189H137.238V31.7776Z" />
                            <path d="M133.217 31.7776H132.035V35.6216H133.217V31.7776Z" />
                            <path d="M129.195 31.7776H128.014V40.575H129.195V31.7776Z" />
                            <path d="M125.252 31.7776H124.071V46.6428H125.252V31.7776Z" />
                            <path d="M121.231 31.7776H120.05V50.4868H121.231V31.7776Z" />
                            <path d="M117.21 31.7776H116.029V34.7674H117.21V31.7776Z" />
                            <path d="M113.189 31.7776H112.008V38.0566H113.189V31.7776Z" />
                            <path d="M109.256 31.7776H108.075V47.2172H109.256V31.7776Z" />
                            <path d="M105.235 31.7776H104.054V43.1818H105.235V31.7776Z" />
                            <path d="M101.212 31.7776H100.032V52.7941H101.212V31.7776Z" />
                            <path d="M97.192 31.7776H96.0112V56.3828H97.192V31.7776Z" />
                            <path d="M93.2486 31.7776H92.0679V49.9075H93.2486V31.7776Z" />
                            <path d="M89.2271 31.7776H88.0464V38.248H89.2271V31.7776Z" />
                            <path d="M85.2053 31.7776H84.0244V43.118H85.2053V31.7776Z" />
                            <path d="M81.1843 31.7776H80.0034V46.8343H81.1843V31.7776Z" />
                            <path d="M77.1633 31.7776H75.9824V37.2858H77.1633V31.7776Z" />
                            <path d="M73.2305 31.7776H72.0498V39.2102H73.2305V31.7776Z" />
                            <path d="M69.2095 31.7776H68.0288V44.3355H69.2095V31.7776Z" />
                            <path d="M65.1887 31.7776H64.0078V44.198H65.1887V31.7776Z" />
                            <path d="M61.1676 31.7776H59.9868V43.1327H61.1676V31.7776Z" />
                            <path d="M57.2227 31.7776H56.042V38.0713H57.2227V31.7776Z" />
                            <path d="M53.2023 31.7776H52.0215V41.1346H53.2023V31.7776Z" />
                            <path d="M49.1809 31.7776H48V51.9399H49.1809V31.7776Z" />
                            <path d="M45.1597 31.7776H43.979V44.7528H45.1597V31.7776Z" />
                            <path d="M41.2272 31.7776H40.0464V41.9005H41.2272V31.7776Z" />
                            <path d="M37.2063 31.7776H36.0254V38.4149H37.2063V31.7776Z" />
                            <path d="M33.1843 31.7776H32.0034V32.8331H33.1843V31.7776Z" />
                            <path d="M29.1633 31.7776H27.9824V34.1881H29.1633V31.7776Z" />
                            <path d="M25.2198 31.7776H24.0391V36.4463H25.2198V31.7776Z" />
                            <path d="M21.1988 31.7776H20.0181V37.5999H21.1988V31.7776Z" />
                            <path d="M17.1765 31.7776H15.9956V39.5587H17.1765V31.7776Z" />
                            <path d="M13.1558 31.7776H11.9751V36.4463H13.1558V31.7776Z" />
                            <path d="M9.22375 31.7776H8.04297V43.7267H9.22375V31.7776Z" />
                            <path d="M5.20178 31.7776H4.021V34.7919H5.20178V31.7776Z" />
                          </g>{" "}
                          <defs>
                            {" "}
                            <clipPath>
                              {" "}
                              <rect width="217" height="64" fill="white" />{" "}
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-area">
                    <h3 className="title fw-bold mb-lg-6 mb-4">
                      {item?.title}
                    </h3>
                    <p className="description fw-normal">{item?.desc}</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoiningReason;
