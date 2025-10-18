import img1 from "../images/shows-5.png";
import img2 from "../images/shows-6.png";
import img3 from "../images/shows-7.png";
import img4 from "../images/shows-8.png";
import icon1 from "../images/h-01.png"
import icon2 from "../images/h-02.png"
import icon3 from "../images/h-03.png"
import icon4 from "../images/h-04.png"
import icon5 from "../images/h-05.png"

const FeaturedShows = [
    {
        id: 1,
        img: img1,
        icon: icon1,
        title: "Laughing Through Life's Labyrinth",
        link: 'episode-details',
        host: {
            name: "Mr Jones Weks",
            link: "/host-details",
        },
        episode: "Episode 10",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    },
    {
        id: 2,
        img: img2,
        icon: icon2,
        title: "Tech Trends Unveiled: Future Horizons",
        link: 'episode-details',
        host: {
            name: "Arlene McCoy",
            link: "/host-details",
        },
        episode: "Episode 18",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    },
    {
        id: 3,
        img: img3,
        icon: icon3,
        title: "Behind the Mic: Podcasting Exposed",
        link: 'episode-details',
        host: {
            name: "Devon Lane",
            link: "/host-details",
        },
        episode: "Episode 06",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    },
    {
        id: 4,
        img: img4,
        icon: icon4,
        title: "Innovation Insights: Diving Deep into Future Tech Trends",
        link: 'episode-details',
        host: {
            name: "Mr Jones Weks",
            link: "/host-details",
        },
        episode: "Episode 09",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    },
    {
        id: 5,
        img: img1,
        icon: icon5,
        title: "Laughter Unleashed: Join Us for Joyful Conversations Today",
        link: 'episode-details',
        host: {
            name: "Devon Lane",
            link: "/host-details",
        },
        episode: "Episode 90",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    },
    {
        id: 6,
        img: img3,
        icon: icon1,
        title: "Behind the Scenes: Candid Talks on Podcasting Strategies",
        link: 'episode-details',
        host: {
            name: "Kathryn Murphy",
            link: "/host-details",
        },
        episode: "Episode 23",
        audio: " https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        btnData: {
            btnText: "Listen Now",
            btnLink: "/latest-episode",
        }
    }
]

export default FeaturedShows