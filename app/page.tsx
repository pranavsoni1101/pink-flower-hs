import AcademicsOverview from "@/components/home/academics-overview";
import Hero from "@/components/home/hero";
import LeadershipAwards from "@/components/home/leadership-awards";
import StudentLife from "@/components/home/student-life";
import WhyChooseUs from "@/components/home/why-choose-us";

const Home = () => {
    return (
        <main>
            <Hero />
            <WhyChooseUs />
            <AcademicsOverview />
            <LeadershipAwards />
            <StudentLife />
        </main>
    );
};

export default Home;