'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    let role = "teacher"
    if (role == "teacher") {
        return (
            <nav className=" w-full bg-gray-800 text-white p-4 px-8 flex justify-between items-center">
                <div className="flex space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger>Admission</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => router.push("/student/admission/new")}>New Admission</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push("/student/admission/remove")}>Remove Admission</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Students</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => router.push("/student/details")}>Search Student</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update Marks</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>Teacher</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => router.push("/teacher/details")}>Search Teacher</DropdownMenuItem>
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

                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h3>Teacher</h3>
                </div>
            </nav>
        );
    }
}
