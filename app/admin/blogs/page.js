import { BlogsList } from "@/comp/blogs/BlogsList";
import { Button } from "@/components/ui/button";

const AddBlogsButton = () => {
    return (
        <div className=" flex justify-end">
            <Button className="text-white bg-blue-500 hover:bg-blue-600">Add Blogs</Button>
        </div>
    )
}

const Blogs = () => {
    return (
        <div className="px-10">
            <AddBlogsButton />
            <BlogsList />
        </div>
    )
};

export default Blogs;