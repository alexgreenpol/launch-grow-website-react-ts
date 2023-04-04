import FullwidthLayout from "../layouts/FullwidthLayout";
import FormVideo from "../assets/video/vid7.mp4";
import FooterVideo from "../assets/video/vid3.webm";
import LeftTitledContent from "../components/LeftTitledContent/LeftTitledContent";
import VideoBox from "../components/VideoBox/VideoBox";
import PlusList from "../components/PlusList/PlusList";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
    return (
        <FullwidthLayout>
            <section className="contact pd--m">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2 pd--m">
                            <h4>Launch + Grow by MVP Health Care</h4>
                            <ContactForm />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pd--m">
                            <VideoBox videoLink={FormVideo} />
                            <h5>
                                Ready to see how Launch + Grow by MVP can help
                                you get to market faster with high-performing
                                Medicare Advantage plans? We're ready to talk!
                            </h5>
                            <PlusList
                                items={[
                                    "Co-create differentiated plans based on proprietary consumer data specific to your market",
                                    "Leverage our 30+ years of Medicare experience and proven partnership framework",
                                    "Gain a partner committed to a long-term relationship and long-term success",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

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

export default ContactPage;
