import Card  from "../components/Card";
function Reviewer() {
    return (
        <div className="w-[800px] h-full shadow-md">
                <div className="shadow-md p-3 px-4 text-2xl font-bold">Reviewer</div>
                    <div className="p-3 px-4">
                        <span>Choose from your Library.</span>
                        <ul className="flex flex-wrap gap-4 justify-start mt-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <li key={index} className="flex-1 min-w-[220px] max-w-[250px]">
                                <Card>
                                    
                                </Card>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
    )
}

export default Reviewer;