import { auth, signOut } from "@/auth";
import { DEFAULT_NO_LOGGED_REDIRECT } from "@/routes";

const SettingsPage = async () => {
    const session = await auth();

    return ( 
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut({redirectTo: DEFAULT_NO_LOGGED_REDIRECT});
            }}>
                <button type="submit">
                    Sign out
                </button>
            </form>
        </div>
     );
}
 
export default SettingsPage;