import { Navbar } from "./_components/navbar";

const LandingPageLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            {/* <Navbar /> */}
            <main>
                {children}
            </main>

         </div>
    );
}
export default LandingPageLayout;