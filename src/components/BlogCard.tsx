// "use client"
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Calendar } from "lucide-react";
import moment from "moment";

// 1. Add 'category' to the props interface
interface BlogCardProps {
  image: string;
  title: string;
  desc: string;
  id: string;
  time: string;
  category: string; // Added category prop
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  desc,
  id,
  time,
  category, // Destructure the new prop
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="overflow-hidden rounded-lg shadow-none transition-shadow duration-300 hover:shadow-xl border-none">
        <div className="w-full h-[200px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4"> {/* Adjusted padding for better spacing */}
          <div>
            {/* 2. Add the category badge */}
            <div className="mb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                #{category}
              </span>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              <span>{moment(time).format("DD-MM-YYYY")}</span>
            </p>
            <h2 className="text-lg font-semibold mt-1 line-clamp-1 text-center">
              {title}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-1">{desc.slice(0, 30)}...</p> {/* Adjusted styling */}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;