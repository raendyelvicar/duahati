import { Button } from "@/components/ui/button";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Index() {
    return (
        <Layout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profil Mempelai
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className='flex justify-end px-4 md:px-0'>
                        <Button asChild>
                            <Link to={"/mempelai/create"}>Tambah Profil</Link>
                        </Button>
                    </div>
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}