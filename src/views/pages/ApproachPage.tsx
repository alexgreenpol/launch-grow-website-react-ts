import FullwidthLayout from "../layouts/FullwidthLayout";
import ApproachVideo from "../assets/video/vid5.mp4";
import EvidenceVideo from "../assets/video/vid1.mp4";
import FooterVideo from "../assets/video/vid3.webm";
import ResearchIcon from "../assets/images/icons/research.png";
import HandshakeIcon from "../assets/images/icons/handshake.png";
import GrowthIcon from "../assets/images/icons/growth.png";
import RocketIcon from "../assets/images/icons/rocket.png";
import CenteredContent from "../components/CenteredContent/CenteredContent";
import LeftTitledContent from "../components/LeftTitledContent/LeftTitledContent";
import VideoBox from "../components/VideoBox/VideoBox";
import ContentWithVideo from "../components/ContentWithVideo/ContentWithVideo";
import CounterList from "../components/CounterList/CounterList";

const ApproachPage = () => {
    return (
        <FullwidthLayout>
            <ContentWithVideo
                label="Our approach"
                title="We create value together by blending the best of our two organizations."
                text="The result is a comprehensive Medicare Advantage product built around your customers, tailored to your geographic location, and poised to stand out in a competitive market."
                videoLink={ApproachVideo}
                className="bg--secondary reversed"
            />

            <ContentWithVideo
                label="Evidence-driven decision"
                title="Using evidence to drive decisions."
                text="Launch + Grow by MVP uses a proprietary, customer-centric framework we call Evidence-Based InnovationSM (EBI) to ensure every decision we make together is grounded in customer data. We identify pain points from the perspective of target consumers and providers and use this data to design compelling Medicare Advantage plans."
                buttonText="The EBI advantage"
                buttonUrl="#"
                videoLink={EvidenceVideo}
                className="bg--milk"
            />

            <CenteredContent
                label="Our commitment"
                title="We are 100% committed to co-creation with our partners."
                subtitle="Our partnership innovation framework increases efficiency, speed, and confidence with comprehensive guidelines on governance, roles, responsibilities, and accountabilities."
                className="bg--secondary"
            >
                <></>
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
                title="Launch + Grow by MVP builds partnerships with payers and health systems based on shared values, joint leadership, and a growth mindset."
                buttonText="Let's talk"
                buttonUrl="/contact"
                className="bg--secondary videocontent pb-0"
            >
                <VideoBox videoLink={FooterVideo} />
            </LeftTitledContent>
        </FullwidthLayout>
    );
};

export default ApproachPage;
