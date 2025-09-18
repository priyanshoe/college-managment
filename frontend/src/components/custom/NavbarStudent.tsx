'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    let role = "teacher"
    if(role == "student"){
        return  (
            <nav className=" w-full bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger>Admission</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => router.push("/student/addmission/new")}>New Admission</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push("/student/addmission/remove")}>Remove Admission</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Students</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Search Student</DropdownMenuItem>
                            <DropdownMenuItem>Update Student</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update Marks</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Teacher</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Search Teacher</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Assignment</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>New Assignment</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Check Assignment</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div>
                    <h3>Student</h3>
                </div>
            </nav>
        );
    }
}
