"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-box.jpg" height="300" width="300" alt="empty" />
      <h2 className="font-lg font-medium">
        Wellcome to {user?.firstName}&apos;s Notion
      </h2>
      <button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </button>
    </div>
  );
};

export default DocumentsPage;
