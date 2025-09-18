'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function StudentRemovePage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        router.push('/teacher')
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold mb-6">Remove Student</h2>
            <form className="flex flex-col gap-4 w-80 bg-gray-800 p-6 rounded shadow" onSubmit={handleSubmit}>
                <label className="flex flex-col">
                    <span className="mb-1 font-medium">College Email</span>
                    <input
                        type="email"
                        name="collegeEmail"
                        required
                        className="border-none rounded bg-gray-700 px-3 py-2"
                        placeholder="student@college.edu"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1 font-medium text-gray-200">Aadhaar Number</span>
                    <input
                        type="text"
                        name="aadhaar"
                        required
                        pattern="\d{12}"
                        maxLength={12}
                        className="border-none rounded px-3 py-2 bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="123412341234"
                    />
                </label>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant={"destructive"}>Remove Student</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete student account
                                and remove student data.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </form>
        </div>
    )
}