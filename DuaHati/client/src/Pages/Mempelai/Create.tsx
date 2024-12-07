import { Button } from "@/components/ui/button";
import Layout from "../Layouts/Layout";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Create() {
    return (
        <Layout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Tambah Profil Mempelai
            </h2>
        }
    >
        <div className="py-12">
            <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <Button variant="outline" size="icon" asChild>
                    <Link to={"/mempelai"} >
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