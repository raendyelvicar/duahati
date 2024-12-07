import { Button } from "@/components/ui/button";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Detail() {
    return (
        <Layout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Ubah Profil Mempelai
            </h2>
        }
    >
        <div className="py-12">
            <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <Button variant="outline" size="icon" asChild>
                    <Link to={""} >
                        <ChevronLeft />
                    </Link>
                </Button>
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    
                </div>
            </div>
        </div>
    </Layout>
    )
}