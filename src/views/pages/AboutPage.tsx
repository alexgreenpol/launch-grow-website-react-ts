import FullwidthLayout from "../layouts/FullwidthLayout";
import AboutVideo from "../assets/video/vid6.webm";
import FooterVideo from "../assets/video/vid3.webm";
import CenteredContent from "../components/CenteredContent/CenteredContent";
import LeftTitledContent from "../components/LeftTitledContent/LeftTitledContent";
import VideoBox from "../components/VideoBox/VideoBox";
import ContentWithVideo from "../components/ContentWithVideo/ContentWithVideo";
import ButtonLink from "../components/ButtonLink/ButtonLink";

const AboutPage = () => {
    return (
        <FullwidthLayout>
            <ContentWithVideo
                label="About"
                title="Launch + Grow℠ was created by MVP Health Care® (MVP) to help like-minded payers and health systems deliver intuitive, customer-centric Medicare Advantage plans."
                text="With a proven process of innovation and our partnership framework, Launch + Grow is designed to help you stand out in a rapidly growing and fiercely competitive market."
                videoLink={AboutVideo}
                className="bg--grey"
            />

            <CenteredContent
                title="With over 30 years of Medicare Advantage experience and a proprietary partnership framework, MVP teams up with payers and health systems to co-create highly rated and successful plans."
                subtitle="MVP Health Care (MVP) is a nationally recognized, not-for-profit health insurer caring for customers across New York and Vermont. We are committed to the well-being of our customers and the communities we serve, and we share our expertise through strategic partnerships with payers and health systems across the country. We work directly with our partners to provide an innovative range of health benefit plan options for individuals and businesses. MVP is making health insurance more convenient, more supportive, and more personal."
                className="bg--milk"
            >
                <></>
            </CenteredContent>

            <CenteredContent
                title="MVP is consistently rated among the nation's top health insurance companies."
                subtitle="MVP Medicare Advantage plans are highly rated by Medicare. In 2023, MVP Medicare Advantage HMO-POS plans earned 5 out of 5 stars. And our 5-Star MVP DualAccess plan for individuals with Medicare and Medicaid is the highest rated Dual Special Needs (HMO D-SNP) plan in New York."
                className="bg--milk"
            >
                <></>
            </CenteredContent>

            <CenteredContent
                title="MVP Health Care is proud to be named among U.S. News & World Report's Best Medicare Advantage Plan Insurance Companies in New York for 2023."
                subtitle="Meet the Executive Leadership Team. Together we'll innovate, launch, and grow."
                className="bg--milk"
            >
                <ButtonLink url="#">Our Leadership</ButtonLink>
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

export default AboutPage;
