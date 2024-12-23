import ProfilePicture from "./MyImg.jsx"
import Bio from "./Bio.jsx";

function AboutMe() {
    return (
        <div className="flex items-center justify-center mt-40">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-2 md:space-x-12 max-w-screen-lg mx-auto">
                {/* Immagine del profilo */}
                <div className="flex-shrink-0 s ">
                    <ProfilePicture
                        src="dist/img/FotoProfilo.svg"
                        alt="User Profile"
                        size="largest"
                        hasBorder={true}
                        hoverEffect={false}
                    />
                </div>

                {/* Biografia */}
                <div className="pt-4  px-1 ">
                    <Bio />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
