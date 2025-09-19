'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StudentAdmission() {

    const router = useRouter();

    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        aadhaar: "",
        phone: "",
        course: "",
        age: "",
        gender: "",
        address: ""
    });

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>) =>{
        setStudentData({...studentData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("http://localhost:3030/api/student/add/", studentData)
        .catch(err => console.log(err))
        .then((res:any) => {
            if(res.data) alert("Student added")
            else alert("Student already exist")
        })
        .then(()=> router.push('/teacher'))
        
    };

    return(
        <form className="max-w-md mx-auto p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">New Student Admission</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="firstName">First Name</label>
                <input className="w-full border rounded px-3 py-2" id="firstName" name="firstName" type="text" value={studentData.firstName}
                 onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="lastName">Last Name</label>
                <input className="w-full border rounded px-3 py-2" id="lastName" name="lastName" type="text" value={studentData.lastName}
                onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                <input className="w-full border rounded px-3 py-2" id="email" name="email" type="email" value={studentData.email}
                onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="aadhaar">Aadhaar Number</label>
                <input className="w-full border rounded px-3 py-2" id="aadhaar" name="aadhaar" type="text" value={studentData.aadhaar}
                onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="phone">Phone</label>
                <input className="w-full border rounded px-3 py-2" id="phone" name="phone" type="tel" value={studentData.phone}
                onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="course">Course</label>
                <select className="w-full border rounded px-3 py-2" id="course" name="course" onChange={handleChange}>
                    <option value="">Select a course</option>
                    <option value="bsc">B.Sc</option>
                    <option value="bcom">B.Com</option>
                    <option value="ba">B.A</option>
                    <option value="btech">B.Tech</option>
                    <option value="msc">M.Sc</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="age">Age</label>
                <input className="w-full border rounded px-3 py-2" id="age" name="age" type="number" min={16} max={100}
                onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Gender</label>
                <div className="flex gap-4">
                    <label>
                        <input type="radio" name="gender" onChange={handleChange} value="male" /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" onChange={handleChange} value="female" /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" onChange={handleChange} value="other" required /> Other
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="address">Address</label>
                <textarea className="w-full border rounded px-3 py-2" id="address" name="address" rows={2} value={studentData.address}
                onChange={handleChange} />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
                Submit Admission
            </button>
        </form>
    )
}