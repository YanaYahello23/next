import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import {signOut} from "@/auth";
export const experimental_ppr = true;
export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                >
                    <button className="flex h-[48px] grow w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6 text-blue-300" />
                        <div className="hidden md:block text-blue-300">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}