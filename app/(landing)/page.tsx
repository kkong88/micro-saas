import { Button } from "@/components/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div> Landing Page (unportected)
            <div>
                <Link href='/sign-in'>
                        <Button>
                            Login!
                        </Button>
                </Link>
                <Link href='/sign-up'>
                        <Button>
                            Register here!
                        </Button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
