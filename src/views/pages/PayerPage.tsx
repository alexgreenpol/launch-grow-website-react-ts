import Hero from "../components/Hero/Hero";
import FullwidthLayout from "../layouts/FullwidthLayout";
import HeroVideo from "../assets/video/vid4.mp4";
import FooterVideo from "../assets/video/vid3.webm";
import LandscapeImg from "../assets/images/page-img-1.jpeg";
import CenteredContent from "../components/CenteredContent/CenteredContent";
import SeparatedList from "../components/SeparatedList/SeparatedList";
import LeftTitledContent from "../components/LeftTitledContent/LeftTitledContent";
import VideoBox from "../components/VideoBox/VideoBox";
import ImageBox from "../components/ImageBox/ImageBox";

const PayerPage = () => {
    return (
        <FullwidthLayout>
            <Hero
                title="Together We Are Better"
                text="Try and choose."
                buttonText="Let's talk"
                buttonUrl="/contact"
                videoLink={HeroVideo}
                className="bg--grey"
            />

            <CenteredContent
                title="You have a network of established relationships and we have the industry experience."
                subtitle="Launch + Grow by MVP merges 30 years of experience in Medicare with data-driven innovations to meet the unique needs of your providers and consumers. With our proven process for launching Medicare Advantage products, we'll do more than help you deliver outstanding plans. We'll also work together toward comprehensive improvement in sales, marketing, customer experience, and regulatory compliance."
                className="bg--grey pt-0"
            >
                <></>
            </CenteredContent>

            <LeftTitledContent
                title="A path proven to work."
                subtitle="Our customer-centric approach uses provider and consumer data to design plans that identify and satisfy unmet consumer needs and appeal to customers."
                label="Case studies"
                buttonText="See the result"
                buttonUrl="#"
                className="bg--secondary"
            >
                <ImageBox imgSrc={LandscapeImg} />
            </LeftTitledContent>

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

export default PayerPage;
