import React, {useEffect} from 'react'
import HeroSection from "../../components/main/heroSection/HeroSection";
import Crossing from "../../components/main/crossing/Сrossing";
import technology from "../../components/main/features/technology.json";
import Features from "../../components/main/features/Features";
import Button from "../../components/buttons/Button";
import {HiArrowUpRight} from "react-icons/hi2";
import Blogs from "../../components/main/blogs/Blogs";
import Resources from "../../components/main/resources/Resources";
import Testimonials from "../../components/main/testimonials/Testimonials";
import IPostLow from "../../../../utils/types/IPostLow";
import {ITestimonial} from "../../../../utils/types/ITestimonial";
import TripleContainer from "../../components/main/testimonials/tripleContainer/TripleContainer";

const HomePage = () => {
    const [posts, setPosts] = React.useState<Array<IPostLow>>()
    const [testimonials, setTestimonials] = React.useState<Array<ITestimonial>>()

    useEffect(() => {
        fetch("http://localhost:3000/server/posts/posts.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => console.log(error))

        fetch("http://localhost:3000/server/testimonials/testimonials.json")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => setTestimonials(data))
            .catch(error => console.log(error))
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
            <Blogs posts={posts}></Blogs>
            <Crossing desc="Your Gateway to In-Depth Information" title="Unlock Valuable Knowledge with FutureTech's TCA">
                <Button foo={() => {}}>View All TCA <HiArrowUpRight/></Button>
            </Crossing>
            <Resources/>
            <Crossing desc="What Our Readers Say" title="Real Words from Real Readers">
                <Button foo={() => {}}>View All Testimonials <HiArrowUpRight/></Button>
            </Crossing>
            { testimonials &&
                <TripleContainer>
                    <Testimonials testimonials={testimonials.slice(0, 3)}/>
                </TripleContainer>
            }
            { testimonials &&
                <TripleContainer>
                    <Testimonials testimonials={testimonials.slice(3, 6)}/>
                </TripleContainer>
            }
        </main>
    )
}

export default HomePage