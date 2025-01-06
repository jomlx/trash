import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function Library() {
    return (
        <div className="w-[800px] h-full shadow-md">
            <div className="shadow-md p-3 px-4 text-2xl font-bold">Library</div>
            <div className="p-3 px-4">
                <ul className="flex flex-wrap gap-4 justify-start">
                {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="flex-1 min-w-[220px] max-w-[250px]">
              <Card className="hover:bg-gray-100">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
                </ul>
            </div>
        </div>
    )
}

export default Library;