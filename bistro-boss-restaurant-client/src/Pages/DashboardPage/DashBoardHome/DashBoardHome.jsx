import useAuth from "../../../Hooks/useAuth";

const DashBoardHome = () => {
    const {user} = useAuth();

    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <div>
                        <h2>Hi, <span>{user?.displayName}</span>, Welcome Back</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoardHome;