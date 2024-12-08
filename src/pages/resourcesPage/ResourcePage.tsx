import React, {useEffect} from 'react'
import CrossingTitle from "../../components/main/crossingTitle/CrossingTitle";
import QuaternaryContainer from "../../components/main/generalComponents/quaternaryContainer/QuaternaryContainer";
import StatBlock from "../../components/main/generalComponents/statBlock/StatBlock";
import Crossing from "../../components/main/crossing/Сrossing";
import Button from "../../components/main/generalComponents/buttons/Button";
import CrossingButtonBlock from "../../components/main/generalComponents/crossingButtonBlock/CrossingButtonBlock";
import IResource from "../../utils/types/IResource";
import Resources from "../../components/main/resources/Resources";
import fetchData from "../../utils/fetch/fetchData";

const stats = [
    {
        count: 300,
        title: 'Resources available'
    },
    {
        count: 12000,
        title: 'Total Downloads'
    },
    {
        count: 10000,
        title: 'Active Users'
    },
    {
        count: 100,
        title: 'Countries Accesses Our Content '
    },
]

const ResourcePage = () => {
    const [resources, setResources] = React.useState<Array<IResource>>()

    useEffect(() => {
        const fetchAll = async () => {
            const [resource] = await Promise.all([fetchData<IResource[]>('resources/resources_2.json')])

            setResources(resource)
        }

        fetchAll()
    }, [])

    return (
        <main>
            <CrossingTitle title="Unlock a World of" subTitle="Knowledge" desc="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
            <QuaternaryContainer styles={['DoubleContainer']}>
                {
                    stats.map(stat => (
                        <StatBlock stat={stat} key={stat.title} />
                    ))
                }
            </QuaternaryContainer>
            <Crossing desc="Dive into the Details" title="In-Depth Reports and Analysis">
                <CrossingButtonBlock>
                    <Button foo={() => {}} type={['SelectButton', 1 ? 'ActiveSelectButton' : '']}>Whitepapers</Button>
                    <Button foo={() => {}} type={['SelectButton', 0 ? 'ActiveSelectButton' : '']}>Ebooks</Button>
                    <Button foo={() => {}} type={['SelectButton', 0 ? 'ActiveSelectButton' : '']}>Reports</Button>
                </CrossingButtonBlock>
            </Crossing>
            { resources &&
                <Resources resources={resources}></Resources>
            }
        </main>
    )
}

export default ResourcePage;