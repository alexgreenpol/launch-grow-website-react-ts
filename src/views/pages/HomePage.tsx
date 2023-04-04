import Hero from "../components/Hero/Hero";
import FullwidthLayout from "../layouts/FullwidthLayout";
import ContentWithVideo from "../components/ContentWithVideo/ContentWithVideo";
import HeroVideo from "../assets/video/vid1.mp4";
import MarketVideo from "../assets/video/vid2.mp4";
import FooterVideo from "../assets/video/vid3.webm";
import ResearchIcon from "../assets/images/icons/research.png";
import HandshakeIcon from "../assets/images/icons/handshake.png";
import GrowthIcon from "../assets/images/icons/growth.png";
import RocketIcon from "../assets/images/icons/rocket.png";
import ReviewPerson1 from "../assets/images/persons/person1.jpeg";
import ReviewPerson2 from "../assets/images/persons/person2.jpeg";
import ReviewPerson3 from "../assets/images/persons/person3.jpeg";
import CenteredContent from "../components/CenteredContent/CenteredContent";
import SeparatedList from "../components/SeparatedList/SeparatedList";
import CounterList from "../components/CounterList/CounterList";
import ExpandedItem from "../components/ExpandedItem/ExpandedItem";
import LeftTitledContent from "../components/LeftTitledContent/LeftTitledContent";
import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
import ReviewBox from "../components/ReviewBox/ReviewBox";
import VideoBox from "../components/VideoBox/VideoBox";

const HomePage = () => {
    return (
        <FullwidthLayout>
            <Hero
                title="Launch + Grow by MVP Health Care"
                text="A proven innovation practice for accelerating the launch of Medicare Advantage plans."
                buttonText="Let's talk"
                buttonUrl="/contact"
                videoLink={HeroVideo}
                className="bg--grey"
            />

            <ContentWithVideo
                label="The market"
                title="Opportunity is growing in the Medicare Advantage market. Here is how to capture it."
                text="By 2030, 26 million more baby boomers will age into Medicare. That is why the number of Medicare Advantage plans has grown by 71% since 2017. With more than 3,800 available options, the average consumer has 39 plans to choose from, making it essential that you innovate and differentiate. Together, we’ll create plans that match the real-world needs of your Medicare-eligible customers so your Medicare Advantage business can stand out in an increasingly crowded marketplace."
                videoLink={MarketVideo}
                className="bg--secondary reversed"
            />

            <CenteredContent
                label="What makes us different"
                title="Launch + Grow combines decades of experience with proven practice innovations."
                subtitle="Get to market faster with high-performing Medicare Advantage plans. Here's how:"
                className="bg--secondary"
            >
                <SeparatedList
                    listItems={[
                        "Co-create differentiated plans based on proprietary consumer data specific to your market",
                        "Leverage our 30+ years of Medicare experience and proven partnership framework",
                        "Gain a partner committed to a long-term relationship and long-term success",
                    ]}
                />
            </CenteredContent>

            <CenteredContent
                label="Our approach"
                title="Co-creation gives us an advantage."
                subtitle="MVP lights the path to success with our collaborative discovery process, intellectual property assets, and suite of robust consulting and implementation services."
                className="bg--milk"
            >
                <CounterList
                    items={[
                        {
                            title: "Discovery + Assessment",
                            text: "We'll work closely with your team to understand your needs and business goals. Together, we'll pool our complementary strengths, maximize efficiencies, and build to scale.",
                            iconUrl: ResearchIcon,
                        },
                        {
                            title: "Co-Creation + Differentiation",
                            text: "We'll leverage proprietary data to identify target markets and spotlight unmet consumer needs in the communities you serve. Our proven partnership framework can guide our collaboration to build a differentiated product—one that allows your Medicare Advantage offering to stand out from the crowd.",
                            iconUrl: HandshakeIcon,
                        },
                        {
                            title: "Implementation + Acceleration",
                            text: "We bring more than 30 years of Medicare Advantage and go-to-market experience to your business, helping to reduce your exposure to risk, maximize revenue opportunity, and increase your speed to market in a highly regulated landscape.",
                            iconUrl: GrowthIcon,
                        },
                        {
                            title: "Insight + Agility",
                            text: "Your business must remain agile to succeed in the rapidly changing Medicare Advantage market. We'll work with you to continuously monitor and measure performance, learn from the data and insights, modify as needed, and strengthen our partnership.",
                            iconUrl: RocketIcon,
                        },
                    ]}
                />
            </CenteredContent>

            <LeftTitledContent
                title="Your partner to launch. Your partner to grow."
                subtitle="Combine your expertise with our capabilities to accelerate your Medicare Advantage business."
                label="Why launch and grow"
                buttonText="Let's talk"
                buttonUrl="/contact"
                className="bg--milk"
            >
                <h4>Advices</h4>
                <ExpandedItem
                    title="Listen first"
                    info="Your skills, knowledge, and experience are critical to our mutual success. That's why our first step is always to listen."
                />
                <ExpandedItem
                    title="Innovate + Differentiate"
                    info="Our expertise in product design, sales, marketing, regulatory compliance, and customer experience opens up your market and helps build products that improve lives and grow your organization."
                />
                <ExpandedItem
                    title="Partner for the Long Term"
                    info="Launching a Medicare Advantage plan is just the first milestone. We partner for the long-term and grow plans that serve your population for years to come."
                />
                <ExpandedItem
                    title="Marketing + Sales Strategy"
                    info="Use data-driven evidence to identify customer needs, co-develop marketing strategies, deliver successful sales campaigns, and manage a joint budget."
                />
                <ExpandedItem
                    title="Regulation + Compliance Support"
                    info="Draw on MVP's market experience with regulatory compliance around required plan filings, communications, ongoing claims and reporting submissions, and customer engagement records."
                />
                <ExpandedItem
                    title="Provider Network"
                    info="Identify and fill gaps in provider type and access, strengthen provider relationships over time, and promote the quintuple aim for healthcare improvement."
                />
                <ExpandedItem
                    title="Product Design"
                    info="Draw on comprehensive data about customer needs to co-create product benefits, design services, and deliver effective training and implementation."
                />
            </LeftTitledContent>

            <CenteredContent
                title="From our partners"
                className="bg--secondary"
            >
                <SimpleSlider>
                    <ReviewBox
                        person="John R. Brumsted, MD"
                        position="Former President & CEO"
                        photoLink={ReviewPerson1}
                        text="When we started looking for a partner in this space, MVP Health Care came out on top for a number of reasons: They're a not-for-profit, they have a like-minded approach to health care, and Mr. Del Vecchio's provider background. From the provider perspective, we look for alignment of vision and the willingness of the insurance company to break the status quo and break decades of business processes to do things differently. MVP Health Care was a clear frontrunner here."
                        className="bg--secondary-dark"
                    />
                    <ReviewBox
                        person="Lindsay Farrell"
                        position="President & CEO"
                        photoLink={ReviewPerson2}
                        text="MVP Health Care and Open Door Family Medical Centers have built a long-standing and profound partnership deeply rooted in our shared mission to create healthier communities. Our partnership goes beyond the walls of Open Door practices and has had a significant impact on ensuring our most vulnerable populations have access to high-quality health care. The success of our partnership is a testament to the joint commitment demonstrated by both executive teams. I continue to be impressed by what we can accomplish through mission-centered collaboration."
                        className="bg--secondary-dark"
                    />
                    <ReviewBox
                        person="J. Patrick Foley"
                        position="Co-Founder and CEO"
                        photoLink={ReviewPerson3}
                        text="Collaborating with MVP has allowed us to further our shared mission to deliver personalized care to vulnerable New Yorkers with complex needs, all in service to creating a more equitable health system. We are proud to partner with MVP. Together, we’re creating innovative D-SNP plans that use data-driven insights and a person-centric approach to reimagine the health insurance experience."
                        className="bg--secondary-dark"
                    />
                </SimpleSlider>
            </CenteredContent>

            <LeftTitledContent
                title="Launch + Grow by MVP builds partnerships with payers and health systems based on shared values, joint leadership, and a growth mindset."
                buttonText="Let's talk"
                buttonUrl="/contact"
                className="bg--grey videocontent pb-0"
            >
                <VideoBox videoLink={FooterVideo} />
            </LeftTitledContent>
        </FullwidthLayout>
    );
};

export default HomePage;
