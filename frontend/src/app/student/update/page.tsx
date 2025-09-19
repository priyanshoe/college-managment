"use client"
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function UpdateStudentPage() {
    const searchParams = useSearchParams();
    const college_email = searchParams.get("college_email");
    const role = "teacher";

    const StudentData = {
        firstName: "Jhon",
        lastName: "Doe",
        rollNumber: "12345",
        email: "jhon.doe@example.com",
        course: "Computer Science",
        year: "3rd",
        dob: "2000-01-01",
        address: "123 Main St, Anytown, USA",
        college_email: college_email
    };




    const [studentData, setStudentData] = useState(StudentData);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit logic here
        console.log(studentData);

        alert("Student details updated!");
        router.push(`/${role}`);
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-gray-800 rounded-lg shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-6 text-gray-100 text-center">
                    Update Student Details
                </h1>
                <div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-100 font-semibold mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={studentData.firstName || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-100 font-semibold mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={studentData.lastName || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Roll Number</label>
                        <input
                            type="text"
                            name="rollNumber"
                            value={studentData.rollNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={studentData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={studentData.course}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Year</label>
                        <input
                            type="text"
                            name="year"
                            value={studentData.year}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={studentData.dob}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-semibold mb-1">Address</label>
                        <textarea
                            name="address"
                            value={studentData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <Button className="" variant="secondary" onClick={() => router.push(`/${role}`)}>
                        Home
                    </Button>
                    <Button className="" variant="secondary" type="submit">
                        Update
                    </Button>
                </div>
            </form >
        </div >
    );
}