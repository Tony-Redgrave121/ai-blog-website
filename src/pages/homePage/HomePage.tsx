import React, {useEffect} from 'react'
import HeroSection from "../../components/main/heroSection/HeroSection";
import Crossing from "../../components/main/crossing/Сrossing";
import technology from "../../components/main/features/technology.json";
import Features from "../../components/main/features/Features";
import Button from "../../components/main/generalComponents/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import Blogs from "../../components/main/blogs/Blogs";
import Testimonials from "../../components/main/testimonials/Testimonials";
import IPostLow from "../../utils/types/IPostLow";
import {ITestimonial} from "../../utils/types/ITestimonial";
import TripleContainer from "../../components/main/generalComponents/tripleContainer/TripleContainer";
import ResourceContainer from "../../components/main/generalComponents/resourceContainer/ResourceContainer";
import IHomeResources from "../../utils/types/IHomeResources";
import HomeResources from "../../components/main/resources/homeResources/HomeResources";
import {useAppSelector} from "../../utils/hooks/redux";
import fetchData from "../../utils/fetch/fetchData";
import Swiper from "../../components/main/swiper/Swiper";
import ISwiper from "../../utils/types/ISwiper";

const HomePage = () => {
    const [posts, setPosts] = React.useState<Array<IPostLow>>()
    const [testimonials, setTestimonials] = React.useState<Array<ITestimonial>>()
    const [resources, setResources] = React.useState<Array<IHomeResources>>()
    const [swiper, setSwiper] = React.useState<Array<ISwiper>>()
    const isMobile = useAppSelector(state => state.user.isMobile)

    useEffect(() => {
        const fetchAll = async () => {
            const [posts, testimonials, resources, swiper] = await Promise.all([
                fetchData<IPostLow[]>('posts/posts.json'),
                fetchData<ITestimonial[]>('testimonials/testimonials.json'),
                fetchData<IHomeResources[]>('resources/resources_1.json'),
                fetchData<ISwiper[]>('resources/swiper.json'),
            ])

            setPosts(posts)
            setTestimonials(testimonials)
            setResources(resources)
            setSwiper(swiper)
        }

        fetchAll()
    }, [])

    return (
        <main>
            <HeroSection/>
            <Crossing desc="Unlock the Power of" title="FutureTech Features"/>
            {
                technology.map(item => (
                    <Features icon={item.icon} desc={item.desc} title={item.title} params={item.params} key={item.title}/>
                ))
            }
            <Crossing desc="Explore FutureTech's In-Depth TCA Posts" title="A Knowledge Treasure Trove">
                <Button foo={() => {}}>View All Blogs <HiArrowUpRight/></Button>
            </Crossing>
            {posts && <Blogs posts={posts}></Blogs>}
            <Crossing desc="Your Gateway to In-Depth Information" title="Unlock Valuable Knowledge with FutureTech's TCA">
                <Button foo={() => {}}>View All TCA <HiArrowUpRight/></Button>
            </Crossing>
            { resources &&
                <ResourceContainer>
                    <HomeResources resources={resources}/>
                </ResourceContainer>
            }
            <Crossing desc="Our works" title="Check out our work on artificial intelligence development">
                <Button foo={() => {}}>View All Work <HiArrowUpRight/></Button>
            </Crossing>
            { swiper &&
                <Swiper swiper={swiper}/>
            }
            <Crossing desc="What Our Readers Say" title="Real Words from Real Readers">
                <Button foo={() => {}}>View All Testimonials <HiArrowUpRight/></Button>
            </Crossing>
            { testimonials &&
                <TripleContainer>
                    <Testimonials testimonials={testimonials.slice(0, 3)}/>
                </TripleContainer>
            }
            { testimonials && !isMobile &&
                <TripleContainer>
                    <Testimonials testimonials={testimonials.slice(3, 6)}/>
                </TripleContainer>
            }
        </main>
    )
}

export default HomePage