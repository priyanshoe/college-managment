'use client'
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function studentDetails() {
    const router = useRouter();
    const handleclick=()=>{
        if(role=="teacher"){
            router.push("/teacher")
        }
        else if(role=="student"){
            router.push("/student")
        }
        else{
            router.push("/")
        }
    }


    const [idType, setIdType] = useState("Email")
    const [idValue, setIdValue] = useState("")
    const [studentData, setStudentData] = useState({} as any);

    const handlesubmit = async (e: any) => {
        e.preventDefault();
        if(idValue=="demo"){
            setStudentData({
                name: "John Doe",
                rollNumber: 12334,
                email: "johndoe@example.com",
                course: "Computer Science",
                year: "3rd",
                dob: "2002-05-15",
                address: "123 Main St, City, Country"
            })
            setstudentLogged(true);
        }
    }

    const [studentLogged, setstudentLogged] = useState(true)

    let role = "teacher"

    if (studentLogged) {
        return (
            <div className="h-screen w-full flex flex-col justify-center items-center">

                <div className="  p-6 bg-gray-800 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6 text-gray-100 text-center">Student Details</h1>
                    <div className="space-y-4">
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Name:</strong> {studentData.name}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Roll Number:</strong> {studentData.rollNumber}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Email:</strong> {studentData.email}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Course:</strong> {studentData.course}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Year:</strong> {studentData.year}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Date of Birth:</strong> {studentData.dob}</p>
                        <p className="text-gray-300"><strong className="font-semibold text-gray-100">Address:</strong> {studentData.address}</p>
                    </div>
                    <Button className="mt-3" variant={"secondary"}
                    onClick={() => router.push(`/${role}`)}
                    >Home</Button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="h-screen w-full flex flex-col justify-center items-center text-white">
                <form
                    className="flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-md"
                    onSubmit={handlesubmit}
                >
                    <h2 className="text-xl font-bold text-gray-100 mb-2">Search Student</h2>

                    <div className="flex space-x-4">

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {idType}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={idType} onValueChange={setIdType}>                                    
                                    <DropdownMenuRadioItem value="Email">Email</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="College_email">College email</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Phone">Phone</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Aadhaar">Aadhaar</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <input
                            type="text"
                            name="identifier"
                            placeholder={`Enter ${idType}`}
                            className="px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
                            required
                            value={idValue}
                            onChange={(e) => setIdValue(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
